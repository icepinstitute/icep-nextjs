'use client';

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { HiMenuAlt1, HiX } from 'react-icons/hi'

interface NavbarProps {
    variant?: 'normal' | 'sticky' | 'sticky-flexible'
}

export default function Navbar({ variant = 'sticky' }: NavbarProps): React.JSX.Element {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isDesktopScreen, setIsDesktopScreen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 991) setIsDesktopScreen(true);
        }

        const handleScroll = () => {
            if (window.innerWidth < 991) return;
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);
            if (currentScrollY < lastScrollY || currentScrollY < 100) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    function NavbarContent(): React.JSX.Element {
        return (
            <>
                <div className="flex items-center justify-between pt-6 pb-6 min-[991px]:pb-14">
                    <Logo />
                    <button className='text-brand-blue block min-[991px]:hidden' onClick={toggleMobileMenu}>
                        <HiMenuAlt1 size={30} />
                    </button>
                </div>

                <div className={`bg-brand-blue hidden min-[991px]:flex border-b border-white absolute left-14 right-14 rounded-md items-center justify-between py-2 transition-all duration-300 ease-in-out ${isVisible ? '-bottom-5' : '-bottom-5'}`}>
                    <ul className="flex uppercase text-white text-[10px] font-medium px-1">
                        <li className={`rounded-[4px] px-2 py-2 flex items-center justify-center border-r border-gray-500 ${isActive('/') ? 'bg-brand-yellow text-black' : ''}`}><Link href='/'>Home</Link></li>
                        <li className={`rounded-[4px] px-2 py-2 flex items-center justify-center border-r border-gray-500`}><Link href='/#courses-section'>Courses</Link></li>
                        <li className={`rounded-[4px] px-2 py-2 flex items-center justify-center border-r border-gray-500`}><Link href='https://blog.icepcssinstitute.com/css-syllabus'>Syllabus</Link></li>
                        <li className={`rounded-[4px] px-2 py-2 flex items-center justify-center border-r border-gray-500`}><Link href='/#success-stories-section'>Stories</Link></li>
                        <li className={`rounded-[4px] px-2 py-2 flex items-center justify-center border-r border-gray-500`}><Link href='/past-papers'>Papers</Link></li>
                        <li className={`rounded-[4px] px-2 py-2 flex items-center justify-center border-r border-gray-500`}><Link href='/magazines'>Magazines</Link></li>
                        <li className={`rounded-[4px] px-2 py-2 flex items-center justify-center border-r border-gray-500`}><Link href='/notes'>Notes</Link></li>
                        <li className={`rounded-[4px] px-2 py-2 flex items-center justify-center border-r border-gray-500`}><Link href='/book-summaries'>Summaries</Link></li>
                        <li className={`rounded-[4px] px-2 py-2 flex items-center justify-center ${isActive('/contact') ? 'bg-brand-yellow text-black' : ''}`}><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>

                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-black/50 z-[70] min-[991px]:hidden" onClick={closeMobileMenu}></div>
                )}

                <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out min-[991px]:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <Logo />
                        <button onClick={closeMobileMenu} className="text-gray-600"><HiX size={24} /></button>
                    </div>
                    <div className="py-6 overflow-y-auto h-full">
                        <ul className="space-y-2">
                            <li><Link href="/" onClick={closeMobileMenu} className="block px-6 py-3 text-gray-700">Home</Link></li>
                            <li><Link href="https://blog.icepcssinstitute.com/css-syllabus" onClick={closeMobileMenu} className="block px-6 py-3 font-bold text-brand-blue underline">CSS Syllabus</Link></li>
                            <li><Link href="/past-papers" onClick={closeMobileMenu} className="block px-6 py-3 text-gray-700">Past Papers</Link></li>
                            <li><Link href="/contact" onClick={closeMobileMenu} className="block px-6 py-3 text-gray-700">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    return (
        <nav className={`sticky top-0 left-0 right-0 bg-white transition-all duration-300 ease-in-out text-black px-5 min-[440px]:px-14 z-[11]`}>
            <NavbarContent />
        </nav>
    );
}
