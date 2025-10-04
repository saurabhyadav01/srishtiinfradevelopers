import Image from 'next/image'
import React from 'react'
import { WrapperInterface } from 'types'; 
import { motion } from 'framer-motion';

const polygon = {
    clipPath: "polygon(0% 0%, 0% 95%, 100% 100%, 100% 0%)"
}

const Card1 = ({ children }: WrapperInterface) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: .8, y: 10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: .5, ease: "easeInOut" }}
            className="shadow-emerald-100 drop-shadow-2xl "
        >
            <div className="p-5 min-h-[300px] bg-white rounded-2xl" style={polygon}>
                {children}
            </div>
        </motion.div>
    )
}

export default Card1