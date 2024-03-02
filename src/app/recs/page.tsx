"use client"
import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import recsStore from "@/mobx/recsStore"
import BottomNav from "@/components/bottomNav"

const RecsPage = observer(() => {
  const recs = recsStore.recs
  const { name, age, images } = recs[0]
  return (
    <div className="h-screen max- w-screen relative">
      {/* rec page */}
      <div className="absolute ">
        {/* <Image
            alt="profile image"
            width={32}
            height={200}
            className="w-screen h-screen bg-transparent"
            src={images[0]}
          /> */}
      </div>
      <div className="flex items-center text-white z-10 ">
        <div className="text-xl font-bold">{name}</div>
        <div className="text-lg font-semibold">{age}</div>
        <div className="ml-auto">info</div>
      </div>

      <BottomNav />
    </div>
  )
})

export default RecsPage
