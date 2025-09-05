import Image from 'next/image'
import React from 'react'

interface LogoProps {
    vertical?: boolean;
}

export default function Logo({ vertical = false }: LogoProps) {
    return (
        <div className={`flex ${vertical ? 'flex-col gap-y-3.5' : 'items-center'} gap-x-2`}>
                <Image
                    alt='icep logo'
                    src={'/images/logos/logo.png'}
                    width={vertical ? 110 : 65}
                    height={vertical ? 110 : 65}
                />
            <div className={`flex flex-col gap-y-1.5 tracking-wide uppercase`}>
                <p className="text-xl font-semibold heading-font leading-none">ICEP Institute</p>
                <p className="text-[0.65rem] font-light">Institute for Competitive<br />Exams Prepration</p>
            </div>
        </div>
    )
}
