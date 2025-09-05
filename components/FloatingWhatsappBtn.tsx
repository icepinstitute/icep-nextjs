'use client'
import { phoneNumber } from '@/Constants'
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function FloatingWhatsappBtn() {
    return (
        <FloatingWhatsApp
            phoneNumber={phoneNumber.withCountryCode}
            accountName="ICEP"
            avatar="/images/logos/avatars/avatar.png"
            buttonStyle={{ width: '45px', height: '45px' }}
            statusMessage='Replies within 1 minute'
        />
    )
}
