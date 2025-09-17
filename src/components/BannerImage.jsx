import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/id/1018/1600/600",
    title: "Rendición de cuentas 2024",
    subtitle: "RESOLUCIÓN 0464-CU-P-2025",
    text: "Transparencia y compromiso con la comunidad universitaria.",
    buttonText: "más información",
    buttonLink: "#",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/1025/1600/600",
    title: "El inicio de una nueva forma de aprendizaje.",
    subtitle: "Sobre Nosotros",
    text: "Desde 2002 impulsamos proyectos, investigaciones y formación en ingeniería y tecnología.",
    buttonText: "conoce más",
    buttonLink: "#",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/1041/1600/600",
    title: "Compromiso con la innovación",
    subtitle: "Investigación y Desarrollo",
    text: "Promovemos el avance académico y científico en beneficio de la sociedad.",
    buttonText: "explorar proyectos",
    buttonLink: "#",
  },
];

export default function BannerImage() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(interval);
    }, []);
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Imagen como background con parallax */}
          <div
            className="w-full h-full bg-fixed bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay oscuro */}
            <div className="w-full h-full bg-black/50 flex items-center justify-between px-12">
              {/* Texto a la izquierda */}
              <div className="max-w-xl text-white">
                <h3 className="text-lg font-semibold">{slide.subtitle}</h3>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">
                  {slide.title}
                </h2>
                <p className="mt-4 text-lg">{slide.text}</p>
              </div>

              {/* Botón a la derecha */}
              <div>
                <a
                  href={slide.buttonLink}
                  className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition font-semibold"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Puntos de navegación */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
