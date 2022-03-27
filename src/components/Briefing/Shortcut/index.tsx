import { Fragment } from "react";

interface PropsServer {
    priority: number;
    contentId: number; 
}

export default function Shortcut( {priority} : PropsServer ) {
    return(
        <Fragment>
            <div className={`h-24 col-span-${priority} bg-gray-700 flex flex-col justify-center`}>
                <span className="p-4 text-gray-100 font-black">
                    Lorem ipsum dolor sit amet.
                </span>
            </div>
        </Fragment>
    )
}