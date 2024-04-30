'use server'


import productMappers from "@/app/(homepage)/product-mappers"
import { ProductInterface, ProductToDomain } from "@/types/products"
import { baseUrl } from "@/utils/base-url"
import { cache } from "react"



export const getProducts = cache( async () => {

    const response = await fetch( `${baseUrl}/company/product/list`, {
        method: 'GET',
        headers: {
            'api-key': process.env.NEXT_PUBLIC_BRONKS_BURGUER_API_KEY as string
        },
        next: {
            tags: ['products'],
            revalidate: 60 * 60 * 24 // 24 hours
        }
    } )

    const data = await response.json()

    const products = data.map( productMappers.toDomain ) as ProductToDomain[];
    return products

} )
