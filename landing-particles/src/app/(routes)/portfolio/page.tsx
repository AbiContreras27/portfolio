"use client"

import { dataPortfolio } from "../../../../data";
import ContainerPage from "@/components/Container";
import TransitionPage from "@/components/TransitionPage";
import CuadrosImage from "@/components/CuadrosImage";
import PortfolioBox from "@/components/PortfolioBox";
import AvatarPortfolio from "@/components/AvatarPortfolio";




export default function PortfolioPage() {

    return (
        <ContainerPage>
            <TransitionPage />
            <AvatarPortfolio />
            <CuadrosImage />
            <div className="flex flex-col justify-center h-full">
                <h1 
                    className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                        Mis últimos {" "}
                        <span 
                            className="font-bold text-secondary">
                            trabajos realizados
                        </span>
                </h1>

                <div 
                className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm-grid-cols-1 md:grid-cols-3">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>

    )
}