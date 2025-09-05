import { icep_social_links } from '@/Constants'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si'

export default function SocialIconsFooter() {
    return (
        <div className='flex w-full self-start mt-5 items-center gap-x-3'>
            <Link target='_blank' href={icep_social_links.facebook} className='size-[33px] rounded-full bg-brand-white text-blue-600 flex items-center justify-center'>
                <SiFacebook />
            </Link>
            <Link target='_blank' href={icep_social_links.youtube} className='size-[33px] rounded-full bg-brand-white text-red-600 flex items-center justify-center'>
                <SiYoutube />
            </Link>
            <Link target='_blank' href={icep_social_links.instagram} className='size-[33px] rounded-full bg-brand-white text-orange-500/70 flex items-center justify-center'>
                <SiInstagram />
            </Link>
        </div>
    )
}

export function SocialIconsNavbar() {
    return (
        <div className='flex items-center gap-x-5 text-white transition-colors'>
            <Link target='_blank' href={icep_social_links.facebook} className='hover:text-brand-yellow flex items-center justify-center'>
                <FaFacebook />
            </Link>
            <Link target='_blank' href={icep_social_links.youtube} className='hover:text-brand-yellow flex items-center justify-center'>
                <FaYoutube />
            </Link>
            <Link target='_blank' href={icep_social_links.instagram} className='hover:text-brand-yellow flex items-center justify-center'>
                <FaInstagram />
            </Link>
        </div>
    )
}
