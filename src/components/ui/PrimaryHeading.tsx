import React from 'react'
import { WrapperInterface } from './SectionWrapper';
import { motion } from 'framer-motion';

export interface HeadingInterface extends WrapperInterface {
    alignment: string,
}

const PrimaryHeading = ({ children, alignment, className }: HeadingInterface) => {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: .2 }}
            className={`${alignment === "center" && "text-center"} mt-5 font-bold text-gray-800 uppercase text-2xl`}
        >
            {children}
        </motion.h2>
    )
}

export default PrimaryHeading