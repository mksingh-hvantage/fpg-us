import { useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProcessLayout from "../components/ProcessLayout"
import { useOrder } from "../contexts/OrderContext"

export default function ProcessOrderReview() {

const navigate = useNavigate()
const { order } = useOrder()

const companyName = order.companyInfo.llcName
  ? `${order.companyInfo.llcName} ${order.companyInfo.designator}`
  : ''

return (

<ProcessLayout progress={85} title="Order Review">

<div className="space-y-6">

{/* ORDER SUMMARY FOR */}

<div className="bg-white border rounded-xl p-6">

<h3 className="font-semibold mb-4">Order Summary for:</h3>

<div className="bg-cyan-50 border border-cyan-200 text-center py-2 rounded-lg font-medium">
{companyName || 'Your Company'}
</div>

</div>


{/* FORMATION INFO */}

<div className="bg-white border rounded-xl p-6">

<h3 className="font-semibold mb-4">Formation Info</h3>

<div className="grid grid-cols-2 text-sm gap-4">

<div>
<p className="text-gray-500">State of Formation</p>
<p>{order.selectedState?.name || '-'}</p>
</div>

<div>
<p className="text-gray-500">Entity Type</p>
<p>{order.entityType || '-'}</p>
</div>

</div>

</div>


{/* CONTACT INFO */}

<div className="bg-white border rounded-xl p-6">

<div className="flex justify-between mb-4">

<h3 className="font-semibold">Contact Info</h3>

<button
onClick={()=>navigate("/process-contact")}
className="text-blue-600 text-sm cursor-pointer font-bold"
>
Edit
</button>

</div>

<div className="grid grid-cols-2 gap-4 text-sm">

<div>
<p className="text-gray-500">Full Name</p>
<p>{order.contactInfo.firstName} {order.contactInfo.lastName}</p>
</div>

<div>
<p className="text-gray-500">Address</p>
<p>
{order.companyAddress.city ? `${order.companyAddress.city}, ` : ''}
{order.companyAddress.state || ''} {order.companyAddress.zip || ''}
{order.companyAddress.country && order.companyAddress.country !== 'United States' ? `, ${order.companyAddress.country}` : ''}
</p>
</div>

<div>
<p className="text-gray-500">Phone</p>
<p>{order.contactInfo.phone ? `+${order.contactInfo.phone}` : '-'}</p>
</div>

<div>
<p className="text-gray-500">Email</p>
<p>{order.contactInfo.email || '-'}</p>
</div>

</div>

</div>


{/* AGENT INFO */}

<div className="bg-white border rounded-xl p-6">

<div className="flex justify-between mb-4">

<h3 className="font-semibold">Agent Info</h3>

<button
onClick={()=>navigate("/process-agent")}
className="text-blue-600 text-sm cursor-pointer font-bold"
>
Edit
</button>

</div>

<div className="grid grid-cols-2 gap-4 text-sm">

<div>
<p className="text-gray-500">Agent</p>
<p>
{order.agentInfo.option === 'bizee'
  ? 'The Future Perfect Global LLC'
  : order.agentInfo.agentType === 'company'
    ? order.agentInfo.companyName
    : `${order.agentInfo.firstName} ${order.agentInfo.lastName}`
}
</p>
</div>

<div>
<p className="text-gray-500">Agent Address</p>
<p>
{order.agentInfo.option === 'bizee'
  ? 'Provided by FPG'
  : `${order.agentInfo.city}, ${order.agentInfo.state} ${order.agentInfo.zip}`
}
</p>
</div>

</div>

</div>


{/* COMPANY INFO */}

<div className="bg-white border rounded-xl p-6">

<div className="flex justify-between mb-4">

<h3 className="font-semibold">Company Info</h3>

<button
onClick={()=>navigate("/process-coinfo")}
className="text-blue-600 text-sm cursor-pointer font-bold"
>
Edit
</button>

</div>

<p className="text-sm">{companyName || '-'}</p>

</div>


{/* MEMBER INFO */}

<div className="bg-white border rounded-xl p-6">

<div className="flex justify-between mb-4">

<h3 className="font-semibold">Member Info</h3>

<button
onClick={()=>navigate("/process-members")}
className="text-blue-600 text-sm cursor-pointer font-bold"
>
Edit
</button>

</div>

{order.members.length > 0 ? order.members.map((member, idx) => (
<div key={idx}>
<div className="bg-cyan-50 border border-cyan-200 text-center py-2 rounded-lg text-sm font-medium mb-4">
Member {idx + 1}
</div>

<div className="grid grid-cols-3 text-sm mb-4">

<div>
<p className="text-gray-500">Name</p>
<p>{member.firstName} {member.lastName}</p>
</div>

<div>
<p className="text-gray-500">Ownership</p>
<p>{member.ownership}%</p>
</div>

<div>
<p className="text-gray-500">Address</p>
<p>{member.useAddress ? 'Company address provided' : `${member.state}, ${member.country}`}</p>
</div>

</div>
</div>
)) : (
<p className="text-sm text-gray-500">No members added</p>
)}

</div>


{/* EIN INFO */}

<div className="bg-white border rounded-xl p-6">

<div className="flex justify-between mb-4">

<h3 className="font-semibold">EIN / Tax Info</h3>

<button
onClick={()=>navigate("/process-ss4")}
className="text-blue-600 text-sm cursor-pointer font-bold"
>
Edit
</button>

</div>

<div className="grid grid-cols-3 text-sm">

<div>
<p className="text-gray-500">Name</p>
<p>{order.taxIdInfo.firstName} {order.taxIdInfo.lastName}</p>
</div>

<div>
<p className="text-gray-500">Address</p>
<p>{order.taxIdInfo.city} {order.taxIdInfo.state} {order.taxIdInfo.country}</p>
</div>

<div>
<p className="text-gray-500">{order.taxIdInfo.idType === 'itin' ? 'ITIN' : 'SSN'}</p>
<p>{order.taxIdInfo.idType === 'itin' ? order.taxIdInfo.itin : order.taxIdInfo.ssn || '-'}</p>
</div>

</div>

</div>


{/* BUTTONS */}

<div className="flex pt-6">

<button onClick={() => navigate("/process-licenses")} className="border px-6 py-3 rounded-lg flex items-center gap-2">
<ChevronLeft size={16}/>
Back
</button>

<button onClick={() => navigate("/process-payment")} className="ml-auto bg-cyan-500 text-white px-6 py-3 rounded-lg flex items-center gap-2">
Next
<ChevronRight size={16}/>
</button>

</div>

</div>

</ProcessLayout>

)
}
