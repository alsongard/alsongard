import React from "react";

function Contact()
{

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phoneNumber: "",
        projectInfo: "",
    })
    function handleChange(event)
    {
        const {name, value} = event.target;
        setFormData((prevData)=>{
            return (
                {...prevData, 
                    [name]: value
                }
            )
        })
    }

    console.log(formData);
    return (
        <section className=" py-[100px] dark:bg-slate-600">
            <form className="flex flex-col w-[50%] mx-auto  ">
                <label>Enter Name</label>
                <input onChange={handleChange} value={formData.name} className="border-[2px] py-[1.5px] px-[3px] border-sky-300 rounded-md " type='text' placeholder="Name..."/>
                <label className="mt-[9px]">Enter email</label>
                <input  onChange={handleChange}  value={formData.email} className="border-[2px] py-[1.5px] px-[3px] border-sky-300 rounded-md" type='email' placeholder="Enter email..."/>
                <label className="mt-[9px]">Enter phone number</label>
                <input  onChange={handleChange} value={formData.phoneNumber} className="border-[2px] py-[1.5px] px-[3px] border-sky-300 rounded-md" type='number' placeholder="Enter phonenumber..."/>
                <label className="mt-[9px]">Enter Project Information</label>
                <textarea  onChange={handleChange} value={formData.projectInfo}  className="border-[2px] py-[1.5px] px-[3px] border-sky-300 rounded-md" placeholder="Provide a description of the project..."/>

                <input className="bg-gradient-to-br text-white	from-[rgb(65,122,136)] to-[#06323a] w-[20%] mx-auto py-[2.5px] rounded-md my-[20px]" type="submit" value="submit"/>
            </form>
        </section>
    )
}

export default Contact;