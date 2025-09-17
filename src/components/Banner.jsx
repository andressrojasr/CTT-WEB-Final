import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'

export default function Banner () 
{
    useEffect(() => {
      AOS.init({ duration: 1000, once: false, mirror: true });
      AOS.refresh();
    }, []);
  return (
    <div className="bg-white mt-15" data-aos="fade-down">
        <div className="relative isolate overflow-hidden bg-[#6C1313] px-6 lg:py-8 sm:py-32 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text-left">
            <h2 className="text-2xl font-semibold text-white">Sobre Nosotros</h2>
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              El inicio de una nueva forma de aprendizaje.
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
              El 20 de octubre de 2002 se crea el Centro de Transferencia y Desarrollo de Tecnologías mediante resolución 1452-2002-CU-P en la áreas de Ingenierías en Sistemas, Electrónica e Industrial de la Universidad Técnica de Ambato, para proveer servicios a la comunidad mediante la realización de trabajos y proyectos específicos , asesorías, estudios, investigaciones, cursos de entrenamiento, seminarios y otras actividades de servicios a los sectores sociales y productivos en las áreas de Ingeniería en Sistemas computacionales e Informáticos, Ingeniería Electrónica y Comunicaciones e Ingeniería Industrial en Procesos de Automatización.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <button>
                Más información...
              </button>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-32">
            <img
              alt="App screenshot"
              src="src/assets/fisei.jpg"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              data-aos="fade-up"
            />
          </div>
        </div>
    </div>
  )
}
