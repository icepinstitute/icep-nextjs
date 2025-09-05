import { icep_email, phoneNumber } from '@/Constants'
import React from 'react'
import { LuMail, LuPhone } from 'react-icons/lu'
import { SocialIconsNavbar } from './SocialIconsFooter'

export default function Topbar() {
    return (
        <div className="px-14 hidden min-[629px]:flex pt-3 pb-2 justify-between bg-slate-800 text-white items-center border-b border-gray-500">
            <div className="flex gap-x-8 text-sm">
                <span>Have any questions?</span>
                <div className="flex items-center gap-x-1.5">
                    <LuPhone size={16} className="mt-0.5" />
                    <strong className="font-normal">{phoneNumber.withoutCountryCode}</strong>
                </div>
                <div className="flex items-center gap-x-1.5">
                    <LuMail size={16} className="mt-0" />
                    <strong className="font-normal">{icep_email.gmail}</strong>
                </div>
            </div>
            <div>
                <SocialIconsNavbar />
            </div>
        </div>
    )
}
