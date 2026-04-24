import { useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import ProcessLayout from "../components/ProcessLayout"
import { useOrder } from "../contexts/OrderContext"

export default function ProcessExpedite() {

const navigate = useNavigate()
const { order, setExpeditedFiling } = useOrder()
const [selected,setSelected] = useState<'fast' | 'normal'>(order.expeditedFiling.selected)

const expediteFee = selected === "fast" ? 50 : 0

const handleNext = () => {
  setExpeditedFiling({ selected, fee: expediteFee })
  navigate("/process-contact")
}

return (

<ProcessLayout progress={30} title="State Filing Processing Time">

<div className="bg-white border rounded-xl p-8">

<h2 className="text-xl font-semibold mb-2">State Filing Processing Time</h2>

<p className="text-gray-600 mb-6 text-sm">
The average <b>State filing time</b> for forming an LLC or registering a business is typically <b>around 4 weeks</b>. Processing times may vary depending on the current workload of the Secretary of State. If you need your business formed faster, also provides <b>expedited filing options</b> that can significantly reduce the processing time. Select the filing speed that best fits your business timeline and get your company officially registered as quickly as possible.
</p>


{/* OPTION 1 */}

<div
onClick={()=>setSelected("fast")}
className={`border rounded-lg p-5 flex justify-between cursor-pointer mb-4
${selected==="fast" ? "border-cyan-500 bg-cyan-50" : ""}`}
>

<div className="flex gap-3">

<input
type="radio"
checked={selected==="fast"}
readOnly
/>

<div>

<div className="flex items-center gap-2">
<span className="font-medium">Fast 4-Business-Day State Filing Processing.</span>
<span className="bg-cyan-500 text-white text-xs px-2 py-0.5 rounded">
FAST
</span>
</div>

<p className="text-sm text-gray-500 mt-2">
Estimated Formation Date:
<span className="text-cyan-600 font-medium ml-1">
Tuesday, March 17*
</span>
</p>

</div>

</div>

<div className="font-semibold">$50</div>

</div>


{/* OPTION 2 */}

<div
onClick={()=>setSelected("normal")}
className={`border rounded-lg p-5 flex justify-between cursor-pointer
${selected==="normal" ? "border-cyan-500 bg-cyan-50" : ""}`}
>

<div className="flex gap-3">

<input
type="radio"
checked={selected==="normal"}
readOnly
/>

<div>

<span className="font-medium">Approximate Filing Time: 4 Weeks.</span>

<p className="text-sm text-gray-500 mt-2">
Estimated Formation Date:
<span className="ml-1">
Monday, April 20*
</span>
</p>

</div>

</div>

<div className="font-semibold">$0</div>

</div>


<p className="text-xs text-gray-500 mt-4">
* These dates are estimations based on current state turnaround times and are subject to change based on state processing.
</p>


{/* BUTTONS */}

<div className="flex pt-8">

<button
onClick={() => navigate(-1)}
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
