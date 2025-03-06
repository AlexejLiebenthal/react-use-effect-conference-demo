export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const generateProducts = (): Product[] => {
  return Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 200) + 1,
    inStock: Math.random() > 0.3,
  }));
};

export const products = generateProducts();

export const expensiveFilterProducts = (
  products: Product[],
  minPrice: number,
  maxPrice: number,
  inStockOnly: boolean,
): Product[] => {
  // let i = 0;
  // while (i < 1_000_000_000) {
  //   i++;
  // }
  return products
    .filter((p) => p.price >= minPrice && p.price <= maxPrice)
    .filter((p) => (inStockOnly ? p.inStock : true))
    .sort((a, b) => a.price - b.price)
    .slice(0, 5);
};
