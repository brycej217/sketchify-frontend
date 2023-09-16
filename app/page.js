"use client"

import React, { useRef, useEffect } from "react"
import Button from "./components/CreateButton"
import Signature from "./components/Signature"

export default function Home() {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    let scrollLeft = 0
    const scrollSpeed = 1

    const scrollGallery = () => {
      scrollLeft += scrollSpeed
      if (
        scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollLeft = 0
      }
      scrollContainer.scrollLeft = scrollLeft
    }

    const intervalId = setInterval(scrollGallery, 40)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <main>
    <div className="container-fluid center-vertically">
      <h1 style={{ fontSize: "6vw" }}>Sketchify</h1>
      <p style={{ fontSize: "1.5vw" }}>What does your Spotify look like?</p>
      <Button />
      <div
        className="scroll-container"
        ref={scrollContainerRef}
        style={{ width: "100vw", overflowX: "hidden" }}
      >
        <div className="gallery mt-5">
          <img src="/img0.png" />
          <img src="/img1.png" />
          <img src="/img2.png" />
          <img src="/img3.png" />
          <img src="/img4.png" />
          <img src="/img5.png" />
          <img src="/img6.png" />
          <img src="/img7.png" />
          <img src="/img8.png" />
        </div>
      </div>
      <div className="fixed-bottom text-center">
        <p style={{ margin: "0" }}>Your Spotify listening imagined by AI</p>
        <Signature />
      </div>
    </div>
    </main>
  )
}