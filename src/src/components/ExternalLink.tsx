import React from "react";

export default function ExternalLink(props: { href: string, title?: string }) {
    return (
        <a target={"_blank"} rel="noreferrer" className={"link"} href={props.href}>[{props.title !== undefined ? props.title : 'Link'}]</a>
    )
}
