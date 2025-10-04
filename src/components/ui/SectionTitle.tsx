import React from 'react'
import TextBadge from './TextBadge'
import PrimaryHeading from './PrimaryHeading'

type SectionTitleType = {
    alignment?: "center" | "left",
    badgeText: string,
    tagline: string,
    title: string,
}


const SectionTitle = ({ alignment = "center", badgeText, tagline, title }: SectionTitleType) => {
    return (
        <div className="w-full">
            <TextBadge alignment={alignment} className="bg-cyan-100 text-cyan-500">
                {badgeText}
            </TextBadge>
            <PrimaryHeading alignment={alignment}>
                {title}
            </PrimaryHeading>
            <p className={`${alignment === "center" ? "text-center mx-auto" : ""} text-gray-400 text-base mt-3 max-w-[500px]`}>
                {tagline}
            </p>
        </div>
    )
}

export default SectionTitle