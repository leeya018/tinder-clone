"use client"
import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import recsStore from "@/mobx/recsStore"
import BottomNav from "@/components/bottomNav"
import Image from "next/image"
import TopNav from "@/components/topNav"
import { FaCircleInfo } from "react-icons/fa6"

const RecsPage = observer(() => {
  const recs = recsStore.recs
  const { name, age, images } = recs[0]
  return (
    <div className="h-screen max- w-screen ">
      {/* rec page */}
      <TopNav />

      <div
        className="border-2 border-black h-full flex 
      items-center relative rounded-lg overflow-hidden"
      >
        <div className="flex justify-center items-center absolute top-20">
          <div>__</div>
          <div>__</div>
          <div>__</div>
          <div>__</div>
          <div>__</div>
        </div>
        <Image
          alt="profile image"
          width={32}
          height={200}
          className="absolute h-full w-full object-cover "
          src={images[0]}
        />
        <div
          className="flex items-center 
           w-full mx-4 text-xl absolute bottom-20 text-white gap-2 
"
        >
          <div className="text-xl font-bold">{name}</div>
          <div className="text-lg font-semibold">{age}</div>
          <div className="ml-auto">
            <FaCircleInfo size={25} />
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
})

export default RecsPage
