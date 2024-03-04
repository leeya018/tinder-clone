"use client"
import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import recsStore from "@/mobx/recsStore"
import BottomNav from "@/components/bottomNav"
import Image from "next/image"
import TopNav from "@/components/topNav"
import { FaCircleInfo } from "react-icons/fa6"
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md"
import { toJS } from "mobx"

const RecsPage = observer(() => {
  const [imgInd, setImgInd] = useState(0)
  const recs = recsStore.recs
  const { name, age, images } = recs[0]

  console.log({ images: toJS(images) })

  const increaseImgInd = () => {
    setImgInd((prev) => {
      if (prev < images.length - 1) return prev + 1
      return prev
    })
  }

  const decreaseImgInd = () => {
    setImgInd((prev) => {
      if (prev > 0) return prev - 1
      return prev
    })
  }
  return (
    <div className="min-h-screen max-w-screen flex flex-col  ">
      {/* rec page */}
      <TopNav />
      <div className=" border-2 flex-grow mt-12 mb-12 relative text-white ">
        {/* lines on pic */}
        <div className="absolute top-0 inset-x-0 z-10 h-5">
          <ul className=" flex items-center gap-2 justify-around h-full mx-2">
            {images.map((_, key) => (
              <li
                className={`h-2 w-1/${
                  images.length
                } flex-1 bg-slate-500 z-10 rounded-md box-content  ${
                  key === imgInd && "border-2"
                }`}
                key={key}
              ></li>
            ))}
          </ul>
        </div>
        <div className="absolute inset-0">
          {imgInd !== 0 && (
            <div
              className="absolute  w-1/2 z-10 inset-y-0 left-0"
              onClick={decreaseImgInd}
            >
              <div className="absolute top-1/2 -translate-y-1/2">
                <MdOutlineKeyboardArrowLeft size={50} />
              </div>
            </div>
          )}

          <img src={images[imgInd]} alt="women" className="h-full rounded-lg" />
          {/* <Image
            alt="women"
            src={images[imgInd]}
            className="h-full w-full rounded-lg"
            width={100}
            height={100}
          /> */}
          {imgInd !== images.length - 1 && (
            <div
              className="absolute  w-1/2 z-10 inset-y-0 left-1/2 "
              onClick={increaseImgInd}
            >
              <div className="absolute top-1/2 -translate-y-1/2 right-0">
                <MdOutlineKeyboardArrowRight size={50} />
              </div>
            </div>
          )}
          <div className="absolute bottom-8 inset-x-4 ">
            <div className="text-white flex items-center gap-2">
              <div className="text-xl font-bold">{name}</div>
              <div className="text-lg font-semibold">{age}</div>
              <div className="ml-auto">
                <FaCircleInfo size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
})

export default RecsPage
