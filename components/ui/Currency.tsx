"use client"

import { formatter } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface CurrencyProps {
    value?: string | number
}


const Currency: React.FC<CurrencyProps> = ({value}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    },[])

    if(!mounted) {
        return null
    }
  return (
    <div className='font-semibold'>
        {formatter.format(Number(value))}
    </div>
  )
}

export default Currency