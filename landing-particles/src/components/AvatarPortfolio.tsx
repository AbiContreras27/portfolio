"use client"
import Image from "next/image"
import MotionTransition from "./TransitionComponent"

export default function AvatarPortfolio() {
    return (
        <MotionTransition 
            position='bottom' 
            className="bottom-0 left-0 m-10 hidden md:inline-block md:absolute ">
            <Image 
                src="/avatar-works.png" 
                width="250" 
                height="250" 
                className="w-full h-full " 
                alt="Particles " />
        </MotionTransition>
    )
}