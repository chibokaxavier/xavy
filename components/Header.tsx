import Link from 'next/link'
import React from 'react'
import Nav from "@/components/Nav"

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href={'/'}>
                    <h1 className='text-4xl font-semibold'>
                        Xavier<span className='text-accent'>.</span>
                    </h1>
                </Link>
                <div className='hidden xl:flex gap-8 justify-center items-center'>
                    <Nav />
                    <Link href={'/contact'}><button>Hire me </button></Link>
                </div>
                <div className='xl:hidden'>
                    mobile nav
                </div>

            </div>
        </header>
    )
}

export default Header