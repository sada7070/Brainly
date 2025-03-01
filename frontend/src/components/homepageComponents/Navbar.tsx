import { Button } from "../dashboardComponents/Button"; 
import { useNavigate } from "react-router-dom"
import { BrianIcon } from "../../icons/BrianIcom";

export function Navbar() {
    const navigate = useNavigate();

    return <div>
        <div className="flex justify-between pt-3 pr-6">
            <div className="flex text-2xl font-medium pl-4 pb-5 pt-1 items-center">
                <BrianIcon />
                <div className="pl-4">
                    BRAINLY
                </div>
            </div>
            <div className=" flex pt-1">
                <div className="pr-4">
                    <Button onClick={async() =>  {
                        navigate("/signup");
                    }} variant="secondary" text="Signup" />
                </div>
                <div>
                    <Button onClick={async() =>  {
                        navigate("/signin");
                    }} variant="primary" text="Signin" />
                </div>       
            </div>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-300" />
        </div>
}