import React from "react"
import { FaFire } from "react-icons/fa"

export default function TopNav() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 bg-white ">
      <div className="flex items-center gap-2 p-2">
        <div>
          <FaFire size={25} color="red" />
        </div>
        <div className="text-2xl font-bold text-red-500">Tinder</div>
      </div>
    </div>
  )
}
