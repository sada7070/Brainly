import { ReactElement } from "react";

interface Buttonprops {
    variant : "primary" | "secondary";
    text: string;
    startIcon: ReactElement;
}

const variantClasses = {
    "primary": "bg-purple-600 text-purple-200",
    "secondary": "bg-purple-200 text-purple-600",
};

const defaultStyles = "px-4 py-2 rounded-md flex items-center"

export function Button({variant, text, startIcon}: Buttonprops) {
    return <button className={variantClasses[variant] + "  " + defaultStyles}>
        <div className="pr-2">
            {startIcon}
        </div>
        {text}
    </button>
}