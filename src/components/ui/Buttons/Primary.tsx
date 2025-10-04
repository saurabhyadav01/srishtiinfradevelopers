import React from 'react'
import { WrapperInterface } from '../SectionWrapper';
import { motion } from 'framer-motion';

const Primary = ({ children, className }: WrapperInterface) => {
    return (
        <motion.button
            initial={{ scale: .9 }}
            animate={{ scale: 1 }}
            transition={{ duration: .5, ease: "easeInOut" }}
            className={`px-4 py-2 rounded shadow-lg ${className ? "text-white" : ""} ${className || ""}`}
        >
            {children}
        </motion.button>
    )
}

export default Primary