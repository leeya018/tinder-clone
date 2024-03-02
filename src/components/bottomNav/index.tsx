import React from "react"
import Image from "next/image"
import { CgShapeRhombus } from "react-icons/cg"
import { AiFillMessage } from "react-icons/ai"
import { FaUser } from "react-icons/fa"

import { FaFire } from "react-icons/fa"
import navStore from "@/mobx/navStore"
import { NavNames } from "../../../util"
import { useRouter } from "next/navigation"

export default function BottomNav() {
  const router = useRouter()

  const handleClick = (nameName: string) => {
    navStore.setNav(nameName)
    router.push(NavNames[nameName])
  }
  return (
    <div className="w-screen  fixed bottom-0  bg-white">
      <ul className=" flex items-center justify-around z-10 py-6">
        <div onClick={() => handleClick("recs")}>
          <FaFire size={25} color={navStore.nav === "recs" ? "red" : "gray"} />
        </div>
        <div onClick={() => handleClick("likes")}>
          <CgShapeRhombus
            size={25}
            color={navStore.nav === "likes" ? "red" : "gray"}
          />
        </div>
        <div onClick={() => handleClick("messages")}>
          <AiFillMessage
            size={25}
            color={navStore.nav === "messages" ? "red" : "gray"}
          />
        </div>
        <div onClick={() => handleClick("user")}>
          <FaUser size={25} color={navStore.nav === "user" ? "red" : "gray"} />
        </div>
      </ul>
    </div>
  )
}
