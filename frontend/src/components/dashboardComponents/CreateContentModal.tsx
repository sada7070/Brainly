// building the component which PopUp when we clicked 'Add post' button.
import { useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { AuthButton } from "../authComponents/AuthButton";
import axios from "axios";

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

enum ContentType {
    YouTube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal({open, onClose}: CreateContentModalProps) {
    const[title, setTitle] = useState("");
    const[link, setLink] = useState("");
    const[type, setType] = useState("");

    return <div>
        {open && <div>
            {/* This div acts as background opacity */}
            <div className="h-screen w-screen bg-purple-200 fixed top-0 left-0 opacity-80 flex justify-center">
            </div> 

            {/* This div addes new content */}
            <div className="h-screen w-screen fixed top-0 left-0 flex justify-center"> 
                <div className="flex flex-col justify-center">
                    <div className="bg-white opacity-100 p-4 rounded-md">
                        <div className="flex justify-between">
                                <div className="px-4 text-xl">
                                    Add Content
                                </div>
                                <div onClick={onClose} className="cursor-pointer flex justify-end">
                                    <CrossIcon />
                                </div>
                        </div>
                        <div>
                            <Input onChange={(e) => {
                                setTitle(e.target.value);
                            }} placeholder={"Title"} />
                            <Input onChange={(e) => {
                                setLink(e.target.value);
                            }} placeholder={"Link"} />
                        </div>
                        <div className="flex gap-2 justify-center items-center pb-4">
                            <Button text="Youtube" variant={type === ContentType.YouTube ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.YouTube);
                            }}></Button>
                            <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Twitter);
                            }}></Button>
                        </div>
                        <div className="flex justify-center px-2">
                            <AuthButton onClick={async() => {
                                await axios.post("http://localhost:3000/api/v1/dashboard/content", {
                                    title,
                                    link,
                                    type
                                }, {
                                    headers: {
                                        Authorization: localStorage.getItem("token")
                                    }
                                });
                                onClose();
                            }} label="Submit"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
    </div>
}


interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}
// InputBox component
function Input({onChange, placeholder}: InputProps) {
    return <div>
        <input placeholder={placeholder} type={"text"} className="m-4 border border-slate-200 rounded" onChange={onChange}></input>
    </div>
}