import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Section() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-2xl font-semibold text-[#6C1313]">Sobre Nosotros</h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                El inicio de una nueva forma de aprendizaje.
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
                El 20 de octubre de 2002 se crea el Centro de Transferencia y Desarrollo de Tecnologías mediante resolución 1452-2002-CU-P en la áreas de Ingenierías en Sistemas, Electrónica e Industrial de la Universidad Técnica de Ambato, para proveer servicios a la comunidad mediante la realización de trabajos y proyectos específicos , asesorías, estudios, investigaciones, cursos de entrenamiento, seminarios y otras actividades de servicios a los sectores sociales y productivos en las áreas de Ingeniería en Sistemas computacionales e Informáticos, Ingeniería Electrónica y Comunicaciones e Ingeniería Industrial en Procesos de Automatización.
              </p>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="src/assets/fisei.jpg"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
