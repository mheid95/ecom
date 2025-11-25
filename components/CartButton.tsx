'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '@/context/CartContext'

export default function CartButton() {
  const { totalItems } = useCart()

  return (
    <Link href="/warenkorb" className="relative">
      <button className="relative p-2 text-gray-700 hover:text-accent-600 transition-colors">
        <FaShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </Link>
  )
}
