import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, GithubIcon } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/@AbigailContreras-i9t",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/contrerasabi278/",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "https://x.com/Abigail70414846",
    },
    {
        id: 4,
        logo: <GithubIcon size={30} strokeWidth={1} />,
        src: "https://github.com/AbiContreras27",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Estudiante full stack developer",
        subtitle: "Henry",
        description: "Como estudiante full stack developer en modalidad full time, me permití lograr el objetivo personal de aprender desarrollo de sistemas web con tecnologías actuales como JavaScript, TypeScript, React, NestJS, base de datos: MongoDB (NoSQL), PostgreSQL (relacional), algunas herramientas como: Git, Jira, Confluence, Slack y prácticas dentro del marco de metodología ágil como Scrum. donde encontré una nueva pasión por el desarrollo de sistemas web.",
        date: "Ene. 2025 ",
    },
    {
        id: 2,
        title: "Ingeniero de infraestructura",
        subtitle: "GoBravo Colombia",
        description: "Como ingeniero de infraestructura, logré tener control en un 100% de los recursos tecnológicos, gestión con proveedores, administración y soporte técnico de la sucursal de Medellín con un total de 135 colaboradores, mejorando en un 90% los tiempos de respuestas al usuario y satisfacción de servicio. Así mismo, se ejercen funciones de gestión de requerimientos e incidencias reportadas de distintos corporativos y sucursales (México, Brasil, España, Italia, Portugal y Colombia). Soporte plataformas (Base de datos, consultas y ajustes por insomnia y Dbeaver), Soporte Telefonía, entre otros. ",
        date: "Nov 2023 ",
    },
    {
        id: 3,
        title: "Técnico de Mesa de ayuda",
        subtitle: "TIPI - Wi Calling - Prinza",
        description: "Afiancé mis soft skills de liderazgo, organización y planificación, coordinación de recurso técnico para visitar clientes, logré una mejora en la calidad del servicio en un 80%, al igual que estabilizar proyectos adquiridos por clientes en un 90% y optimizar el proceso de documentación en un 85%.",
        date: "Jul. 2021",
    },
    {
        id: 4,
        title: "Técnico de implementaciones",
        subtitle: "Adecco Colombia",
        description: "En esta oportunidad aprendí a valorar mi profesión, aprendí a tener resiliencia, perseverancia y confiar de nuevo en mis capacidades técnicas para iniciar en un nuevo país con mis conocimientos en tecnologías de la información y demostrar el profesionalismo que me caracteriza, mi organización y cumplimiento de metas",
        date: "Feb. 2019",
    },
    {
        id: 5,
        title: "Analista del centro de servicios",
        subtitle: "Daycohost",
        description: "Me permitió manejar un marco de buenas prácticas de ITIL V4 el cual aprendí a tener una buena organización, manejo del tiempo, gestión de recursos, trabajo en equipo y monitoreo constante de plataformas que operaban en la organizacion.",
        date: "Oct. 2017",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 6,
        text: "meses de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 4,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
];

export const serviceData = [
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    }
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Red Social",
        image: "/image-1.png",
        urlGithub: "https://github.com/SnappyFriends",
        urlDemo: "https://snappyfriends.vercel.app/",
    },
    {
        id: 2,
        title: "Ecommerce Backend",
        image: "/image-2.png",
        urlGithub: "https://github.com/AbiContreras27/Backend-Ecommerce-API",
        urlDemo: "https://backend-ecommerce-api-tedh.onrender.com/documental#/",
    },
    {
        id: 3,
        title: "Gestión de Turnos",
        image: "/image-3.png",
        urlGithub: "https://github.com/AbiContreras27/gestionTurno",
        urlDemo: "https://gestion-turno.vercel.app",
    }
];
