import { Fragment } from "react";
import Shortcut from "../../components/Briefing/Shortcut";

export default function BriefingHome() {
    return (
        <Fragment>
            <div className="flex w-screen h-screen text-gray-400 bg-gray-900">
                <div className="flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-800 text-gray-500">

                </div>
                <div className="flex flex-col w-56 border-r border-gray-800">

                </div>
                <div className="flex flex-col flex-grow">
                    <div className="flex items-center flex-shirnk-0 h-16 px-8 border-b border-gray-800">

                    </div>
                    <div className="flex-grow p-6 overflow-auto bg-gray-800">
                        <div className="grid grid-cols-3 gap-6">
                        <Shortcut priority={2}/>
                        <Shortcut priority={1}/>
                        <Shortcut priority={3}/>
                        <Shortcut priority={1}/>
                        <Shortcut priority={1}/>
                        <Shortcut priority={1}/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}