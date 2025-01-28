import { Button } from "../components/authComponents/Button";
import { ButtonWarning } from "../components/authComponents/ButtonWarning";
import { Heading } from "../components/authComponents/Heading";
import { InputBox } from "../components/authComponents/InputBox";
import { SubHeading } from "../components/authComponents/SubHeading";

export function Signup() {
    return <div className=" bg-slate-200 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-gray-200 rounded-lg w-80 text-center p-2 px-4">
                <Heading label="Sign Up" />
                <SubHeading label="Enter the following details to create your account" />
                <InputBox onChange={() => {

                }} label="Username" placeholder="John"/>
                <InputBox onChange={() => {
                    
                }} label="Password" placeholder="*******"/>
                <Button onClick={() => {

                }} label="Sign Up" />
                <ButtonWarning label="Already have an account? " buttonText="SignIn" to={"/signin"} />
            </div>
        </div>
    </div>
}