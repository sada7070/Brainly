import { BrianIcon } from "../../icons/BrianIcom";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SideItem } from "./SideItem";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
    const navigate = useNavigate();

    return <div className="h-screen b-white border-r-2 border-slate-200 w-72 fixed left-0 top-0  pt-4 pl-4">
        <div className="flex text-2xl font-medium pb-6 items-center">
            <BrianIcon />
            <div className="pl-3">
                BRAINLY
            </div>
        </div>
        <div>
            <SideItem onClick={() => {
                navigate("/dashboard/tweets");
            }} text="Tweets" icon={<TwitterIcon />} />
            <SideItem onClick={() => {
                navigate("/dashboard/youtube");
            }} text="YouTube" icon={<YoutubeIcon />} />
        </div>
    </div>
}