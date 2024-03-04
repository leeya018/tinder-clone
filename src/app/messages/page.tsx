"use client"
import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import BottomNav from "@/components/bottomNav"
import TopNav from "@/components/topNav"
import MatchesStore from "@/mobx/matchesStore"
import Image from "next/image"
import { useRouter } from "next/navigation"

const MessagesPage = observer(() => {
  const { matchesNoMsg, matchesWithMsg } = MatchesStore
  const router = useRouter()

  const handleMessageClick = (id: string) => {
    router.push(`/messages/${id}`)
  }
  return (
    <div className="max-h-screen max- w-screen relative ">
      <TopNav />
      <div className=" my-10 relative">
        <div className=" font-bold ml-2  mb-2 ">New matches</div>
        {/* matches cards */}
        <ul className="flex items-center gap-2">
          {matchesNoMsg.slice(0, 4).map((match, key) => (
            <li className="flex flex-col items-center" key={key}>
              <Image
                alt="profile image"
                width={80}
                height={150}
                className="object-cover rounded-lg "
                src={match.person.photos[0].url}
              />
              <div>{match.person.name}</div>
            </li>
          ))}
        </ul>
        <div className=" font-bold ml-2  mt-2 mb-2 ">Messages</div>
        <ul>
          {matchesWithMsg.map((match, key) => (
            <li
              key={key}
              className="border-y-2 py-2 "
              onClick={() => handleMessageClick(match.id)}
            >
              <div className="flex items-center ">
                <Image
                  alt="profile image"
                  width={50}
                  height={50}
                  className="object-cover rounded-full mr-2 ml-3"
                  src={match.person.photos[0].url}
                />
                <div className="flex flex-col gap-2">
                  <div> {match.person.name}</div>
                  <div className=" truncate"> {match.messages[0].message}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <BottomNav />
    </div>
  )
})

export default MessagesPage
