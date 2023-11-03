import React from 'react';
import ExternalLink from "../components/ExternalLink";

interface Fact {
    key: string
    value: React.ReactNode
}

const Facts: Fact[] = [
    {
        key: "Name",
        value: "Frederik Hørgreen Sørensen"
    },
    {
        key: "Email",
        value: "frederik@hoergreen.dk"
    },
    {
        key: "Currently working at",
        value: <>Hiper <ExternalLink href={"https://www.hiper.dk"}/></>
    },
    {
        key: "Working as",
        value: "Enterprise Architect"
    },
    {
        key: "Responsible for",
        value: "the tech stack and cloud infrastructure for Hiper's business support systems while also being a resource in the development scrum team"
    },
    {
        key: "Working with",
        value: "AWS, Kubernetes, Docker, Linux, Golang, PHP"
    }
]

export default function About() {
    return (
        <div>
            <h1 className="header">
                Some facts about me
            </h1>
            {Facts.map((fact, index) => {
                return (
                    <p key={index}><span className={"font-bold"}>{fact.key}</span>: {fact.value}</p>
                )
            })}
        </div>
    );
}
