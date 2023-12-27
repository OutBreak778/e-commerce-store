const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

import { Category } from '@/types'

export const revalidate = 0;

const getCategory = async ():Promise<Category[]> => {

    const res = await fetch(URL)
    return res.json()

}

export default getCategory