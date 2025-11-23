'use client'

import { useState } from 'react'
import { FaShoppingCart, FaCheck } from 'react-icons/fa'
import { useCart } from '@/context/CartContext'
import { CartItem } from '@/context/CartContext'

interface AddToCartButtonProps {
  product: {
    id: number
    name: string
    category: string
    price: number
  }
  className?: string
}

export default function AddToCartButton({ product, className = '' }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: quantity
    }

    addItem(cartItem)
    setIsAdded(true)

    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="text-sm font-semibold text-gray-700">Anzahl:</label>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            -
          </button>
          <span className="px-6 py-2 border-x border-gray-300 font-semibold">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className={`w-full btn-primary inline-flex items-center justify-center ${className} ${
          isAdded ? 'bg-green-600 hover:bg-green-700' : ''
        }`}
      >
        {isAdded ? (
          <>
            <FaCheck className="mr-2" />
            In den Warenkorb gelegt
          </>
        ) : (
          <>
            <FaShoppingCart className="mr-2" />
            In den Warenkorb
          </>
        )}
      </button>
    </div>
  )
}
