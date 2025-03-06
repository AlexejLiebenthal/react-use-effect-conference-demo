import { useState } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartSummary {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

export const SingleStateUpdate = () => {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: "T-Shirt", price: 15.99, quantity: 2 },
    { id: 2, name: "Jeans", price: 29.99, quantity: 1 },
  ]);

  const calculateSummary = (cartItems: CartItem[]): CartSummary => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const taxRate = 0.19;
    const tax = Number((subtotal * taxRate).toFixed(2));
    const shipping = subtotal > 99 ? 0 : 5.99;
    const total = Number((subtotal + tax + shipping).toFixed(2));

    return { subtotal, tax, shipping, total };
  };

  const { subtotal, tax, shipping, total } = calculateSummary(items);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  return (
    <RenderCountCard>
      <div className="card bg-base-100 w-full shadow">
        <div className="card-body overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button
                        className="btn btn-xs"
                        onClick={() => {
                          updateQuantity(item.id, item.quantity - 1);
                        }}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-xs"
                        onClick={() => {
                          updateQuantity(item.id, item.quantity + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="divider">Order Summary</div>
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (19%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="divider my-1"></div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          {subtotal > 99 && (
            <div className="text-success mt-2 text-sm">
              Free shipping applied!
            </div>
          )}
        </div>
      </div>
    </RenderCountCard>
  );
};
