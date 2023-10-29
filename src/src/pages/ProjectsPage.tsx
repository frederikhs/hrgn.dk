import React from 'react';
import ExternalLink from "../components/ExternalLink";

interface Project {
    link?: string
    github_link?: string
    name: string
    description: string
}

const Projects: Project[] = [
    {
        link: "https://pp.hrgn.dk",
        github_link: "https://github.com/frederikhs/planning-poker",
        name: "Planning Poker",
        description: "play planning poker with websockets in realtime without creating an account"
    },
    {
        link: "https://gte.hrgn.dk",
        name: "Guess the episode",
        description: "try and guess what episode each thumbnail is from"
    },
    {
        link: "https://eat-score.hrgn.dk",
        github_link: "https://github.com/frederikhs/eat-score",
        name: "Eat Score",
        description: "rate food items at venues"
    },
    {
        github_link: "https://github.com/frederikhs/pg_user",
        name: "pg_user",
        description: "a cli application for managing postgres users"
    },
    {
        github_link: "https://github.com/frederikhs/local-db-copy",
        name: "local-db-copy",
        description: "a dockerfile for building a postgres image with data"
    },
    {
        github_link: "https://github.com/frederikhs/vault-pgpass",
        name: "vault-pgpass",
        description: "a cli application for syncing .pgpass using vault"
    },
    {
        github_link: "https://github.com/frederikhs/sql2csv-cmd",
        name: "sql2csv-cmd",
        description: "a cli application for extracting data as csv from a PostgreSQL database using sql"
    },
    {
        github_link: "https://github.com/frederikhs/api-bookmark-extension",
        name: "api-bookmark-extension",
        description: "chromium based extension for syncronizing bookmarks by using a remote json api as the source. Example could be a gist with the following contents"
    },
]

export default function ProjectsPage() {
    return (
        <div className={"space-y-4"}>
            <p>I have picked some projects i want to showcase</p>
            <ul className="list-none">
                {Projects.map((project, index) => {
                    return (
                        <li key={index} className={"space-x-2"}>
                            <span className={"font-bold"}>{project.name}</span>
                            <span className={"italic"}>({project.description})</span>
                            {project.link !== undefined && <ExternalLink href={project.link}/>}
                            {project.github_link !== undefined && <ExternalLink href={project.github_link} title={"GitHub"}/>}
                        </li>
                    )
                })}
            </ul>
            <p>I have many others on my <ExternalLink href={"https://github.com/frederikhs?tab=repositories"} title={"GitHub page"}/></p>
        </div>
    );
}
