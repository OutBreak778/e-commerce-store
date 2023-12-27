import React from 'react'
import Container from './ui/Container'
import Link from 'next/link'
import MainNav from './MainNav'
import getCategory from '@/actions/getCategory'
import NavbarAction from './NavbarAction'


const Navbar = async () => {
    const category = await getCategory()
  return (
    <nav className='border-b'>
        <Container>
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                <Link href="/" className='ml-4 flex lg:ml-0 gap-x-4'>
                    <div className="font-bold text-xl">STORE</div>
                </Link>
                <MainNav data={category} />
                <NavbarAction />
            </div>
        </Container>
    </nav>
  )
}

export default Navbar