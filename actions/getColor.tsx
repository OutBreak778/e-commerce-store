const URL = `${process.env.NEXT_PUBLIC_API_URL}/color`

import { Color } from '@/types'

export const revalidate = 0;

const getColor = async ():Promise<Color[]> => {

    const res = await fetch(URL)
    return res.json()

}

export default getColor