"use client"
import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import BottomNav from "@/components/bottomNav"
import recsStore from "@/mobx/recsStore"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { NavNames } from "../../util"

const HomePage = observer(() => {
  const router = useRouter()

  router.push(NavNames.recs)
  return <div className="h-screen max- w-screen relative">wait...</div>
})

export default HomePage
