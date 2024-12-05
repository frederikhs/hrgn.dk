import {Metadata} from "next";

interface Fact {
    key: string
    value: string
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
        value: "Hiper"
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

export const metadata: Metadata = {
    title: 'hrgn | About',
    description: 'Some simple facts about me',
}

export default function Home() {
    return (
        <div>
            <h1 className="header">
                Some facts about me
            </h1>
            <div className={"space-y-4"}>
                {Facts.map((fact, index) => {
                    return (
                        <p key={index}><span className={"font-bold"}>{fact.key}</span>: {fact.value}</p>
                    )
                })}
            </div>
        </div>
    );
}
