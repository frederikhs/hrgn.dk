'use client'

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

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
    const pathName = usePathname()
    const isActive = (href: string) => pathName === href

    return (
        <nav className="sticky top-0 z-10 bg-neutral-900">
            <div className="flex flex-wrap items-center justify-start space-x-4 p-4">
                <Link href={"/"} className="text-blue-500">
                    <span>hrgn.dk</span>
                </Link>
                <span>|</span>
                {Links.map((link, index) => {
                    return (
                        <Link key={index} href={link.to} className={`${isActive(link.to) ? "underline" : ""} hover:opacity-75`}>
                            <span>{link.title}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
