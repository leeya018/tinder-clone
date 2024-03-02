"use client"
import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import recsStore from "@/mobx/recsStore"
import BottomNav from "@/components/bottomNav"
import Image from "next/image"

const RecsPage = observer(() => {
  const recs = recsStore.recs
  const { name, age, images } = recs[0]
  return (
    <div className="h-screen max- w-screen ">
      {/* rec page */}
      <div className="w-full h-full">
        <Image
          alt="profile image"
          width={32}
          height={200}
          className="absolute top-0 left-0 right-0 bottom-0 "
          src={images[0]}
        />
        <div
          className="flex items-center text-black  relative w-full mx-4 text-xl 
         z-10 bottom-0 left-0 right-0 "
        >
          <div className="text-xl font-bold">{"name"}</div>
          <div className="text-lg font-semibold">{age}</div>
          <div className="ml-auto">info</div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
})

export default RecsPage
