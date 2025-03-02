import { BrianIcon } from "../../icons/BrianIcom";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SideItem } from "./SideItem";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
    const navigate = useNavigate();

    return <div className="h-screen b-white border-r-2 border-slate-200 w-72 fixed left-0 top-0  pt-4 pl-8">
        <div className="flex text-3xl font-medium pb-10 items-center cursor-pointer" onClick={() => {
            navigate("/dashboard");
        }}>
            <BrianIcon />
            <div className="pl-3">
                BRAINLY
            </div>
        </div>
        <div>
            <div className="hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-purple-600">
                <SideItem onClick={() => {
                    navigate("/dashboard/tweets");
                }} text="Tweets" icon={<TwitterIcon />} />
            </div>
            <div className="pt-2 pl-0.5 hover:bg-purple-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-purple-600">
                <SideItem onClick={() => {
                    navigate("/dashboard/youtube");
                }} text="YouTube" icon={<YoutubeIcon />} />
            </div>
        </div>
    </div>
}