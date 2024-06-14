import {NavLink} from "react-router-dom";

interface Link {
    to: string
    title: string
}

const Links: Link[] = [
    {to: "/", title: "About"},
    {to: "/projects", title: "Projects"},
    {to: "/social", title: "Social"},
]

export default function Navigation() {
    return (
        <nav className="sticky top-0 z-10 bg-neutral-900">
            <div className="flex flex-wrap items-center justify-start space-x-4 p-4">
                <NavLink to={"/"} >
                    <span>hrgn.dk</span>
                </NavLink>
                <span>|</span>
                {Links.map((link, index) => {
                    return (
                        <NavLink key={index} to={link.to} className={({isActive}) => isActive ? "underline" : ""}>
                            <span className="hover:opacity-75">{link.title}</span>
                        </NavLink>
                    )
                })}
            </div>
        </nav>
    )
}
