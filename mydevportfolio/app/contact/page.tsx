"use client"; // using use client as this form requires client(user) interaction, useState

import React from "react";
import emailjs from '@emailjs/browser';
import { EmailJSResponseStatus } from "@emailjs/browser";
// export const metadata = {
//     title: "Contact",
//     description: "get in touch"
// }

function Contact()
{

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phoneNumber: "",
        projectInfo: "",
    })

    type formInput  = HTMLInputElement | HTMLTextAreaElement
    function handleChange(event: React.ChangeEvent<formInput>)
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
    async function  handleSubmit(event: React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();

        // cont serviceId = process.env.
        console.log("submitted");
        console.log(formData);

        const public_id: string | undefined = process.env.NEXT_PUBLIC_USER_PUB_KEY;
        const service_id: string | undefined = process.env.NEXT_PUBLIC_USER_SERVICE_ID;
        const template_id: string | undefined = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        

        const emailParams = {
            userEmail: formData.email,
            userName:formData.name,
            userPhone:formData.phoneNumber,
            projectInformation:formData.projectInfo
        }

        if (!public_id || !service_id || !template_id)
        {
            console.log('Error accessing keys');
            return;
        }
        emailjs
            .send(service_id, template_id, emailParams, {publicKey: public_id})
            .then((response)=>{console.log(`Success! response_status: ${response.status} response.text: ${response.text} `)},
            (err)=>{console.log(`FAILED... : Error: ${err}`)}
        )

        setFormData(()=>{
            return {
                name: "",
                email: "",
                phoneNumber: "",
                projectInfo: "",
            }
        })
    }
    return (
        <section className=" py-[100px] dark:bg-black dark:text-white">
            <h2 className="text-center text-[30px]">Contact Me</h2>
            <form onSubmit={handleSubmit} className="text-black flex flex-col w-[50%] mx-auto  ">
                <label>Enter Name</label>
                <input onChange={handleChange} name='name' value={formData.name} className="border-[2px] py-[1.5px] px-[3px] border-sky-300 rounded-md " type='text' placeholder="Name..."/>
                <label className="mt-[9px]">Enter email</label>
                <input  onChange={handleChange} name='email' value={formData.email} className="border-[2px] py-[1.5px] px-[3px] border-sky-300 rounded-md" type='email' placeholder="Enter email..."/>
                <label className="mt-[9px]">Enter phone number</label>
                <input  onChange={handleChange} name='phoneNumber' value={formData.phoneNumber} className="border-[2px] py-[1.5px] px-[3px] border-sky-300 rounded-md" type='number' placeholder="Enter phonenumber..."/>
                <label className="mt-[9px]">Enter Project Information</label>
                <textarea  onChange={handleChange} name='projectInfo' value={formData.projectInfo}  className="border-[2px] py-[1.5px] px-[3px] border-sky-300 rounded-md" placeholder="Provide a description of the project..."/>

                <input className="bg-[#75b98e] text-white w-[30%] mx-auto py-[2.5px] rounded-md my-[20px] hover:bg-green-600" type="submit" value="submit"/>
            </form>
        </section>
    )
}

export default Contact;