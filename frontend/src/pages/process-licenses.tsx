import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import ProcessLayout from "../components/ProcessLayout";
import { useOrder } from "../contexts/OrderContext";
import { US_STATES as states } from "../data/usStates";

export default function ProcessLicense() {

const { order, setLicenseInfo } = useOrder();
const [selection,setSelection] = useState<"no" | "yes" | "">(order.licenseInfo.selection);
const [open,setOpen] = useState(false);

const [street,setStreet] = useState(order.licenseInfo.street)
const [address2,setAddress2] = useState(order.licenseInfo.address2)
const [city,setCity] = useState(order.licenseInfo.city)
const [state,setState] = useState(order.licenseInfo.state)
const [zip,setZip] = useState(order.licenseInfo.zip)
const [purpose,setPurpose] = useState(order.licenseInfo.purpose)

const [errors,setErrors] = useState<Record<string, string>>({})

const navigate = useNavigate();

const remainingChars = 100 - purpose.length


/* VALIDATION */

const validateForm = () => {

const newErrors: Record<string, string> = {}

if(!selection){
newErrors.selection = "Please select an option"
}

if(selection==="yes"){

if(!street.trim())
newErrors.street = "Street address is required"

if(!city.trim())
newErrors.city = "City is required"

if(!state)
newErrors.state = "State is required"

if(!zip.trim())
newErrors.zip = "Zip code is required"

if(!purpose.trim())
newErrors.purpose = "Business purpose is required"

if(purpose.length > 100)
newErrors.purpose = "Maximum 100 characters allowed"

}

setErrors(newErrors)

return Object.keys(newErrors).length === 0

}


const handleNext = () => {

if(!validateForm()) return

setLicenseInfo({ selection, street, address2, city, state, zip, purpose })
navigate("/process-order-review")

}

return(

<ProcessLayout progress={70} title="Business Permit & License">

<div className="bg-white border rounded-xl p-8 space-y-6">

<h2 className="text-xl font-semibold">
Business Permit & License Compliance Review
</h2>

<hr/>

{/* LICENSE CARD */}

<div className="border rounded-xl p-6 flex gap-6">

<img
src="https://images.unsplash.com/photo-1557395703-5c5592ae708c?q=80"
className="w-28 h-32 object-contain"
/>

<div className="flex-1 space-y-3">

<p className="text-lg">
Based on our preliminary review, your business in
<span className="text-cyan-500 font-semibold"> {order.selectedState?.name || 'your state'} may require 2 specific licenses</span> to operate legally.
</p>

<p className="text-gray-600 text-sm">
Many businesses must obtain permits from federal, state, and local authorities before they can begin operating.
Understanding these requirements early helps avoid delays, penalties, or compliance issues.
</p>

<div className="grid grid-cols-2 gap-4 text-sm pt-3">

<div className="space-y-2">
<p>Check: Our licensing experts will analyze the requirements for your business</p>
<p>Check: We'll determine all permits and registrations needed for compliance</p>
<p>Check: You'll receive a detailed report with clear next steps</p>
</div>

<div className="flex flex-col items-center justify-center text-center text-sm">

<div className="flex -space-x-3 mb-2">
<img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80" className="w-8 h-8 rounded-full border"/>
<img src="https://images.unsplash.com/photo-1573496130103-a442a3754d0e?q=80" className="w-8 h-8 rounded-full border"/>
<img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80" className="w-8 h-8 rounded-full border"/>
</div>

<p className="text-gray-600">
Join the <b>10,000+</b> business owners who use this service.
</p>

</div>

</div>

</div>

</div>


{/* RADIO BUTTONS */}

<div className="grid grid-cols-2 gap-4">

<label className={`border rounded-lg p-4 cursor-pointer flex gap-3 items-center ${selection==="no" && "border-cyan-500 ring-1 ring-cyan-500"}`}>

<input
type="radio"
checked={selection==="no"}
onChange={()=>setSelection("no")}
/>

<span>No thanks, I'll do the work myself</span>

</label>


<label className={`border rounded-lg p-4 cursor-pointer flex gap-3 items-center ${selection==="yes" && "border-cyan-500 ring-1 ring-cyan-500"}`}>

<input
type="radio"
checked={selection==="yes"}
onChange={()=>setSelection("yes")}
/>

<span>Yes, please do the research for me ($99)</span>

</label>

</div>

{errors.selection && <p className="text-red-500 text-sm">{errors.selection}</p>}


{/* ADDRESS FORM */}

{selection==="yes" && (

<div className="space-y-5 pt-4">

<p className="text-base font-medium">
Please provide the address below where you would like us to research required licenses:
</p>

<hr/>

<div className="grid grid-cols-2 gap-4">

<div>
<label className="text-sm">Street Address</label>
<input value={street} onChange={(e)=>setStreet(e.target.value)} className="w-full border rounded-lg p-3"/>
{errors.street && <p className="text-red-500 text-xs">{errors.street}</p>}
</div>

<div>
<label className="text-sm">Address (Cont) <span className="text-gray-400">(Optional)</span></label>
<input value={address2} onChange={(e)=>setAddress2(e.target.value)} className="w-full border rounded-lg p-3"/>
</div>

<div>
<label className="text-sm">City</label>
<input value={city} onChange={(e)=>setCity(e.target.value)} className="w-full border rounded-lg p-3"/>
{errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
</div>

<div>
<label className="text-sm">State</label>
<select
value={state}
onChange={(e)=>setState(e.target.value)}
className="w-full border rounded-lg p-3"
>

<option value="">Select State</option>

{states.map((s,index)=>(
<option key={index} value={s}>
{s}
</option>
))}

</select>

{errors.state && (
<p className="text-red-500 text-xs">{errors.state}</p>
)}
</div>

<div>
<label className="text-sm">Zip Code</label>
<input value={zip} onChange={(e)=>setZip(e.target.value)} className="w-full border rounded-lg p-3"/>
{errors.zip && <p className="text-red-500 text-xs">{errors.zip}</p>}
</div>

</div>

<div>
<label className="text-sm">
Business Purpose (You have {remainingChars} characters left)
</label>

<textarea
value={purpose}
onChange={(e)=>setPurpose(e.target.value)}
maxLength={100}
className="w-full border rounded-lg p-3 h-28"
placeholder="Please provide brief description of Business Purpose"
/>

{errors.purpose && <p className="text-red-500 text-xs">{errors.purpose}</p>}

</div>

</div>

)}


{/* BUTTONS */}

<div className="flex items-center pt-6 border-t">

<button onClick={() => navigate("/process-tax-invite")} className="border px-6 py-3 rounded-lg flex items-center gap-2">
<ChevronLeft size={16}/>
Back
</button>

<button onClick={handleNext} className="ml-auto bg-cyan-500 text-white px-6 py-3 rounded-lg flex items-center gap-2">
Next
<ChevronRight size={16}/>
</button>

</div>


{/* ACCORDION */}

<div className="border rounded-lg mt-6">

<button
onClick={()=>setOpen(!open)}
className="w-full flex justify-between p-4"
>

<span className="font-medium">
Is a Business License or Permit something I should consider?
</span>

<ChevronDown size={18}/>

</button>

{open && (

<div className="px-4 pb-4 text-sm text-gray-600">
Most businesses require multiple permits depending on industry and location.
Our research package helps identify every license required to operate legally.
</div>

)}

</div>

</div>

</ProcessLayout>

)
}
