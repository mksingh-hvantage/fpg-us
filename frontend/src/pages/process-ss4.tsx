import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProcessLayout from "../components/ProcessLayout";
import { useOrder } from "../contexts/OrderContext";
import { US_STATES as usStates } from "../data/usStates";

export default function EINSection() {

const navigate = useNavigate();
const { order, setTaxIdInfo } = useOrder();

const [foreign,setForeign] = useState<"yes"|"no"|null>(order.taxIdInfo.foreign)
const [idType,setIdType] = useState<"ssn"|"itin"|null>(order.taxIdInfo.idType)

const [showYesModal,setShowYesModal] = useState(false)
const [showITINModal,setShowITINModal] = useState(false)

/* FORM STATES */

const [firstName,setFirstName] = useState(order.taxIdInfo.firstName)
const [lastName,setLastName] = useState(order.taxIdInfo.lastName)
const [ssn,setSSN] = useState(order.taxIdInfo.ssn)
const [itin,setITIN] = useState(order.taxIdInfo.itin)
const [country,setCountry] = useState(order.taxIdInfo.country)
const [street,setStreet] = useState(order.taxIdInfo.street)
const [city,setCity] = useState(order.taxIdInfo.city)
const [state,setState] = useState(order.taxIdInfo.state)
const [zip,setZip] = useState(order.taxIdInfo.zip)

const [errors,setErrors] = useState<Record<string, string>>({})

/* COUNTRIES */

const countries = [
"United States","India","Canada","United Kingdom","Australia","Germany","France","Italy","Spain",
"Netherlands","Belgium","Switzerland","Sweden","Norway","Denmark","Finland","Ireland","Portugal",
"Austria","Poland","Czech Republic","Hungary","Greece","Turkey","Israel","United Arab Emirates",
"Saudi Arabia","Singapore","Malaysia","Thailand","Indonesia","Philippines","Japan","South Korea",
"China","Vietnam","Mexico","Brazil","Argentina","Chile","South Africa","New Zealand"
]

/* VALIDATION */

const validateForm = () => {

const newErrors: Record<string, string> = {}

if(!firstName.trim())
newErrors.firstName="First name is required"

if(!lastName.trim())
newErrors.lastName="Last name is required"

if(foreign==="no" && idType==="ssn"){
if(!/^\d{3}-\d{2}-\d{4}$/.test(ssn))
newErrors.ssn="Enter valid SSN (000-00-0000)"
}

if(foreign==="no" && idType==="itin"){
if(!itin.trim())
newErrors.itin="ITIN is required"
}

if(!country)
newErrors.country="Country is required"

if(!street)
newErrors.street="Street address is required"

if(!city)
newErrors.city="City is required"

if(!state)
newErrors.state="State is required"

if(!zip)
newErrors.zip="Zip code is required"

setErrors(newErrors)

return Object.keys(newErrors).length===0
}

/* NEXT BUTTON */

const handleNext = () => {

if(!validateForm()) return

setTaxIdInfo({
  foreign, idType,
  firstName, lastName, ssn, itin,
  country, street, city, state, zip,
})

navigate("/process-business-banking")

}

return (

<ProcessLayout progress={55} title="Tax ID (EIN) Details">

<div className="bg-white border rounded-xl p-8">

<h2 className="text-xl font-semibold mb-3">
Tax ID (EIN) Details
</h2>

<p className="text-base text-gray-600 mb-6">
An Employer Identification Number (EIN) is a unique nine-digit code issued by the Internal Revenue Service (IRS) to identify a business entity for tax reporting and compliance purposes. Our team will submit your EIN request directly to the IRS through their electronic filing system, helping ensure the application is processed as quickly and efficiently as possible.
</p>

<hr className="mb-6"/>

<p className="text-base font-medium mb-3">
I am a foreign individual and do not have a social security number
</p>

<div className="grid grid-cols-2 gap-4 mb-6">

<label className={`border rounded-lg p-4 flex gap-3 cursor-pointer ${foreign==="yes"?"border-cyan-500 bg-cyan-50":""}`}>
<input
type="radio"
checked={foreign==="yes"}
onChange={()=>{
setForeign("yes")
setShowYesModal(true)
}}
/>
Yes
</label>

<label className={`border rounded-lg p-4 flex gap-3 cursor-pointer ${foreign==="no"?"border-cyan-500 bg-cyan-50":""}`}>
<input
type="radio"
checked={foreign==="no"}
onChange={()=>setForeign("no")}
/>
No
</label>

</div>


{order.contactInfo.firstName && (
<div className="border rounded-lg p-4 flex gap-3 mb-6">
<input type="checkbox"/>
<span className="text-base">{order.contactInfo.firstName} {order.contactInfo.lastName}</span>
</div>
)}


<div className="grid grid-cols-2 gap-4 mb-6">

<div>
<label className="text-base font-medium">First Name</label>
<input
value={firstName}
onChange={(e)=>setFirstName(e.target.value)}
className="border rounded-lg w-full px-4 py-3 mt-1"
/>
{errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
</div>

<div>
<label className="text-base font-medium">Last Name</label>
<input
value={lastName}
onChange={(e)=>setLastName(e.target.value)}
className="border rounded-lg w-full px-4 py-3 mt-1"
/>
{errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
</div>

</div>


{foreign==="no" && (

<>

<p className="text-base font-medium mb-3">
Identification number by which I will obtain the EIN
</p>

<div className="grid grid-cols-2 gap-4 mb-4">

<label className={`border rounded-lg p-4 flex gap-3 cursor-pointer ${idType==="ssn"?"border-cyan-500 bg-cyan-50":""}`}>
<input
type="radio"
checked={idType==="ssn"}
onChange={()=>setIdType("ssn")}
/>
SSN
</label>

<label className={`border rounded-lg p-4 flex gap-3 cursor-pointer ${idType==="itin"?"border-cyan-500 bg-cyan-50":""}`}>
<input
type="radio"
checked={idType==="itin"}
onChange={()=>setShowITINModal(true)}
/>
ITIN
</label>

</div>

{idType==="ssn" && (
<div className="mb-4">
<label className="text-base font-medium">SSN</label>
<input
value={ssn}
onChange={(e)=>setSSN(e.target.value)}
placeholder="900-00-0000"
className="border rounded-lg w-full px-4 py-3 mt-1"
/>
{errors.ssn && <p className="text-red-500 text-xs mt-1">{errors.ssn}</p>}
</div>
)}

{idType==="itin" && (
<div className="mb-4">
<label className="text-base font-medium">ITIN</label>
<input
value={itin}
onChange={(e)=>setITIN(e.target.value)}
placeholder="900-00-0000"
className="border rounded-lg w-full px-4 py-3 mt-1"
/>
{errors.itin && <p className="text-red-500 text-xs mt-1">{errors.itin}</p>}
</div>
)}

</>

)}


<h3 className="text-lg font-semibold mt-6 mb-2">
Physical Street Address
</h3>

<div className="space-y-3 mb-6">

{order.companyAddress.street && (
<label className="border rounded-lg p-4 flex gap-3">
<input type="checkbox"/>
<span>{order.companyAddress.street}, {order.companyAddress.city}, {order.companyAddress.state} {order.companyAddress.zip}</span>
</label>
)}

<div className="text-center text-gray-400 text-base">or</div>

<label className="border rounded-lg p-4 flex gap-3">
<input type="checkbox"/>
<span>Use the assigned company address provided by The Future Perfect Global LLC</span>
</label>

</div>


<div className="mb-6">

<label className="text-base font-medium">Country</label>

<select
value={country}
onChange={(e)=>setCountry(e.target.value)}
className="border rounded-lg w-full px-4 py-3 mt-1"
>
<option value="">Select Country</option>
{countries.map((c)=>(<option key={c}>{c}</option>))}
</select>

{errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}

</div>


<div className="grid grid-cols-2 gap-4">

<div>
<label className="text-sm font-medium">Street Address</label>
<input
value={street}
onChange={(e)=>setStreet(e.target.value)}
className="border rounded-lg w-full px-4 py-3 mt-1"
/>
{errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}
</div>

<div>
<label className="text-sm font-medium">
Address (Cont) <span className="text-gray-400">(Optional)</span>
</label>
<input className="border rounded-lg w-full px-4 py-3 mt-1"/>
</div>

</div>


<div className="grid grid-cols-3 gap-4 mt-6 mb-6">

<div>
<label className="text-sm font-medium">City</label>
<input
value={city}
onChange={(e)=>setCity(e.target.value)}
className="border rounded-lg w-full px-4 py-3 mt-1"
/>
{errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
</div>

<div>
<label className="text-sm font-medium">State</label>
<select
value={state}
onChange={(e)=>setState(e.target.value)}
className="border rounded-lg w-full px-4 py-3 mt-1"
>
<option value="">Select State</option>
{usStates.map(s=>(<option key={s} value={s}>{s}</option>))}
</select>
{errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
</div>

<div>
<label className="text-sm font-medium">Zip Code</label>
<input
value={zip}
onChange={(e)=>setZip(e.target.value)}
className="border rounded-lg w-full px-4 py-3 mt-1"
/>
{errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
</div>

</div>


<div className="flex border-t pt-6">

<button
onClick={() => navigate("/process-agent")}
className="flex items-center gap-2 px-6 py-3 border rounded-lg cursor-pointer"
>
<ChevronLeft className="w-4 h-4" />
Back
</button>

<button
onClick={handleNext}
className="ml-auto flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg cursor-pointer"
>
Next
<ChevronRight className="w-4 h-4" />
</button>

</div>

</div>


{/* YES MODAL */}

{showYesModal && (

<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

<div className="bg-white rounded-2xl w-[520px] shadow-xl">

<div className="flex items-center justify-between px-6 py-4 border-b">

<div className="flex items-center gap-3">

<div className="bg-cyan-100 text-cyan-600 p-2 rounded-lg">
  Globe
</div>

<h3 className="text-lg font-semibold">
Confirmation
</h3>

</div>

<button
onClick={()=>setShowYesModal(false)}
className="text-gray-400 hover:text-gray-600 text-xl"
>
x
</button>

</div>


<div className="px-6 py-5">

<p className="text-base text-gray-600 mb-5">
Before we move forward with preparing the SS-4 form for a non-U.S. applicant, please review and confirm the statements below.
</p>

<div className="space-y-3 mb-5">

<div className="flex gap-3 text-base">
<span className="text-cyan-500">Check</span>
<span>I confirm that I am not currently a United States citizen.</span>
</div>

<div className="flex gap-3 text-base">
<span className="text-cyan-500">Check</span>
<span>I verify that I have never received a Social Security Number (SSN).</span>
</div>

<div className="flex gap-3 text-base">
<span className="text-cyan-500">Check</span>
<span>A completed SS-4 form will be prepared for me and I will provide my digital signature before submission to the IRS.</span>
</div>

</div>

<div className="bg-gray-50 border rounded-lg p-4 text-base text-gray-600">

<p>
For international applicants, the IRS does not provide instant EIN processing.
</p>

<p className="mt-2 font-medium text-gray-800">
Processing time may extend to approximately 3 months or longer depending on IRS workload.
</p>

</div>

</div>

<div className="flex gap-4 px-6 py-4 border-t">

<button
onClick={()=>setShowYesModal(false)}
className="flex-1 border rounded-lg py-2.5 font-medium hover:bg-gray-50"
>
Cancel
</button>

<button
onClick={()=>setShowYesModal(false)}
className="flex-1 bg-cyan-500 text-white rounded-lg py-2.5 font-medium hover:bg-cyan-600"
>
I Agree
</button>

</div>

</div>

</div>

)}


{/* ITIN MODAL */}

{showITINModal && (

<div className="fixed inset-0 bg-black/40 flex items-center justify-center">

<div className="bg-white rounded-xl p-6 w-[420px]">

<h3 className="text-lg font-semibold mb-3">Confirm</h3>

<p className="text-base text-gray-600 mb-6">
Obtaining an EIN using an ITIN may take up to 12 weeks because it cannot
be processed through the IRS automated system.
</p>

<div className="flex gap-4">

<button
onClick={()=>setShowITINModal(false)}
className="border px-5 py-2 rounded-lg w-full"
>
Cancel
</button>

<button
onClick={()=>{
setIdType("itin")
setShowITINModal(false)
}}
className="bg-cyan-500 text-white px-5 py-2 rounded-lg w-full"
>
I Agree
</button>

</div>

</div>

</div>

)}

</ProcessLayout>

)
}
