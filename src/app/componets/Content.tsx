import { use, useState } from "react"
import { MyContext } from "../page";
import { Recordings } from "./Recordings";

export const Content = () => {
    const userName = use(MyContext)?.userEmail.split('@')[0];
    const [showRecordings, setShowRecordings] = useState(true);

    return (
        <main className="
            flex min-h-screen flex-col items-center
            gap-10 p-24 bg-[#dddddd] text-black
        ">
            <h1
                className="text-4xl font-bold"
            >
                Welcome {userName?.toUpperCase()} to the Frontend Community!
            </h1>
            {showRecordings && (
                <Recordings />
            )}
            <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800
                    focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
                "
                onClick={() => setShowRecordings(!showRecordings)}
            >
                {showRecordings ? 'Hide' : 'Show'} Recordings
            </button>
        </main>
    )
}