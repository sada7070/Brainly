import { useState } from "react";
import { AuthButton } from "../components/authComponents/AuthButton";
import { ButtonWarning } from "../components/authComponents/ButtonWarning";
import { Heading } from "../components/authComponents/Heading";
import { InputBox } from "../components/authComponents/InputBox";
import { SubHeading } from "../components/authComponents/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-200 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-gray-200 rounded-lg w-80 text-center p-2 px-4">
                <Heading label="Sign Up" />
                <SubHeading label="Enter the following details to create your account" />
                <InputBox onChange={(e) => {
                    setUserName(e.target.value);
                }} label="Username" placeholder="John"/>
                <InputBox onChange={(e) => {
                    setPassword(e.target.value);
                }} label="Password" placeholder="*******"/>
                <AuthButton onClick={async() => {
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                        userName,
                        password
                    });
                    alert("You are signed up");
                    localStorage.setItem("token", response.data.token);
                    navigate("/dashboard");
                }} label="Sign Up" />
                <ButtonWarning label="Already have an account? " buttonText="SignIn" to={"/signin"} />
            </div>
        </div>
    </div>
}