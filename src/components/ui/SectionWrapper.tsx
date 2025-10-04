import React, { ReactNode } from 'react'

export interface WrapperInterface {
    children: ReactNode,
    className?: string,
}

const SectionWrapper = ({ children, className }: WrapperInterface) => {
    return (
        <section className={`py-20 w-full bg-white ${className || ""}`}>
            {children}
        </section>
    )
}

export default SectionWrapper