"use client"
import Image from "next/image"
import MotionTransition from "./TransitionComponent"

export default function ImgServices() {
    return (
        <MotionTransition 
        position='right' 
        className="bottom-0 left-0 ml-5 hidden md:inline-block md:absolute">
            <Image 
            src="/services.png" 
            width="200"
            height="200"
            className="w-[180px] h-full " 
            alt="Particles " />
        </MotionTransition>
    )
}