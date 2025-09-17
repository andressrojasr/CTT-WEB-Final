import { CpuChipIcon, BuildingLibraryIcon, CommandLineIcon, ComputerDesktopIcon  } from "@heroicons/react/24/outline"
import CardCourse from "./CardCourse"
import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'

const categories = [
    { id: 1, text: 'TICS', icon: ComputerDesktopIcon,   status: 'true' },
    { id: 2, text: 'Educativo', icon: BuildingLibraryIcon, status: 'false' },
    { id: 3, text: 'Software', icon: CommandLineIcon, status: 'false' },
    { id: 4, text: 'Electrónica', icon: CpuChipIcon, status: 'false' },
]

const courses = [
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: true, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y dasdasdasdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddd", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
]

export default function CourseSection() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, mirror: true });
        AOS.refresh();
      }, []);
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" data-aos="fade-down">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-[#6C1313]">Cursos y Categorías</h2>
                <div className="flex justify-center">
                    <div className="mt-6 flex flex-around gap-x-10 gap-y-4">
                        {categories.map((category) => (
                            <button 
                            key={category.id}
                            style={{ backgroundColor: category.status === 'true' ? '#6C1313' : '#F5F5F5', color: category.status === 'true' ? 'white' : 'black' }}
                            className="flex flex-col items-center justify-center text-center"
                            data-aos="zoom-in">
                            <category.icon className="h-20 w-20 mb-1" />
                            <span>{category.text}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch h-auto" data-aos="zoom-in">
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
