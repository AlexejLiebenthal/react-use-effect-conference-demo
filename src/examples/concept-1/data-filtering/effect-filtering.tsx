import { useState, useEffect } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";
import { Toggle } from "../../../ui/toggle";

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 699, inStock: true },
  { id: 3, name: "Headphones", price: 199, inStock: false },
  { id: 4, name: "Keyboard", price: 99, inStock: true },
];

export const EffectFiltering = () => {
  const [showOnlyInStock, setShowOnlyInStock] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    if (showOnlyInStock) {
      setFilteredProducts(products.filter((p) => p.inStock));
    } else {
      setFilteredProducts(products);
    }
  }, [showOnlyInStock]);

  return (
    <RenderCountCard>
      <Toggle
        label="Show only in-stock items"
        checked={showOnlyInStock}
        onChange={() => {
          setShowOnlyInStock((prev) => !prev);
        }}
      />

      <div className="card bg-base-100 w-full shadow">
        <div className="card-body overflow-x-auto">
          <table className="table-zebra table table-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>
                    <span
                      className={`badge ${product.inStock ? "badge-success" : "badge-error"}`}
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </RenderCountCard>
  );
};
