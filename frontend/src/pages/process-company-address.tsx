import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import ProcessLayout from "../components/ProcessLayout";
import { useOrder } from "../contexts/OrderContext";
import { US_STATES as usStates } from "../data/usStates";

type FormErrors = {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
};

export default function ProcessComAdd() {

const navigate = useNavigate();
const { order, setCompanyAddress } = useOrder();

const [country,setCountry] = useState(order.companyAddress.country || "United States");
const [addressType,setAddressType] = useState<'virtual' | 'own'>(order.companyAddress.addressType);

const [street,setStreet] = useState(order.companyAddress.street);
const [city,setCity] = useState(order.companyAddress.city);
const [state,setState] = useState(order.companyAddress.state);
const [zip,setZip] = useState(order.companyAddress.zip);

const [errors, setErrors] = useState<FormErrors>({});
const [isZipLoading,setZipLoading] = useState(false);


const countries = [
"United States","Canada","United Kingdom","India","Australia","Germany",
"France","Italy","Spain","Netherlands","Sweden","Norway","Denmark",
"Finland","Brazil","Mexico","Japan","China","South Korea","Singapore",
"UAE","Saudi Arabia","South Africa","New Zealand","Ireland"
];

/* ---------------- VALIDATION ---------------- */

const validateField = (name: "street" | "city" | "state" | "zip", value: string) => {

const newErrors = {...errors};

switch(name){

case "street":
if(!value.trim()) newErrors.street="Street address is required";
else delete newErrors.street;
break;

case "city":
if(!value.trim()) newErrors.city="City is required";
else delete newErrors.city;
break;

case "state":
if(!value) newErrors.state="State is required";
else delete newErrors.state;
break;

case "zip":
if(!value.trim()) newErrors.zip="ZIP Code is required";
else if(!/^\d{5}$/.test(value)) newErrors.zip="Enter valid ZIP Code";
else delete newErrors.zip;
break;

default:
break;

}

setErrors(newErrors);

};


/* ---------------- ZIP AUTO DETECT ---------------- */

useEffect(()=>{

if(zip.length===5){

setZipLoading(true);

fetch(`https://api.zippopotam.us/us/${zip}`)
.then(res=>res.json())
.then(data=>{

if(data?.places?.length){

setCity(data.places[0]["place name"]);
setState(data.places[0]["state"]);

validateField("city",data.places[0]["place name"]);
validateField("state",data.places[0]["state"]);

}

setZipLoading(false);

})
.catch(()=>{
setZipLoading(false);
});

}

},[zip]);


/* ---------------- FORM VALID ---------------- */

const isFormValid = () => {

return (
street &&
city &&
state &&
zip &&
Object.keys(errors).length===0
);

};


/* ---------------- NEXT ---------------- */

const handleNext = () => {

if(!isFormValid()){

validateField("street",street);
validateField("city",city);
validateField("state",state);
validateField("zip",zip);

return;

}

setCompanyAddress({ addressType, country, street, city, state, zip });
navigate("/process-members");

};



return (

<ProcessLayout progress={40} title="Company Address Information">

<div className="space-y-6">


{/* VIRTUAL ADDRESS CARD */}

<div className="bg-white p-8 rounded-lg border border-gray-200">

<h2 className="text-xl font-bold mb-2">
Company Address Information
</h2>

<p className="text-gray-600 mb-6">
Formation documents are publicly available and disclose business or owner addresses, so we recommend using our Virtual Address service.
</p>

<div className="border rounded-lg p-6">

<div className="flex justify-between items-center mb-4">

<h3 className="font-semibold">
Virtual Address
</h3>

<span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded">
FIRST MONTH FREE
</span>

</div>

<ul className="space-y-2 text-sm mb-6">

<li className="flex gap-2">
<Check size={16} className="text-green-600"/> Keep your address off public records
</li>

<li className="flex gap-2">
<Check size={16} className="text-green-600"/> Real physical address for your business
</li>

<li className="flex gap-2">
<Check size={16} className="text-green-600"/> Compliant with state mail requirements
</li>

<li className="flex gap-2">
<Check size={16} className="text-green-600"/> Unlimited mail scans with instant alerts
</li>

<li className="flex gap-2">
<Check size={16} className="text-green-600"/> 24/7 access to your mail online
</li>

</ul>


{/* RADIO */}

<div className="grid grid-cols-2 gap-4">

<label className={`flex gap-3 border p-4 rounded-lg cursor-pointer
${addressType==="virtual"?"border-cyan-500 bg-cyan-50":""}`}>

<input
type="radio"
checked={addressType==="virtual"}
onChange={()=>setAddressType("virtual")}
className="accent-cyan-500"
/>

Use Virtual Address

</label>


<label className={`flex gap-3 border p-4 rounded-lg cursor-pointer
${addressType==="own"?"border-cyan-500 bg-cyan-50":""}`}>

<input
type="radio"
checked={addressType==="own"}
onChange={()=>setAddressType("own")}
className="accent-cyan-500"
/>

I'll use my own address

</label>

</div>

<p className="text-base font-semibold text-gray-600 mt-6">
  The first month of the Virtual Address service is free, then
  <span className="font-semibold"> $29/month</span>. Cancel anytime.
</p>

<p className="text-xs text-gray-500 mt-1">
  Some states may require an address amendment if the service is canceled.
</p>

<div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-700">
<p>Before we can open and scan your mail, USPS regulations require us to verify your identity and address. You will be able to complete this verification and sign the required USPS Form 1583 directly from your dashboard.</p>
</div>

</div>

</div>



{/* CONTACT ADDRESS (Virtual selected) */}

{addressType==="virtual" && (

<div className="bg-white p-8 rounded-lg border border-gray-200">

<h3 className="text-lg font-bold">
Contact Address
</h3>

<p className="text-sm mb-5">Please provide the address of the person whom we may contact for State, IRS, or legal correspondence relating to your business.</p>
<select
value={country}
onChange={(e)=>setCountry(e.target.value)}
className="w-full border px-4 py-3 rounded-lg mb-4"
>

{countries.map(c=>(
<option key={c} value={c}>{c}</option>
))}

</select>


<input
value={street}
onChange={(e)=>{
setStreet(e.target.value);
validateField("street",e.target.value);
}}
placeholder="Street Address"
className="w-full border px-4 py-3 rounded-lg mb-4"
/>


<div className="grid grid-cols-3 gap-4">

<input
value={city}
onChange={(e)=>setCity(e.target.value)}
placeholder="City"
className="border px-4 py-3 rounded-lg"
/>

<select
value={state}
onChange={(e)=>setState(e.target.value)}
className="border px-4 py-3 rounded-lg"
>
<option value="">Select State</option>
{usStates.map(s=>(
<option key={s} value={s}>{s}</option>
))}
</select>

<input
value={zip}
onChange={(e)=>setZip(e.target.value)}
placeholder="Zip Code"
className="border px-4 py-3 rounded-lg"
/>

</div>

{isZipLoading && (
<p className="text-xs text-gray-500 mt-2">
Detecting city/state...
</p>
)}

</div>

)}



{/* COMPANY ADDRESS (Own selected) */}

{addressType==="own" && (

<div className="bg-white p-8 rounded-lg border border-gray-200">

<div className="space-y-2 text-sm text-red-600 mb-6">

<p>Warning: I will provide a company address located in {order.selectedState?.name || 'the selected state'}.</p>
<p>Warning: Using a PO Box for company address is not allowed.</p>
<p>Warning: Address will be publicly visible.</p>

</div>

<h3 className="text-lg font-bold mb-6">
Company Address
</h3>


<input
value={street}
onChange={(e)=>setStreet(e.target.value)}
placeholder="Street Address"
className="w-full border px-4 py-3 rounded-lg mb-4"
/>


<div className="grid grid-cols-3 gap-4">

<input
value={city}
onChange={(e)=>setCity(e.target.value)}
placeholder="City"
className="border px-4 py-3 rounded-lg"
/>

<select
value={state}
onChange={(e)=>setState(e.target.value)}
className="border px-4 py-3 rounded-lg"
>
<option value="">Select State</option>
{usStates.map(s=>(
<option key={s} value={s}>{s}</option>
))}
</select>

<input
value={zip}
onChange={(e)=>setZip(e.target.value)}
placeholder="Zip Code"
className="border px-4 py-3 rounded-lg"
/>

</div>

</div>

)}



{/* BUTTONS */}

<div className="flex justify-between mt-8">

<button
onClick={()=>navigate("/process-contact")}
className="flex items-center gap-2 px-6 py-3 border rounded-lg"
>

<ChevronLeft size={16}/>
Back

</button>


<button
onClick={handleNext}
disabled={!isFormValid()}
className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white
${isFormValid()?"bg-cyan-600":"bg-gray-400 cursor-not-allowed"}`}
>

Next
<ChevronRight size={16}/>

</button>

</div>

</div>

</ProcessLayout>

);

}
