// building the component which PopUp when we clicked 'Add post' button.
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({open, onClose}: CreateContentModalProps) {
    return <div>
        {open && <div className="h-screen w-screen bg-purple-200 fixed top-0 left-0 opacity-80 flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white opacity-100 p-4 rounded-md">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon />
                        </div>
                    </div>
                    <div>
                        <Input onChange={() => {

                        }} placeholder={"Title"} />
                        <Input onChange={() => {

                        }} placeholder={"Link"} />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" text="Submit"/>
                    </div>
                </div>
            </div>
        </div>}
    </div>
}


interface InputProps {
    onChange: () => void;
    placeholder: string;
}
// InputBox component
function Input({onChange, placeholder}: InputProps) {
    return <div>
        <input placeholder={placeholder} type={"text"} className="m-4 border border-slate-200 rounded" onChange={onChange}></input>
    </div>
}