import React from 'react'
import { WrapperInterface } from './SectionWrapper';
import { motion } from 'framer-motion';

interface BadgeInterface extends WrapperInterface {
    alignment: string,
}

const TextBadge = ({ children, alignment, className }: BadgeInterface) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`py-2 px-4 rounded-md text-sm w-fit ${alignment === "center" && "mx-auto"} ${className || ""}`}
        >
            {children}
        </motion.div>
    )
}

export default TextBadge