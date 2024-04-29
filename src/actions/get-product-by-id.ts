'use server'

import { ProductInterface } from "@/types/products"
import { baseUrl } from "@/utils/base-url"


export async function getProductById( productId: string ) {

    const response = await fetch( `${baseUrl}/company/product/${productId}`, {
        method: 'GET',
        headers: {
            'api-key': process.env.NEXT_PUBLIC_API_KEY as string,
        },
        next: {
            tags: ['product'],
            revalidate: 60 * 60
        }
    } )

    const data = await response.json() as ProductInterface
    return data




}