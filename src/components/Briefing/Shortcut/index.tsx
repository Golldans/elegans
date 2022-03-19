import { Fragment } from "react";

interface PropsServer {
    priority: number;
}

export default function Shortcut( propsServer: PropsServer ) {
    return(
        <Fragment>
            <div className={`h-24 col-span-${propsServer.priority} bg-gray-700`}>

            </div>
        </Fragment>
    )
}