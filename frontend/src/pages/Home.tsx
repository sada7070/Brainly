import { Navbar } from "../components/homepageComponents/Navbar";

export function Home() {
    return <div>
       <Navbar />
       <div className="flex pt-15 pl-20">
        <div>
            <h1 className="text-3xl md:text-7xl font-extrabold text-start text-purple-600 leading-tight tracking-wide coda-regular">
                Save tweets, videos
                <br />
                your smart link organizer.
            </h1>
            <h1 className="text-1xl md:text-3xl font-extrabold text-start text-slate-800 leading-tight tracking-wide coda-regular pt-6">
            Access your saved links anytime, anywhere
            <br  />—stay organized effortlessly.
            </h1>
        </div>
       </div>
    </div>
}