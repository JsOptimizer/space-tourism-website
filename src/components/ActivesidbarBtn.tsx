"use client"
import React from 'react'
import Image from 'next/image'
type TActiveSidebarBtn={
    imgPath: string,
    setActiveSidebar:any
}
const ActivesidbarBtn = ({imgPath,setActiveSidebar}:TActiveSidebarBtn) => {
  return (
    <button
    className="sm:hidden"
    onClick={() => setActiveSidebar((prev: boolean) => !prev)}
  >
    <Image
      alt="sidebar"
      width={0}
      height={0}
      src={imgPath}
      className="h-5 w-5"
    />
  </button>
  )
}

export default ActivesidbarBtn