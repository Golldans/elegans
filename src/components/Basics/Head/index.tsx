import { Fragment } from "react";
import Head from "next/head";

interface ServerProps {
    pageTitle?: string;
}

export default function BasicHead({pageTitle = 'Elegans'}: ServerProps) {
    return (
        <Fragment>
            <Head>
                <title>{pageTitle}</title>
                <meta content="text/html;charset=UTF-8" />
            </Head>
        </Fragment>
    )
}