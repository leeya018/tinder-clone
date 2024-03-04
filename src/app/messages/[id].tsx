import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"

import { usePathname } from "next/navigation"

const MessageListPage = observer(({}) => {
  const pathname = usePathname()
  const id = pathname.split("/").pop()

  return <h1>Post ID: {id}</h1>
})

export default MessageListPage
