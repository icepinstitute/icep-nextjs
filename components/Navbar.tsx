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
    const pathname = usePathname();    // Handle scroll behavior - ONLY for desktop
    useEffect(() => {

        // Checking screen
        if (window.innerWidth > 991) setIsDesktopScreen(true);

        const handleScroll = () => {
            // Only apply scroll behavior on desktop (991px and above)
            if (window.innerWidth < 991) return;

            const currentScrollY = window.scrollY;

            // Check if scrolled past initial position
            setIsScrolled(currentScrollY > 50);

            // Show/hide navbar based on scroll direction
            if (currentScrollY < lastScrollY || currentScrollY < 100) {
                // Scrolling up or near top - show navbar
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down and not near top - hide navbar
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        const handleResize = () => {
            // Reset scroll behavior when resizing to/from mobile
            if (!isDesktopScreen) {
                setIsScrolled(false);
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [lastScrollY, isDesktopScreen]);

    // Close mobile menu when clicking outside or pressing escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    function NavbarContent(): React.JSX.Element {
        return (
            <>
                {/* Logo Div */}
                <div className="flex items-center justify-between pt-6 pb-6 min-[991px]:pb-14">
                    {/* NavLogo */}
                    <Logo />
                    <button className="bg-brand-blue/85 text-brand-white btn hidden min-[991px]:hidden">
                        Apply Now
                    </button>                <button
                        className='text-brand-blue block min-[991px]:hidden'
                        onClick={toggleMobileMenu}
                    >
                        <HiMenuAlt1 size={30} />
                    </button>
                </div>

                {/* Navigation Links */}
                {/* left-14 right-14 rounded */}
                {/* media query at 991px */}
                <div className={`bg-brand-blue hidden min-[991px]:flex border-b border-white absolute left-14 right-14 rounded-md items-center justify-between py-2 transition-all duration-300 ease-in-out ${isVisible ? '-bottom-5' : '-bottom-5'
                    }`}>
                    <ul className="flex uppercase text-white text-sm font-medium px-2">
                        <li className={`rounded-[4px] px-5 py-2 flex items-center justify-center text-center border-r border-gray-500 ${isActive('/') ? 'bg-brand-yellow text-black' : ''}`}>
                            <Link className='' href={'/'}>Home</Link>
                        </li>
                        <li className={`rounded-[4px] px-5 py-3 flex items-center justify-center text-center border-r border-gray-500 ${isActive('/courses') ? 'bg-brand-yellow text-black' : ''}`}>
                            <Link className='' href={'/#courses-section'}>Courses</Link>
                        </li>
                        <li className={`rounded-[4px] px-5 py-3 flex items-center justify-center text-center border-r border-gray-500 ${isActive('/success-stories') ? 'bg-brand-yellow text-black' : ''}`}>
                            <Link className='' href={'/#success-stories-section'}>Success Stories</Link>
                        </li>
                        <li className={`rounded-[4px] px-5 py-3 flex items-center justify-center text-center border-r border-gray-500 ${isActive('/past-papers') ? 'bg-brand-yellow text-black' : ''}`}>
                            <Link className='' href={'/past-papers'}>Past Papers</Link>
                        </li>                    
                        <li className={`rounded-[4px] px-5 py-3 flex items-center justify-center text-center border-r border-gray-500 ${isActive('/magazines') ? 'bg-brand-yellow text-black' : ''}`}>
                            <Link className='' href={'/magazines'}>Magazines</Link>
                        </li>
                        <li className={`rounded-[4px] px-5 py-3 flex items-center justify-center text-center border-r border-gray-500 ${isActive('/notes') ? 'bg-brand-yellow text-black' : ''}`}>
                            <Link className='' href={'/notes'}>Notes</Link>
                        </li>
                        <li className={`rounded-[4px] px-5 py-3 flex items-center justify-center text-center border-r border-gray-500 ${isActive('/book-summaries') ? 'bg-brand-yellow text-black' : ''}`}>
                            <Link className='' href={'/book-summaries'}>Book Summaries</Link>
                        </li>
                        <li className={`rounded-[4px] px-5 py-3 flex items-center justify-center text-center border-gray-500 ${isActive('/contact') ? 'bg-brand-yellow text-black' : ''}`}>
                            <Link className='' href={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-[70] min-[991px]:hidden"
                        onClick={closeMobileMenu}
                    ></div>
                )}

                {/* Mobile Side Menu */}
                <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out min-[991px]:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <Logo />
                        <button
                            onClick={closeMobileMenu}
                            className="text-gray-600 hover:text-brand-blue transition-colors"
                        >
                            <HiX size={24} />
                        </button>
                    </div>                
                    {/* Mobile Menu Links */}
                    <div className="py-6">
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    onClick={closeMobileMenu}
                                    className={`block px-6 py-3 transition-colors duration-200 ${isActive('/')
                                        ? 'bg-brand-blue text-white'
                                        : 'text-gray-700 hover:bg-brand-blue hover:text-white'
                                        }`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#courses-section"
                                    onClick={closeMobileMenu}
                                    className={`block px-6 py-3 transition-colors duration-200 ${isActive('/courses')
                                        ? 'bg-brand-blue text-white'
                                        : 'text-gray-700 hover:bg-brand-blue hover:text-white'
                                        }`}
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    onClick={closeMobileMenu}
                                    className={`block px-6 py-3 transition-colors duration-200 ${isActive('/success-stories')
                                        ? 'bg-brand-blue text-white'
                                        : 'text-gray-700 hover:bg-brand-blue hover:text-white'
                                        }`}
                                >
                                    Success Stories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    onClick={closeMobileMenu}
                                    className={`block px-6 py-3 transition-colors duration-200 ${isActive('/faqs')
                                        ? 'bg-brand-blue text-white'
                                        : 'text-gray-700 hover:bg-brand-blue hover:text-white'
                                        }`}
                                >
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/past-papers"
                                    onClick={closeMobileMenu}
                                    className={`block px-6 py-3 transition-colors duration-200 ${isActive('/past-papers')
                                        ? 'bg-brand-blue text-white'
                                        : 'text-gray-700 hover:bg-brand-blue hover:text-white'
                                        }`}
                                >
                                    Past Papers
                                </Link>
                            </li>                        <li>
                                <Link
                                    href="/magazines"
                                    onClick={closeMobileMenu}
                                    className={`block px-6 py-3 transition-colors duration-200 ${isActive('/magazines')
                                        ? 'bg-brand-blue text-white'
                                        : 'text-gray-700 hover:bg-brand-blue hover:text-white'
                                        }`}
                                >
                                    Magazines
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    onClick={closeMobileMenu}
                                    className={`block px-6 py-3 transition-colors duration-200 ${isActive('/about')
                                        ? 'bg-brand-blue text-white'
                                        : 'text-gray-700 hover:bg-brand-blue hover:text-white'
                                        }`}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    onClick={closeMobileMenu}
                                    className={`block px-6 py-3 transition-colors duration-200 ${isActive('/contact')
                                        ? 'bg-brand-blue text-white'
                                        : 'text-gray-700 hover:bg-brand-blue hover:text-white'
                                        }`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        {/* Mobile CTA Button */}
                        <div className="px-6 pt-6">
                            <button
                                onClick={closeMobileMenu}
                                className="w-full bg-brand-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-blue-700 transition-colors duration-200"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    switch (variant) {
        case 'sticky-flexible':
            return (
                <nav className={`bg-white transition-all duration-300 ease-in-out text-black px-5 min-[440px]:px-14 z-[11] 
            ${isDesktopScreen ? (isScrolled ? `relative min-[991px]:fixed min-[991px]:top-0 min-[991px]:left-0 min-[991px]:right-0 ${isVisible ? 'min-[991px]:translate-y-0' : 'min-[991px]:-translate-y-[162px]'} backdrop-blur-md shadow-lg`
                        : 'relative min-[991px]:relative backdrop-blur-sm shadow-sm') : 'relative'}`}>
                    <NavbarContent />
                </nav>
            );
        case 'normal':
            return (
                <nav className={`bg-white transition-all duration-300 ease-in-out text-black px-5 min-[440px]:px-14 z-[11]`}>
                    <NavbarContent />
                </nav>
            );
        case 'sticky':
            return (
                <nav className={`sticky top-0 left-0 right-0 bg-white transition-all duration-300 ease-in-out text-black px-5 min-[440px]:px-14 z-[11]`}>
                    <NavbarContent />
                </nav>
            );
    }
}
