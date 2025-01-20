import Foto from "@/components/AvatarFoto";
import ContainerPage from "@/components/Container";
import CounterServices from "@/components/CounterServices";
import TimeLine from "@/components/TimeLine";
import TransitionPage from "@/components/TransitionPage";


export default function PageAboutMe() {
    return (
        <>
            <TransitionPage/>
            <ContainerPage>
                <Foto/>
                <h1 className="text-2xl leading-ligth text-center md:text-left md: mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-secondary">Trayectoria Profesional</span>
                </h1>
                <CounterServices/>
                <TimeLine/>
            </ContainerPage>
        </>
    )
    }
