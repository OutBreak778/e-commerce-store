"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './ui/Button'
import { ShoppingBagIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/hooks/useCart'

const NavbarAction = () => {

    const cart = useCart()
    const router = useRouter()

    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    },[])
    if(!mounted) {
        return null
    }

  return (
    <div className='ml-auto flex items-center gap-x-4'>
        <Button onClick={() => router.push("/cart")} className='flex items-center rounded-full bg-black px-4 py-2'>
            <ShoppingBagIcon size={20} color='white' />
            <span className="ml-2 text-sm font-medium text-white">
                {cart.items.length}
            </span>
        </Button>
    </div>
  )
}

export default NavbarAction