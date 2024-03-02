"use client"
import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import BottomNav from "@/components/bottomNav"

const LikesPage = observer(() => {
  return (
    <div className="h-screen max- w-screen relative">
      LIKES
      <BottomNav />
    </div>
  )
})

export default LikesPage
