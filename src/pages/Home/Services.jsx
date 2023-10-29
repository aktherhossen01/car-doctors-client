import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [service,setService]= useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className="mt-8">
            <div className="text-center">
                <h1 className="text-2xl text-orange-500 font-bold">Service</h1>
                <h1 className="text-5xl font-bold ">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {service.map(ser=><ServicesCard ser={ser} key={ser._id}></ServicesCard>)}
            </div>
        </div>
    );
};

export default Services;