import { PlusIcon } from "../../icons/PlusIcon";
import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube"
}

export function Card({title, link, type}: CardProps) {
    return <div> 
        <div className="bg-gray-100 roundede-md outline-slate-200 p-4 max-w-70 border border-slate-200 rounded-md">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="pr-2 text-gray-700">
                        <PlusIcon/>
                    </div>
                    {title}
                </div>
                <div className="flex items-center pr-1 text-gray-400">
                    <div className="pr-3">
                        <a href={link} target="_blank">
                            <ShareIcon />
                        </a>
                    </div>
                    <ShareIcon />
                </div>
            </div>

            <div className="pt-4">
                {type === "youtube" &&  <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }
                
                {type === "twitter" && <blockquote 
                    className="twitter-tweet">
                        <a href={link.replace("x.com", "twitter.com")}></a>
                </blockquote>}
            </div>
        </div>
    </div>
}