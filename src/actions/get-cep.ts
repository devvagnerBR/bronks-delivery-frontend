'use server'


export async function getCEP( cep: string ) {
    const response = await fetch( `https://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    } );

    return await response.json();

}