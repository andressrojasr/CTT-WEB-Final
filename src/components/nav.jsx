import React from 'react'

const navigation2 = [
    { id: 0, title: 'Home', href: 'Ingresa aquí' },
    { id: 1, title: 'Cursos', href: 'Ingresa aquí' },
    { id: 2, title: 'Nosotros', href: 'Ingresa aquí' },
    { id: 3, title: 'Contáctanos', href: 'Ingresa aquí' },
]

export default function Nav() {
    
  return (
    <>
        <nav aria-label="Global" className="sticky top-34 z-50 w-full flex items-center justify-between p-6 lg:px-8 bg-[#6C1313]">
            <div className="flex lg:gap-x-12 md:gap-x-12 gap-4 lg:pl-30 md:pl-20">
                {navigation2.map((item) => (
                    <a key={item.id} href={item.href}>{item.title}</a>
            ))}
            </div>
        </nav>
    </>
  )
}
