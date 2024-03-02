"use client"
import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import BottomNav from "@/components/bottomNav"

const MessagesPage = observer(() => {
  return (
    <div className="h-screen max- w-screen relative">
      MESSAGES
      <BottomNav />
    </div>
  )
})

export default MessagesPage
