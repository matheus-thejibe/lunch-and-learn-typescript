


// export type Keys = `color` | `brand` | `size`

export type Metafields<TValues> = {
  [k: string]: TValues
  // [k in Keys]: 
  // [k in Keys]?: string
  // pattern: string
  // image: {
  //   url: string
  // }
}


export type Product = {
  title: string
  price: string
  metafields: Metafields<string | number | object>
}


export const product: Product = {
  title: 'Notebook',
  price: '$500',
  metafields: {
    color: 'grey',
    brand: 'Samsumg',
    size: 50,
    test: {}
  },
}





























//
// // ## Example 2
// //
//
//
//
// type CommerceProvider<TConfig> = {
//   productList: (config: TConfig, first: number, after: string) => Promise<Product[]>
//   product: (config: TConfig, handle: string) => Promise<Product>
// }
//
//
// type ShopifyConfig = {
//   storeDomain: string
//   storefrontAccessToken: string
// }
//
// type ShopifyCommerceProvider = CommerceProvider<ShopifyConfig>
//
// const shopifyCommerceProvider: ShopifyCommerceProvider = {
//   async productList(config, first, after) {
//     return []
//   },
//   async product(config, handle) {
//     return {
//       title: 'example',
//       price: '$5',
//       metafields: {},
//     }
//   },
// }
//
//
//
//
