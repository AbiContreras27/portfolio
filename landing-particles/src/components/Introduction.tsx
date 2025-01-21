"use client"

import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

export default function Introduction() {
    return (
        
        <div className="z-20 w-full bg-darkbg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image 
                    src="/home-4.png" 
                    priority 
                    width="600" 
                    height="400" 
                    alt="Profile pic"
                    className="rounded-full"/>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-light text-center md:text-left md:text-4xl md-10">
                        Si puedes Pensarlo,
                        <TypeAnimation
                            sequence={[
                                "puedes crearlo", 1000,
                                "puedes programarlo", 1000,
                                "puedes implementarlo", 1000,
                                "puedes hacerlo realidad", 1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="font-bold text-secondary inline-block"
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">Como desarrolladora full stack me dedico a construir aplicaciones que conectan ideas con soluciones reales. Innovación, creatividad y tecnología al alcance de todos.</p>

                    <div className="flex item-center justify-center gap-3 md:justify-start md:gab-10">
                        <Link 
                            href="/portfolio" 
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit 
                            rounded-xl hover:shadow-xl hover:shadow-white/50"
                        > 
                        Ver Proyectos
                        </Link>
                        <Link 
                            href="https://www.linkedin.com/in/contrerasabi278/" 
                            target="_blank"
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit 
                            rounded-xl hover:shadow-xl hover:shadow-secondary"
                        > 
                        Contacta conmigo
                        </Link>

                    </div>

                </div>

            </div>
            
        </div>
    )
}