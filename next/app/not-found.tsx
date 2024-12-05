import {Metadata} from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Not found',
    description: 'This page does not exist',
}

export default function NotFound() {
    return (
        <div>
            <h1>404 - Page does not exist</h1>
            <p>
                This page does not anymore, or did not even exist in the first place.
            </p>
            <p>
                Go to the front page by clicking <Link href={"/"} className={"hover:opacity-75 underline"}>here</Link>
            </p>
        </div>
    )
}
