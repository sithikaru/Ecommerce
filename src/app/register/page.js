"use client"

import InputComponent from "@/components/FormElements/InputComponent";
import SelectComponent from "@/components/FormElements/SelectComponent";
import { registerNewUser } from "@/services/register";
import { registrationFormControls } from "@/utils";
import { useState } from "react";

const isRegistered = false;

const initialFormData = {
    name: "",
    email: "",
    password: "",
    role: "customer",
}


export default function Register() {

    const [formData, setformData] = useState(initialFormData)

    console.log(formData)

    function isFormValid() {


        return formData && formData.name && formData.name.trim() !== ""
        && formData.email && formData.email.trim() !== ""
        && formData.password && formData.password.trim() !== "" ? true : false
    }

    async function handleRegisteronSubmit() {
        const data = await registerNewUser(formData)
        console.log(data)
    }

    return (
        <div className="bg-white relative">
            <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto ml-auto max-w-7xl xl:px-5 lg:flex-row">
                <div className="flex flex-col items-center justify-center w-full pr-10 pl-10 lg:flex-row">
                    <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
                        <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                            <p className="w-full text-4xl font-medium text-center font-serif">
                                {
                                    isRegistered ? "Thank you for registering!" : "Sign up for an Account"
                                }
                            </p>
                            {
                                isRegistered ?
                                    <button className="inline-flex w-full  item-center justify-center bg-black px-6 py-4 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide mt-20">
                                        Login
                                    </button>

                                    :
                                    <div className="w-full mr-0 mb-0 ml-0 relative space-y-8 mt-6">
                                        {registrationFormControls.map((item) =>
                                            item.componentType === "input" ? (
                                                <InputComponent
                                                    type={item.type}
                                                    label={item.label}
                                                    placeholder={item.placeholder}
                                                    onChange={(event) => {
                                                        setformData({
                                                            ...formData,
                                                            [item.id]: event.target.value
                                                        })
                                                    }
                                                    }
                                                    value={formData[item.id]}
                                                />
                                            ) : item.componentType === "select" ? (
                                                <SelectComponent
                                                    label={item.label}
                                                    options={item.options}
                                                    onChange={(event) => {
                                                        setformData({
                                                            ...formData,
                                                            [item.id]: event.target.value
                                                        })
                                                    }
                                                    }
                                                    value={formData[item.id]}
                                                />
                                            ) :
                                                null

                                        )}
                                        <button 
                                        className="inline-flex w-full disabled:bg-gray-400 disabled:text-gray-300 item-center justify-center bg-black px-6 py-4 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide mt-20"
                                        disabled={!isFormValid()}
                                        onClick={handleRegisteronSubmit}
                                        >
                                            Register
                                        </button>

                                    </div>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}