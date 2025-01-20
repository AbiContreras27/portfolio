"use client"
import Image from "next/image"
import MotionTransition from "./TransitionComponent"

export default function Foto() {
    return (
        <MotionTransition 
            position="bottom" 
            className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image 
                src="/home-4.png" 
                width="200" 
                height="200" 
                className="w-full h-full rounded-full " 
                alt="Particles " />
        </MotionTransition>
    )
}