import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "./actions/cookies/get-cookie";

export async function middleware( req: NextRequest ) {

    const cartIsEmpty = await getCookie( 'cartIsEmpty' ) ?? 'true'

    if ( cartIsEmpty === 'true' && req.nextUrl.pathname.startsWith( '/checkout' ) ) {
        return NextResponse.redirect( new URL( '/', req.url ) )
    }
    if ( cartIsEmpty === 'true' && req.nextUrl.pathname.startsWith( '/checkout/confirmacao' ) ) {
        return NextResponse.redirect( new URL( '/', req.url ) )
    }
}


export const config = {
    matcher: ['/checkout', '/checkout/confirmacao']
}