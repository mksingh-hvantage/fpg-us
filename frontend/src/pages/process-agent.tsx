import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
ChevronLeft,
ChevronRight,
MessageCircle,
Calendar,
ChevronDown,
FileText,
Layers,
TrendingDown} from "lucide-react"
import ProcessLayout from "../components/ProcessLayout"
import { useOrder } from "../contexts/OrderContext"
import { US_STATES as states } from "../data/usStates"

type FormErrors = {
firstName?:string
lastName?:string
companyName?:string
street?:string
city?:string
country?:string
state?:string
zip?:string
}

export default function ProcessAgent(){

const navigate = useNavigate()
const { order, setAgentInfo } = useOrder()

const [agentOption,setAgentOption] = useState<"bizee"|"self">(order.agentInfo.option)
const [agentType,setAgentType] = useState<"individual"|"company">(order.agentInfo.agentType)
const [open,setOpen] = useState<number | null>(0)

const toggle=(i:number)=>{
setOpen(open===i?null:i)
}

const [country] = useState(order.agentInfo.country)
const [firstName,setFirstName] = useState(order.agentInfo.firstName)
const [lastName,setLastName] = useState(order.agentInfo.lastName)
const [companyName,setCompanyName] = useState(order.agentInfo.companyName)
const [street,setStreet] = useState(order.agentInfo.street)
const [city,setCity] = useState(order.agentInfo.city)
const [state,setState] = useState(order.agentInfo.state)
const [zip,setZip] = useState(order.agentInfo.zip)

const [errors,setErrors] = useState<FormErrors>({})

/* ---------- VALIDATION ---------- */

const validate=()=>{

const newErrors:FormErrors={}

if(agentOption==="self"){

if(!country) newErrors.country="Country is required"

if(agentType==="individual"){

if(!firstName.trim()) newErrors.firstName="First name required"
if(!lastName.trim()) newErrors.lastName="Last name required"

}

if(agentType==="company"){

if(!companyName.trim()) newErrors.companyName="Company name required"

}

if(!street.trim()) newErrors.street="Street required"

if(!city.trim()) newErrors.city="City required"

if(!state) newErrors.state="State required"

if(!zip.trim()) newErrors.zip="Zip required"
else if(!/^\d{5}$/.test(zip)) newErrors.zip="Enter valid ZIP"

}

setErrors(newErrors)

return Object.keys(newErrors).length===0

}

/* ---------- SUBMIT ---------- */

const handleNext=()=>{

if(!validate()) return

setAgentInfo({
  option: agentOption,
  agentType,
  firstName,
  lastName,
  companyName,
  street,
  city,
  state,
  zip,
  country,
})

navigate("/process-ss4")

}

/* ---------- UI ---------- */

return(

<ProcessLayout progress={50} title="Registered Agent">

<div className="bg-white border border-gray-200 rounded-xl p-8">

{/* TEXT */}

<div className="mb-6">

<h2 className="text-2xl font-bold mb-4">
Understanding Your Registered Agent
</h2>

<p className="text-sm text-gray-700 mb-4">
When establishing an LLC in {order.selectedState?.name || 'your state'}, you are required to designate a Registered Agent. This individual or service acts as the official point of contact for your business when receiving legal paperwork and government notifications.
</p>

<p className="text-sm text-gray-700 mb-4">
As part of your formation package, The Future Perfect Global LLC includes Registered Agent service at no charge for the first 12 months — a benefit normally priced at $119. This allows your business to remain compliant without any extra cost during the first year.
</p>

<p className="text-sm text-gray-700 mb-2">
Examples of communications a Registered Agent may receive include:
</p>

<ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">

<li>Formal legal documents such as lawsuit notices or court-issued papers</li>

<li>Important updates or reminders sent by the state regarding filings and compliance requirements</li>

</ul>

</div>

{/* AGENT OPTIONS */}

<div className="grid grid-cols-2 gap-4 mb-8">

<label className={`border rounded-lg p-4 flex gap-3 cursor-pointer ${agentOption==="bizee"?"border-cyan-500 bg-cyan-50":""}`}>

<input type="radio" checked={agentOption==="bizee"} onChange={()=>setAgentOption("bizee")} />

<span className="text-sm font-medium">
Designate FPG US LLC as Your Registered Agent with 1 Year of Service at No Cost
</span>

</label>

<label className={`border rounded-lg p-4 flex gap-3 cursor-pointer ${agentOption==="self"?"border-cyan-500 bg-cyan-50":""}`}>

<input type="radio" checked={agentOption==="self"} onChange={()=>setAgentOption("self")} />

<span className="text-sm font-medium">
I would like to designate myself as the Registered Agent for my business.
</span>

</label>

</div>

<div>
  <h4 className="text-base font-bold mb-2">Registered Agent Details</h4>
  <p className="text-sm mb-6">
    You can act as your own Registered Agent if you have a valid physical street address in the state where your business is being formed. Please note that PO Box addresses are not accepted for this role.
  </p>
</div>

{/* SELF FORM */}

{agentOption==="self" && (

<>

{/* TYPE */}

<div className="grid grid-cols-2 gap-4 mb-6">

<label className={`border rounded-lg p-4 flex gap-3 cursor-pointer ${agentType==="individual"?"border-cyan-500 bg-cyan-50":""}`}>

<input type="radio" checked={agentType==="individual"} onChange={()=>setAgentType("individual")} />

<div>

<div className="font-medium">Individual</div>

<div className="text-xs text-gray-500">
The registered agent will be a person.
</div>

</div>

</label>

<label className={`border rounded-lg p-4 flex gap-3 cursor-pointer ${agentType==="company"?"border-cyan-500 bg-cyan-50":""}`}>

<input type="radio" checked={agentType==="company"} onChange={()=>setAgentType("company")} />

<div>

<div className="font-medium">Company</div>

<div className="text-xs text-gray-500">
The registered agent will be a company.
</div>

</div>

</label>

</div>

{/* ADDRESS */}

<div className="grid grid-cols-2 gap-4">

{/* FIRST */}

{agentType==="individual" && (

<div>

<label className="text-sm font-medium">First Name</label>

<input
value={firstName}
onChange={(e)=>setFirstName(e.target.value)}
className="border p-3 rounded-lg w-full mt-1"
/>

{errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}

</div>

)}

{/* LAST */}

{agentType==="individual" && (

<div>

<label className="text-sm font-medium">Last Name</label>

<input
value={lastName}
onChange={(e)=>setLastName(e.target.value)}
className="border p-3 rounded-lg w-full mt-1"
/>

{errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}

</div>

)}

{/* COMPANY */}

{agentType==="company" && (

<div className="col-span-2">

<label className="text-sm font-medium">Company Name</label>

<input
value={companyName}
onChange={(e)=>setCompanyName(e.target.value)}
className="border p-3 rounded-lg w-full mt-1"
/>

{errors.companyName && <p className="text-red-500 text-xs">{errors.companyName}</p>}

</div>

)}

{/* STREET */}

<div>

<label className="text-sm font-medium">Street Address</label>

<input
value={street}
onChange={(e)=>setStreet(e.target.value)}
className="border p-3 rounded-lg w-full mt-1"
/>

{errors.street && <p className="text-red-500 text-xs">{errors.street}</p>}

</div>

{/* CITY */}

<div>

<label className="text-sm font-medium">City</label>

<input
value={city}
onChange={(e)=>setCity(e.target.value)}
className="border p-3 rounded-lg w-full mt-1"
/>

{errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}

</div>

{/* STATE */}

<div>

<label className="text-sm font-medium">State</label>

<select
value={state}
onChange={(e)=>setState(e.target.value)}
className="border p-3 rounded-lg w-full mt-1"
>

<option value="">Select State</option>

{states.map(s=>(
<option key={s}>{s}</option>
))}

</select>

{errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}

</div>

{/* ZIP */}

<div>

<label className="text-sm font-medium">Zip Code</label>

<input
value={zip}
onChange={(e)=>setZip(e.target.value)}
className="border p-3 rounded-lg w-full mt-1"
/>

{errors.zip && <p className="text-red-500 text-xs">{errors.zip}</p>}

</div>

</div>

</>

)}

{/* ACCORDION */}

{agentOption==="bizee" && (

<div className="space-y-4 mt-8">

{[
{title:"First Year Included",icon:<Calendar size={18}/>,text:"Your order includes a full year of registered agent service at no charge."},
{title:"Stable Pricing",icon:<FileText size={18}/>,text:"After the complimentary period the yearly fee remains consistent."},
{title:"Complete Coverage",icon:<Layers size={18}/>,text:"All legal mail and documents will be handled securely."},
{title:"Reduce Junk Mail",icon:<TrendingDown size={18}/>,text:"Using our address helps reduce marketing mail."}
].map((item,i)=>(

<div key={i} className="border rounded-lg">

<button onClick={()=>toggle(i)} className="w-full flex justify-between p-4">

<span className="flex gap-3 items-center">
{item.icon}
{item.title}
</span>

<ChevronDown className={`${open===i?"rotate-180":""}`} />

</button>

{open===i && (
<div className="px-4 pb-4 text-sm text-gray-600">
{item.text}
</div>
)}

</div>

))}

</div>

)}

{/* NAV */}

<div className="flex mt-10 pt-6 border-t">

<button onClick={()=>navigate("/process-members")} className="flex items-center gap-2 px-6 py-3 border rounded-lg">

<ChevronLeft/>

Back

</button>

<button onClick={handleNext} className="ml-auto flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg">

Next

<ChevronRight/>

</button>

</div>

</div>

<button className="fixed bottom-6 right-6 w-14 h-14 bg-cyan-600 text-white rounded-full flex items-center justify-center shadow-lg">

<MessageCircle/>

</button>

</ProcessLayout>

)

}
