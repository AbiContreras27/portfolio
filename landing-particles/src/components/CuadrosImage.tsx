"use client"

import Image from 'next/image'

export default function CuadrosImage() {
    return (
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/cuadros.png" width="400" height="400" className="w-full h-full " alt="Particles " />
        </div>
    )
}