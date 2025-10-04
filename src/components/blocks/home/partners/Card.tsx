import Primary from 'components/ui/Buttons/Primary' 
import Card1 from 'components/ui/card/Card1' 
import Image from 'next/image'
import React from 'react'


type PartnerType = {
    data: {
        image: string,
        name: string,
        href: string,
        linkText: string,
    }
}

const Card = ({ data }: PartnerType) => {
    return (
        <Card1>
            <div className='p-8'>
                <div className='w-[200px] h-[150px] grid place-content-center mx-auto'>
                    <Image
                        src={`/assets/img/${data.image}`}
                        width={100}
                        height={100}
                        alt={`${data.name} logo`}
                        priority
                        className='w-full h-full'
                    />
                </div>

                <h4 className='uppercase text-gray-500 font-semibold text-center mt-10'>{data.name}</h4>
                <div className="text-center mt-10">
                    <Primary className="bg-cyan-500">
                        {data.linkText}
                    </Primary>
                </div>
            </div>
        </Card1>
    )
}

export default Card