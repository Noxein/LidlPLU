'use server'

import { sql } from '@vercel/postgres'
import { Product } from './utils/types'

export const getPLUs = async () => {
    try{
        const result = await sql`SELECT * FROM plu`
        return {success: true, data: result.rows as Product[], error: ''}
    }catch(error){
        console.error(error)
        return {success: false, data: [], error: 'Something went wrong'}
    }

}