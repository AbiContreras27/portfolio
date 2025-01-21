"use client"
import ImgServices from "@/components/AvatarServices";
import ContainerPage from "@/components/Container";
import CuadrosImage from "@/components/CuadrosImage";
import SliderServices from "@/components/SliderServices";
import TransitionPage from "@/components/TransitionPage";


export default function ServicesPage() {
    return (
        <>
        
            <TransitionPage/>
            <CuadrosImage/>
            <ImgServices/>
            <ContainerPage>
            <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2 mt-20 relative z-10">
                <div className="max-w-[300px] md:mt-25">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1> <br />
                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web full stack especializados en la creación de sitios web, aplicaciones atractivas y funcionales, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                    <button 
                        onClick={() => window.open('https://www.linkedin.com/in/contrerasabi278', '_blank') }
                        className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
                            Contacta conmigo
                    </button>
                </div>

                <div>
                    <SliderServices />
                </div>
            </div>
            </ContainerPage>
        </>
    )
}