import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProcessLayout from "../components/ProcessLayout";
import { useOrder } from "../contexts/OrderContext";
import type { MemberInfo } from "../types/order";
import { US_STATES as states } from "../data/usStates";

/* ---------------- COUNTRY LIST ---------------- */

const countries = [
"United States","Canada","United Kingdom","India","Australia","Germany","France","Italy","Spain","Netherlands",
"Sweden","Norway","Denmark","Finland","Brazil","Mexico","Japan","China","South Korea","Singapore","UAE",
"Saudi Arabia","South Africa","New Zealand","Ireland"
];

export default function ProcessMember(){

const navigate = useNavigate()
const { order, setMembers: saveMembers } = useOrder()

const [memberCount,setMemberCount] = useState<number>(order.members.length || 0)
const [members,setMembers] = useState<MemberInfo[]>(order.members.length > 0 ? order.members : [])
const [openMembers,setOpenMembers] = useState<number[]>(order.members.length > 0 ? order.members.map((_,i) => i) : [])
const [ownershipError,setOwnershipError] = useState(false)
const [formErrors,setFormErrors] = useState<Record<string, string>>({})


/* ---------------- CREATE MEMBERS ---------------- */

const handleMemberChange=(e: React.ChangeEvent<HTMLSelectElement>)=>{

const count = Number(e.target.value)

setMemberCount(count)

const arr: MemberInfo[]=[]

for(let i=0;i<count;i++){

arr.push({
type:"individual",
firstName:"",
lastName:"",
ownership:"",
useAddress:true,
country:"United States",
state:""
})

}

setMembers(arr)

setOpenMembers(Array.from({length:count},(_,i)=>i))

}


/* ---------------- TOGGLE MEMBER ---------------- */

const toggleMember=(index:number)=>{

if(openMembers.includes(index)){

setOpenMembers(openMembers.filter(i=>i!==index))

}else{

setOpenMembers([...openMembers,index])

}

}


/* ---------------- UPDATE MEMBER ---------------- */

const updateMember=(index:number,field:keyof MemberInfo,value: string | boolean)=>{

const updated=[...members]

updated[index] = { ...updated[index], [field]: value }

setMembers(updated)

validateOwnership(updated)

}


/* ---------------- OWNERSHIP VALIDATION ---------------- */

const validateOwnership=(data:MemberInfo[])=>{

const totalOwnership=data.reduce((sum,item)=>sum+Number(item.ownership||0),0)

if(totalOwnership!==100 && data.length>0){

setOwnershipError(true)

}else{

setOwnershipError(false)

}

}


/* ---------------- FORM VALIDATION ---------------- */

const validateForm=()=>{

const errors: Record<string, string>={}

members.forEach((member,index)=>{

if(!member.firstName){

errors[`firstName${index}`]="First name required"

}

if(member.type==="individual" && !member.lastName){

errors[`lastName${index}`]="Last name required"

}

if(!member.ownership){

errors[`ownership${index}`]="Ownership required"

}

})

setFormErrors(errors)

if(Object.keys(errors).length>0 || ownershipError){

return false

}

return true

}


/* ---------------- NEXT ---------------- */

const handleNext=()=>{

if(!validateForm()){

return

}

saveMembers(members)
navigate("/process-agent")

}


/* ---------------- UI ---------------- */

return(

<ProcessLayout progress={45} title="Members Information">

<div className="bg-white border rounded-lg p-8">

<h2 className="text-2xl font-bold mb-6">
Please provide Members Information
</h2>


<label className="text-sm font-semibold">
Number of Members / Owners
</label>

<select
value={memberCount}
onChange={handleMemberChange}
className="w-full border rounded-lg px-4 py-3 mt-2"
>

<option value="">Select Number of Members</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>

</select>


{/* MEMBERS LOOP */}

{members.map((member,index)=>{

const isOpen=openMembers.includes(index)

return(

<div key={index} className="border-t mt-8 pt-6">

<div className="flex justify-between items-center">

<h3 className="font-semibold">
Member {index+1}
</h3>

<button
onClick={()=>toggleMember(index)}
className="text-blue-600 text-sm"
>

{isOpen?"Collapse":"Edit"}

</button>

</div>


{isOpen && (

<div className="space-y-5 mt-4">

{/* TYPE */}

<div className="grid grid-cols-2 gap-4">

<label className={`border rounded-lg p-4 cursor-pointer
${member.type==="individual"?"border-cyan-500 bg-cyan-50":""}`}>

<input
type="radio"
checked={member.type==="individual"}
onChange={()=>updateMember(index,"type","individual")}
className="mr-2"
/>

<span className="font-medium">
Individual
</span>

<p className="text-xs text-gray-500">
Select if Member is a person.
</p>

</label>


<label className={`border rounded-lg p-4 cursor-pointer
${member.type==="company"?"border-cyan-500 bg-cyan-50":""}`}>

<input
type="radio"
checked={member.type==="company"}
onChange={()=>updateMember(index,"type","company")}
className="mr-2"
/>

<span className="font-medium">
Company
</span>

<p className="text-xs text-gray-500">
Select if Member is a company.
</p>

</label>

</div>


{/* COUNTRY */}

<div>

<label className="text-sm font-semibold">
Country
</label>

<select
value={member.country}
onChange={(e)=>updateMember(index,"country",e.target.value)}
className="w-full border rounded-lg px-4 py-3 mt-1"
>

{countries.map(c=>(
<option key={c}>{c}</option>
))}

</select>

</div>


{/* STATE */}

<div>

<label className="text-sm font-semibold">
State
</label>

<select
value={member.state}
onChange={(e)=>updateMember(index,"state",e.target.value)}
className="w-full border rounded-lg px-4 py-3 mt-1"
>

<option value="">Select State</option>

{states.map(s=>(
<option key={s}>{s}</option>
))}

</select>

</div>


{/* NAME */}

<div className="grid grid-cols-2 gap-4">

<div>

<label className="text-sm font-semibold">
First Name
</label>

<input
value={member.firstName}
onChange={(e)=>updateMember(index,"firstName",e.target.value)}
className="w-full border rounded-lg px-4 py-3 mt-1"
/>

{formErrors[`firstName${index}`] && (
<p className="text-red-500 text-xs mt-1">
{formErrors[`firstName${index}`]}
</p>
)}

</div>

<div>

<label className="text-sm font-semibold">
Last Name
</label>

<input
value={member.lastName}
onChange={(e)=>updateMember(index,"lastName",e.target.value)}
className="w-full border rounded-lg px-4 py-3 mt-1"
/>

{formErrors[`lastName${index}`] && (
<p className="text-red-500 text-xs mt-1">
{formErrors[`lastName${index}`]}
</p>
)}

</div>

</div>


{/* OWNERSHIP */}

<div>

<label className="text-sm font-semibold">
% of Ownership
</label>

<input
type="number"
value={member.ownership}
onChange={(e)=>updateMember(index,"ownership",e.target.value)}
className="border rounded-lg px-4 py-3 mt-1 w-40"
/>

{formErrors[`ownership${index}`] && (
<p className="text-red-500 text-xs mt-1">
{formErrors[`ownership${index}`]}
</p>
)}

</div>

</div>

)}

</div>

)

})}


{ownershipError && (

<div className="text-red-500 text-sm mt-6">
Total ownership must equal 100%
</div>

)}


{/* BUTTONS */}

<div className="flex gap-4 mt-10 pt-6 border-t">

<button onClick={() => navigate("/process-company-address")} className="flex items-center gap-2 px-6 py-3 border rounded-lg cursor-pointer">
<ChevronLeft className="w-4 h-4" />
Back
</button>

<button onClick={handleNext} className="ml-auto flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg cursor-pointer">
Next
<ChevronRight className="w-4 h-4" />
</button>

</div>

</div>

</ProcessLayout>

)

}
