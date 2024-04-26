'use server'

import { ProductInterface } from "@/types/products"
import { baseUrl } from "@/utils/base-url"


export async function getProducts() {

    const response = await fetch( `${baseUrl}/company/product/list`, {
        method: 'GET',
        headers: {
            'api-key': process.env.NEXT_PUBLIC_BRONKS_BURGUER_API_KEY as string
        },
        next: {
            tags: ['products'],
            revalidate: 60
        }
    } )

    const data = await response.json() as ProductInterface[]
    return data




}