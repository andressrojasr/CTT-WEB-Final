import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://picsum.photos/id/1018/1600/600", // reemplaza con tus imágenes
    title: "¡LA UTA SIGUE CRECIENDO CONTIGO!",
    subtitle: "Proyectos UTA financiados por el BDE",
    buttonText: "Conoce los proyectos",
    buttonLink: "#",
  },
  {
    id: 2,
    image:
      "https://picsum.photos/id/1025/1600/600",
    title: "Innovación y Desarrollo",
    subtitle: "Impulsando el futuro académico",
    buttonText: "Descubre más",
    buttonLink: "#",
  },
  {
    id: 3,
    image:
      "https://picsum.photos/id/1041/1600/600",
    title: "Compromiso con la educación",
    subtitle: "Construyendo juntos el conocimiento",
    buttonText: "Explorar",
    buttonLink: "#",
  },
];


export default function Carrusel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
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
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-start bg-black/40">
            <div className="bg-white p-8 rounded-md ml-16 max-w-lg">
              <h4 className="text-sm text-red-900 tracking-wider font-semibold">
                {slide.title}
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-red-900 mt-2">
                {slide.subtitle}
              </h2>
              <a
                href={slide.buttonLink}
                className="inline-block mt-6 bg-yellow-600 text-white px-5 py-2 rounded-md hover:bg-yellow-700 transition"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Botones de navegación (puntos) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            style={{ backgroundColor: index === current ? 'white' : 'gray' }}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white !important": "bg-gray-400 !important"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
