import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import ProcessLayout from "../components/ProcessLayout";
import { useOrder } from "../contexts/OrderContext";

export default function ProcessTax() {

const { order, setTaxConsultation } = useOrder();
const [selection,setSelection] = useState<"no" | "yes" | "">(order.taxConsultation.selection);
const [showAccordion,setShowAccordion] = useState(false);
const [consent,setConsent] = useState(order.taxConsultation.consent)
const [error,setError] = useState("")

const navigate = useNavigate();


/* VALIDATION */

const handleNext = () => {

if(selection === ""){
setError("Please select an option before continuing.")
return
}

if(selection === "yes" && !consent){
setError("You must agree to the consent before continuing.")
return
}

setError("")
setTaxConsultation({ selection, consent })
navigate("/process-licenses")

}


return(

<ProcessLayout progress={65} title="Tax Consultation">

<div className="bg-white border rounded-xl p-8 space-y-6">

{/* TITLE */}

<div>

<h2 className="text-xl font-semibold mb-2">
Business Tax Planning & Complimentary Consultation
</h2>

<p className="text-base text-gray-600">
Receive expert guidance on tax planning for your newly formed business.
During this complimentary consultation, specialists will explain how your
business may be taxed, highlight potential deductions, and help you
understand important IRS classifications. The consultation is provided
at no cost and comes with no commitment.
</p>

</div>

<hr/>

{/* LEARN SECTION */}

<div>

<h3 className="font-semibold mb-4">
Topics Covered During the Consultation
</h3>

<div className="grid grid-cols-2 gap-y-3 text-base">

<div>Check: Understanding how your business structure is taxed</div>
<div>Check: Key bookkeeping practices for small businesses</div>

<div>Check: Selecting the most suitable IRS tax classification</div>
<div>Check: Practical ways to minimize the risk of tax audits</div>

<div>Check: Identifying tax write-offs many new businesses miss</div>
<div>Check: Methods to reduce self-employment tax liability</div>

</div>

</div>

{/* RADIO OPTIONS */}

<div className="space-y-4">

<label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer">

<input
type="radio"
name="tax"
checked={selection==="no"}
onChange={()=>{
setSelection("no")
setShowAccordion(true)
setError("")
}}
/>

<span>I'm not interested at this time.</span>

</label>


<label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer">

<input
type="radio"
name="tax"
checked={selection==="yes"}
onChange={()=>{
setSelection("yes")
setShowAccordion(false)
setError("")
}}
/>

<span>
Yes, I would like to receive the Business Tax Consultation (FREE).
</span>

</label>

</div>


{/* ACCORDION */}

{selection==="no" && (

<div className="border rounded-lg">

<button
onClick={()=>setShowAccordion(!showAccordion)}
className="flex justify-between w-full p-4 text-left"
>

<span className="font-medium">
How soon can I schedule my Tax Consultation?
</span>

<ChevronDown size={18}/>

</button>

{showAccordion && (

<div className="px-4 pb-4 text-gray-600 text-sm">

Even if you're not ready now, consultations can usually be scheduled
later once your business formation is complete. Our specialists will
help review your structure and answer tax-related questions.

</div>

)}

</div>

)}


{/* CONSENT */}

{selection==="yes" && (

<div className="border rounded-lg p-4">

<label className="flex gap-3">

<input
type="checkbox"
checked={consent}
onChange={(e)=>{
setConsent(e.target.checked)
setError("")
}}
/>

<p className="text-sm text-gray-600">
By selecting "Yes", you agree that Vyde may contact you at the phone
number or email you provided, including by call or text message, to
schedule and conduct your free consultation. Standard messaging and
data rates may apply. Consent is not required to make a purchase.
</p>

</label>

</div>

)}


{/* ERROR MESSAGE */}

{error && (
<p className="text-red-500 text-sm">{error}</p>
)}



{/* BUTTONS */}

<div className="flex items-center pt-6 border-t">

<button
onClick={() => navigate("/process-business-banking")}
className="border px-6 py-3 rounded-lg flex items-center gap-2"
>
<ChevronLeft size={16}/>
Back
</button>

<button
onClick={handleNext}
className="ml-auto bg-cyan-500 text-white px-6 py-3 rounded-lg flex items-center gap-2"
>
Next
<ChevronRight size={16}/>
</button>

</div>

</div>

</ProcessLayout>

)

}
