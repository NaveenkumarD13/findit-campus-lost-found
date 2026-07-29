import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  CalendarDays,
  Laptop,
  Smartphone,
  Wallet,
  IdCard,
  Backpack,
  KeyRound,
  BookOpen,
  Package,
} from "lucide-react";


interface Report {
  id:number;
  itemName:string;
  category:string;
  location?:string;
  foundLocation?:string;
  status:string;
  type:"lost" | "found";
  createdAt:string;
}



function LatestReportsSection(){


const [reports,setReports]=useState<Report[]>([]);



const loadReports=()=>{


const lostReports =
JSON.parse(
localStorage.getItem("lostReports") || "[]"
);


const foundReports =
JSON.parse(
localStorage.getItem("foundReports") || "[]"
);



const allReports=[

...lostReports.map((item:any)=>({
...item,
type:"lost"
})),

...foundReports.map((item:any)=>({
...item,
type:"found"
})),

];



const sortedReports =
allReports
.sort(
(a,b)=>
new Date(b.createdAt).getTime() -
new Date(a.createdAt).getTime()
)
.slice(0,6);



setReports(sortedReports);


};





useEffect(()=>{

loadReports();


window.addEventListener(
"reportsUpdated",
loadReports
);



return()=>{

window.removeEventListener(
"reportsUpdated",
loadReports
);

};


},[]);





// Category Icon Function

const getCategoryIcon = (
  category: string,
  itemName: string
) => {

  const text =
    `${category} ${itemName}`.toLowerCase();



  if (
    text.includes("laptop") ||
    text.includes("computer") ||
    text.includes("dell") ||
    text.includes("hp") ||
    text.includes("lenovo")
  ) {
    return Laptop;
  }



  if (
    text.includes("phone") ||
    text.includes("mobile") ||
    text.includes("smartphone") ||
    text.includes("samsung") ||
    text.includes("iphone") ||
    text.includes("android")
  ) {
    return Smartphone;
  }



  if (
    text.includes("wallet") ||
    text.includes("purse")
  ) {
    return Wallet;
  }



  if (
    text.includes("id") ||
    text.includes("card") ||
    text.includes("certificate")
  ) {
    return IdCard;
  }



  if (
    text.includes("key") ||
    text.includes("keys")
  ) {
    return KeyRound;
  }



  if (
    text.includes("book") ||
    text.includes("notes") ||
    text.includes("textbook")
  ) {
    return BookOpen;
  }



  return Backpack;

};
return (

<section className="bg-slate-950 py-28">


<div className="mx-auto max-w-7xl px-6">


<div className="mb-16 text-center">


<span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">

Live Campus Activity

</span>


<h2 className="mt-6 text-5xl font-bold text-white">

Latest Reports from Students

</h2>


<p className="mt-5 text-slate-400">

Recently reported lost and found items across campus.

</p>


</div>





{
reports.length===0 ?


(

<div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

<Package
size={40}
className="mx-auto text-cyan-400"
/>


<h3 className="mt-5 text-xl font-semibold text-white">

No reports yet

</h3>


<p className="mt-2 text-slate-400">

Be the first student to report a lost or found item.

</p>


</div>

)



:


(


<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">


{
reports.map((report,index)=>{


const Icon =
getCategoryIcon(
  report.category,
  report.itemName
);


return (

<motion.div

key={report.id}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-6
backdrop-blur-xl
transition
hover:-translate-y-2
hover:bg-white/10
"

>



<div className="flex items-center justify-between">


<Icon

size={30}

className={
report.type==="lost"
?
"text-red-400"
:
"text-green-400"
}

/>



<span
className={`rounded-full px-3 py-1 text-xs font-semibold ${
report.type==="lost"
?
"bg-red-500/20 text-red-300"
:
"bg-green-500/20 text-green-300"
}`}
>


{
report.type==="lost"
?
"Lost"
:
"Found"
}


</span>


</div>





<h3 className="mt-5 text-xl font-semibold text-white">

{report.itemName}

</h3>





<p className="mt-2 capitalize text-cyan-300">

{report.category}

</p>





<div className="mt-5 space-y-3 text-sm text-slate-400">


<div className="flex items-center gap-2">

<MapPin size={16}/>

{
report.location ||
report.foundLocation ||
"Campus"
}

</div>





<div className="flex items-center gap-2">


<CalendarDays size={16}/>


{
new Date(
report.createdAt
).toLocaleDateString("en-IN")
}


</div>



</div>




</motion.div>


);


})

}


</div>


)

}



</div>


</section>

);


}


export default LatestReportsSection;