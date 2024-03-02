"use client"
import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import BottomNav from "@/components/bottomNav"

const ProfilePage = observer(() => {
  return (
    <div className="h-screen max- w-screen relative">
      PROFILE
      <BottomNav />
    </div>
  )
})

export default ProfilePage
