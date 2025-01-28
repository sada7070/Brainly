import { ReactElement } from "react";

interface SideItemProps {
    icon: ReactElement;
    text: string;
}

export function SideItem({icon, text}: SideItemProps) {
    return <div className="flex text-gray-700 py-2 pl-2">
        <div className=" text-gray-500 pr-2">
            {icon}
        </div>
        <div>
            {text}
        </div>
        </div>
}