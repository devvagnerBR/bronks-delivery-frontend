import { momentJs } from "@/libs/moment-js";
import { ProductInterface } from "@/types/products";


class ProductMappers {

    toDomain( product: ProductInterface ) {

        return {
            id: product.id,
            name: product.name,
            price: {
                p: { price: product.priceP, size: 'p' },
                m: { price: product.priceM, size: 'm' },
                g: { price: product.priceG, size: 'g' }
            },
            description: product.description,
            category: product.category,
            image: product.image,
            isAvailable: product.isAvailable,
            createdAt: momentJs( product.createdAt ).format( 'DD/MM/YYYY HH:mm' ),
            slug: product.slug
        }
    }


    toPersistance() { }

}

export default new ProductMappers();
