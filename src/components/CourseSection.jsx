import { Button } from "@headlessui/react"
import { CpuChipIcon, BuildingLibraryIcon, CommandLineIcon, ComputerDesktopIcon  } from "@heroicons/react/24/outline"
import CardCourse from "./CardCourse"

const categories = [
    { id: 1, text: 'Tecnología e innovación', icon: ComputerDesktopIcon,   status: 'true' },
    { id: 2, text: 'Educativo', icon: BuildingLibraryIcon, status: 'false' },
    { id: 3, text: 'Software', icon: CommandLineIcon, status: 'false' },
    { id: 4, text: 'Electrónica', icon: CpuChipIcon, status: 'false' },
]

const courses = [
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "src/assets/logoCTT.webp", isOpen: true, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y dasdasdasdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddd", image: "src/assets/logoCTT.webp", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "src/assets/logoCTT.webp", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "src/assets/logoCTT.webp", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "src/assets/logoCTT.webp", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "src/assets/logoCTT.webp", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "src/assets/logoCTT.webp", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "src/assets/logoCTT.webp", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "src/assets/logoCTT.webp", isOpen: false, hours: "32"},
]

export default function CourseSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-[#6C1313]">Cursos y Categorías</h2>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    {categories.map((category) => (
                        <button key={category.id}>
                            <category.icon className="inline h-6 mr-2"/>
                            {category.text}
                        </button>

                    ))}
                </div>
                <div className="m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch h-auto">
                    {courses.map((course, index) => (
                        <CardCourse
                        key={index}
                        title={course.title}
                        image={course.image}
                        isOpen={course.isOpen}
                        hours={course.hours}
                        />
                    ))}
                </div>
                <div className="m-10 mt-6 flex flex-wrap gap-x-4 gap-y-2">
                        <button className="rojo">
                            Ver más cursos...
                        </button>
                </div>
      </div>
    </div>
  )
}
