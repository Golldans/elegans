import { Fragment } from "react";

interface PropsServer {
    url: string;
    sectionName: string;
}

export default function NavItem({url, sectionName}: PropsServer) {
    return (
        <Fragment>
            <a 
                className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800"
                href={url}>
                    <span className="leading-none">
                        {sectionName}
                    </span>      
            </a>
        </Fragment>
    )
}