"use client"
import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { data as messages } from "@/data/messages_list"
import { data as matches } from "@/data/matches_w_msg"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { SlOptionsVertical } from "react-icons/sl"
import { FaHeart } from "react-icons/fa"

import Image from "next/image"

const myid = "5980deb74a75f5b45fb118ee"
const MessageItemPage = observer(() => {
  const match = matches[0]
  return (
    <div className="h-screen max-w-screen relative ">
      {/* top */}
      <div className="flex justify-between items-center py-2 mx-2">
        <div>
          <MdKeyboardArrowLeft size={25} color="red" />
        </div>
        <div className="flex items-center  gap-2">
          <Image
            alt="profile image"
            width={30}
            height={30}
            className="object-cover rounded-full "
            src={match.person.photos[0].url}
          />
          <div>{match.person.name}</div>
        </div>
        <div>
          <SlOptionsVertical size={25} />
        </div>
      </div>
      {/* list of message */}
      <ul>
        {messages.map((message, key) => (
          <li key={key} className="flex flex-col gap-2">
            {message.from === myid && (
              <div className="flex justify-end">
                <div className="bg-blue-500 p-2 rounded-lg w-1/2">
                  {message.message}
                </div>
              </div>
            )}
            {message.from !== myid && (
              <div className="flex gap-2">
                <Image
                  alt="profile image"
                  width={80}
                  height={150}
                  className="object-cover rounded-full "
                  src={match.person.photos[0].url}
                />
                <div className="bg-gray-500 p-2 rounded-lg w-1/2">
                  {message.message}
                </div>
                <div className="ml-auto flex items-center">
                  <FaHeart size={25} color="red" />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      {/* bottom  message send */}
      <div className="flex items-center w-full  bg-white h-10  border-y-2 fixed mx-2 bottom-0">
        <input
          type="text"
          className="flex-2 border-none focus:border-none border-0 ring-0"
          placeholder="Type a message"
        />
        <button className="flex-1">send</button>
      </div>
    </div>
  )
})

export default MessageItemPage
