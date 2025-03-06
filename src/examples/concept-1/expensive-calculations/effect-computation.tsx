import { useState, useEffect } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";
import { expensiveFilterProducts, Product, products } from "./shared";
import { Input } from "../../../ui/input";
import { Toggle } from "../../../ui/toggle";

export const EffectComputation = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const [inStockOnly, setInStockOnly] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const result = expensiveFilterProducts(
      products,
      minPrice,
      maxPrice,
      inStockOnly,
    );
    setFilteredProducts(result);
  }, [inStockOnly, maxPrice, minPrice]);

  return (
    <RenderCountCard>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Min Price"
          type="number"
          min={0}
          max={maxPrice}
          value={minPrice}
          onChange={(e) => {
            setMinPrice(e.target.valueAsNumber);
          }}
        />
        <Input
          label="Max Price"
          type="number"
          min={minPrice}
          max={200}
          value={maxPrice}
          onChange={(e) => {
            setMaxPrice(e.target.valueAsNumber);
          }}
        />
      </div>

      <Toggle
        label="Show only in-stock items"
        checked={inStockOnly}
        onChange={() => {
          setInStockOnly((prev) => !prev);
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
