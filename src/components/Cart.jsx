import React from 'react';
import { X } from 'lucide-react';

export default function Cart({ cartItems, removeFromCart, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-gray-600">{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700 transition-colors"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
