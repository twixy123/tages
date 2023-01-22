export interface Price {
  old_price: number | null,
  current_price: number
}

export interface Image {
  url: string
}

interface Product {
  id: string | number,
  name: string,
  code: string | null,
  price: Price,
  image: Image,
  material: number
}

export default Product