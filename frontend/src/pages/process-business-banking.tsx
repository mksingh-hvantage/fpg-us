import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProcessLayout from "../components/ProcessLayout";
import { useOrder } from "../contexts/OrderContext";

export default function ProcessBusBank() {

const navigate = useNavigate();
const { setBanking } = useOrder();

/* validation state */

const [loading,setLoading] = useState(false)

/* validation handlers */

const handleBack = () => {
navigate("/process-ss4")
}

const handleLater = () => {
setLoading(true)
setBanking(false)

setTimeout(()=>{
navigate("/process-tax-invite")
},300)
}

const handleInterested = () => {

setLoading(true)
setBanking(true)

setTimeout(()=>{
navigate("/process-tax-invite")
},300)

}

return(

<ProcessLayout progress={60} title="Business Banking">

<div className="bg-white border rounded-xl p-8 space-y-8">

{/* TITLE */}

<div>

<h2 className="text-xl font-semibold mb-2">
Set Up Business Banking
</h2>

<p className="text-base text-gray-500">
Modern banking with no monthly fees for growing businesses
</p>

</div>

<p className="text-base text-gray-700">
Separating your company finances from personal accounts is one of the
most important steps in protecting your business assets and staying organized.
</p>

<p className="text-base text-gray-600">
Relay is a digital banking platform designed to help business owners
track income, manage expenses, and clearly understand how money flows
through their company.
</p>

<p className="text-xs text-gray-500">
*Applications can be submitted once your company formation and EIN are completed.
</p>

<hr/>


{/* RELAY CARD */}

<div className="border rounded-xl p-6">

<div className="flex justify-between mb-4">

<h3 className="text-lg font-semibold text-green-700">
Relay
</h3>

<span className="text-base text-gray-500 underline cursor-pointer">
Disclaimer
</span>

</div>

<ul className="space-y-3 text-base text-gray-700">

<li>Check: No monthly account maintenance fees</li>

<li>Check: Multiple checking accounts to organize budgets and projects</li>

<li>Check: Debit cards available for team members</li>

<li>Check: FDIC insured banking partner</li>

</ul>

</div>


{/* REVIEW */}

<div className="border rounded-xl p-6">

<div className="flex justify-between mb-3">

<div className="text-green-600 text-lg">
Stars: 5/5
</div>

<span className="text-xs text-gray-500">
4 days ago
</span>

</div>

<p className="text-base text-gray-700">
Relay has worked extremely well for our company. We can separate funds
into different categories and maintain several checking accounts without
additional costs. The ability to generate virtual cards instantly makes
managing expenses much easier.
</p>

<p className="text-base font-semibold mt-4">
John
</p>

</div>


{/* BUTTONS */}

<div className="flex items-center gap-4 pt-6 border-t">

<button
onClick={handleBack}
className="border px-6 py-3 rounded-lg flex items-center gap-2"
>
<ChevronLeft size={16}/>
Back
</button>

<button
onClick={handleLater}
disabled={loading}
className="border px-6 py-3 rounded-lg"
>
Ask me later
</button>

<button
onClick={handleInterested}
disabled={loading}
className="ml-auto bg-cyan-500 text-white px-6 py-3 rounded-lg flex items-center gap-2"
>
Yes, I'm interested
<ChevronRight size={16}/>
</button>

</div>

</div>

</ProcessLayout>

)

}
