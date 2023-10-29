import React from 'react';
import ExternalLink from "../components/ExternalLink";

export default function SocialPage() {
    return (
        <div>
            <p>I use the following platforms</p>
            <div className={"flex space-x-2"}>
                <ExternalLink href={"https://github.com/frederikhs"} title={"GitHub"}/>
                <ExternalLink href={"https://www.linkedin.com/in/fhoergreen"} title={"LinkedIn"}/>
                <ExternalLink href={"https://www.facebook.com/frederikhs/"} title={"Facebook"}/>
            </div>
        </div>
    );
}
