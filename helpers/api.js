// Not sure about API architecture, so just using these dump functions.

export async function getProducts () {
  const productsModule = await import('../products.json')
  const products = productsModule.default
  const uniqueProductsMap = new Map(products.map(product => [product.entity_id, product]))
  return [...uniqueProductsMap.values()]
}

export async function getCategories () {
  const products = await getProducts()
  const categories = products.map(product => product.category.toLowerCase())
  const uniqueCategories = new Set(categories)
  return [...uniqueCategories]
}
