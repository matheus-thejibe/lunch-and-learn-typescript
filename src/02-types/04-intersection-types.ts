

export type Metafields = {
  metafields: {
    key: string
    value: any,
  }[]
}

export type Product = {
  title: string
  price: string
}

export type ProductWithMetafields = Product & Metafields


export const product: ProductWithMetafields = {
  title: 'Chocolate Box',
  price: `$5`,
  metafields: [
    {
      key: `brand`,
      value: `Lindt`
    }
  ]
}


// ## Some intersections are not possible:

export type Promotion = {
  code: string
  price: number // Promotion.price is a number, while Product.price is a string. This is a conflict.
  metafields: {
    timestamp: number
  }[]
}

export type ProductWithPromotion = Omit<Product, 'price'> & Metafields & Promotion

export const promotionProduct: ProductWithPromotion = {
  price: 5, // I will exaplin what the `never` type means in the next tutorial
  title: 'Chocolate Box',
  code: 'PROMOCODE',
  metafields: [
    {
      key: `brand`,
      value: `Lindt`,
      timestamp: 10000,
    }
  ]
}



