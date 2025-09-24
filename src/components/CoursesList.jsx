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

export default function CoursesList({filters}) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, mirror: true });
        AOS.refresh();
      }, []);

    // Función para verificar si un curso cumple con los filtros de duración
    const matchesDurationFilter = (courseHours) => {
        if (!filters.duration) return true;

        const hours = parseInt(courseHours, 10);

        switch(filters.duration) {
            case 'less10':
                return hours >= 0 && hours <= 9;
            case '10to19':
                return hours >= 10 && hours <= 19;
            case '20to59':
                return hours >= 20 && hours <= 59;
            case '60to99':
                return hours >= 60 && hours <= 99;
            case '100plus':
                return hours >= 100;
            default:
                return true;
        }
    };

    // Función para verificar si un curso cumple con todos los filtros
    const matchesFilters = (course) => {
        // Filtro de búsqueda (por título)
        if (filters.search && !course.title.toLowerCase().includes(filters.search.toLowerCase())) {
            return false;
        }

        // Filtro de categorías
        if (filters.category) {
            const courseCategory = categories.find(cat => cat.text === 'Electrónica')?.text || '';
            if (filters.category !== courseCategory) {
                return false;
            }
        }

        // Filtro de estado
        if (filters.status) {
            const isOpen = course.isOpen;
            if (filters.status === 'open' && !isOpen) return false;
            if (filters.status === 'closed' && isOpen) return false;
        }

        // Filtro de modalidad (si se implementa en el futuro)
        if (filters.modality) {
            // Por ahora, todos los cursos se consideran presenciales por defecto
            // Esto se puede expandir cuando se agregue el campo modality a los cursos
        }

        // Filtro de duración
        if (!matchesDurationFilter(course.hours)) {
            return false;
        }

        return true;
    };

    // Filtrar cursos
    const filteredCourses = courses.filter(matchesFilters);

    return (
        <div className="overflow-hidden bg-white mx-auto max-w-7xl md:px-6 lg:px-8 pt-8" data-aos="fade-down">
            <h2 className="text-2xl font-semibold text-[#6C1313] ml-6">Cursos</h2>
            {filteredCourses.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No se encontraron cursos que coincidan con los filtros seleccionados.</p>
                </div>
            ) : (
                <div className="mt-10 lg:m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch h-auto">
                    {filteredCourses.map((course, index) => (
                        <div data-aos="zoom-in" key={index} className="inline-block w-full px-6">
                            <CardCourse
                                title={course.title}
                                image={course.image}
                                isOpen={course.isOpen}
                                hours={course.hours}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
