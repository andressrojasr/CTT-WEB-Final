import { CpuChipIcon, BuildingLibraryIcon, CommandLineIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline"
import CardCourse from "./CardCourse"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AOS from "aos"
import 'aos/dist/aos.css'
import { getCourses, getCoursesByCategory } from "../api/api"


const categories = [
    { id: 1, text: 'TICS', icon: ComputerDesktopIcon, status: 'true' },
    { id: 2, text: 'Educativo', icon: BuildingLibraryIcon, status: 'false' },
    { id: 3, text: 'Software', icon: CommandLineIcon, status: 'false' },
    { id: 4, text: 'Electrónica', icon: CpuChipIcon, status: 'false' },
]

export default function CourseSection({ filters }) {
    const navigate = useNavigate();
    
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeCategory, setActiveCategory] = useState('TICS');

    const loadCourses = async (category = null) => {
        try {
            setLoading(true);
            setError(null);

            const coursesData = category
                ? await getCoursesByCategory(category)
                : await getCourses();

            // Transformar los datos de la API para que coincidan con la estructura esperada por CardCourse
            const transformedCourses = coursesData.map(course => ({
                title: course.title,
                image: course.course_image,
                isOpen: course.status === 'Activo',
                hours: course.requirements?.hours?.total?.toString() || '0',
                description: course.description,
                id: course.id
            }));

            setCourses(transformedCourses);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryChange = async (category) => {
        setActiveCategory(category);
        await loadCourses(category);
    };

    const handleViewMoreCourses = () => {
        navigate('/courses');
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: false, mirror: true });
        AOS.refresh();
        loadCourses();
    }, []);
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32" data-aos="fade-down">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-[#6C1313] ml-6">Cursos y Categorías</h2>
                <div className="flex justify-center">
                    <div className="mt-6 flex flex-around gap-x-10 px-6 gap-y-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                style={{
                                    backgroundColor: activeCategory === category.text ? '#6C1313' : '#F5F5F5',
                                    color: activeCategory === category.text ? 'white' : 'black'
                                }}
                                className="flex flex-col items-center justify-center text-center transition-all duration-200 hover:opacity-80"
                                onClick={() => handleCategoryChange(category.text)}
                                data-aos="zoom-in">
                                <category.icon className="h-20 w-20 mb-1" />
                                <span>{category.text}</span>
                            </button>
                        ))}
                    </div>
                </div>
                {loading && (
                    <div className="flex justify-center items-center mt-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6C1313]"></div>
                        <span className="ml-3 text-[#6C1313]">Cargando cursos...</span>
                    </div>
                )}

                {error && (
                    <div className="flex justify-center items-center mt-10">
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                            <p>Error al cargar los cursos: {error}</p>
                            <button
                                onClick={() => loadCourses(activeCategory)}
                                className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Reintentar
                            </button>
                        </div>
                    </div>
                )}

                {!loading && !error && courses.length > 0 && (
                    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <div className=" mt-10 lg:m-10 flex lg:grid sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch h-auto">
                            {courses.map((course, index) => (
                                <div data-aos="zoom-in" key={course.id || index} className="inline-block w-full px-6">
                                    <CardCourse
                                        title={course.title}
                                        image={course.image}
                                        isOpen={course.isOpen}
                                        hours={course.hours}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {!loading && !error && courses.length === 0 && (
                    <div className="flex justify-center items-center mt-10">
                        <p className="text-gray-500">No se encontraron cursos para la categoría "{activeCategory}"</p>
                    </div>
                )}
                <div className="m-10 mt-6 flex flex-wrap gap-x-4 gap-y-2" data-aos="fade-right">
                    <button
                        className="rojo transition-all duration-200 hover:bg-[#5a0f0f] focus:outline-none focus:bg-[#5a0f0f] focus:ring-2 focus:ring-[#6C1313] focus:ring-opacity-50 active:bg-[#4a0c0c]"
                        onClick={handleViewMoreCourses}
                    >
                        Ver más cursos...
                    </button>
                </div>
            </div>
        </div>
    )
}
