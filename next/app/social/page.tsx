import {Metadata} from "next";

interface Link {
    link: string
    title: string
}

const Links: Link[] = [
    {
        link: "https://github.com/frederikhs",
        title: "GitHub",
    },
    {
        link: "https://www.linkedin.com/in/fhoergreen",
        title: "LinkedIn",
    },
    {
        link: "https://www.facebook.com/frederikhs",
        title: "Facebook",
    },
    {
        link: "https://www.strava.com/athletes/60630344",
        title: "Strava",
    },
    {
        link: "https://www.instagram.com/hoergreen",
        title: "Instagram",
    },
]

export const metadata: Metadata = {
    title: 'Social',
    description: 'Links to social platforms of Frederik Hørgreen Sørensen',
}

export default function SocialPage() {
    return (
        <div>
            <h1 className="header">
                My social links
            </h1>
            <p>I use the following platforms</p>
            <div className={"flex flex-wrap gap-x-2"}>
                {Links.map((link, index) => {
                    return (
                        <a key={index} target={"_blank"} rel="noreferrer" className={"link"} href={link.link}>[{link.title}]</a>
                    )
                })}
            </div>
        </div>
    );
}
