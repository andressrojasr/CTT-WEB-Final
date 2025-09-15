'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, DocumentMagnifyingGlassIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import ItemHeader from './itemHeader'

const navigation = [
  { id: 0, title: 'Verifica Tu Certificado', href: 'Ingresa aquí', icon: DocumentMagnifyingGlassIcon },
  { id: 1, title: 'Plataforma Educativa', href: 'Ingresa aquí', icon: ComputerDesktopIcon },
]

const navigation2 = [
    { id: 0, title: 'Home', href: 'Ingresa aquí' },
    { id: 1, title: 'Cursos', href: 'Ingresa aquí' },
    { id: 2, title: 'Nosotros', href: 'Ingresa aquí' },
    { id: 3, title: 'Contáctanos', href: 'Ingresa aquí' },
]

export default function header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
        <header className="sticky top-0 w-full z-50 bg-white">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="hidden md:flex lg:flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                <img
                    alt=""
                    src="src/assets/logoUTA.webp"
                    className="h-22 w-auto"
                />
                </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                    <ItemHeader key={item.id} item={item} />
                ))}
            </div>
            <div className=" lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="-m-1.5 p-1.5">
                <img
                    alt=""
                    src="src/assets/logoCTT.webp"
                    className="h-22 w-auto "
                />
                </a>
            </div>
            <div className=" flex flex-1 lg:hidden md:hidden pl-10">
                <a href="#" className="-m-1.5 p-1.5">
                <img
                    alt=""
                    src="src/assets/logoUTAPequeño.png"
                    className="h-15 w-auto min-w-30"
                />
                </a>
            </div>
            <div className="flex lg:hidden">
                <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
            </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                    alt=""
                    src="src/assets/logoCTT.webp"
                    className="h-22 w-auto"
                    />
                </a>
                <div className=" flex flex-1 lg:hidden pl-10">
                <a href="#" className="-m-1.5 p-1.5">
                <img
                    alt=""
                    src="src/assets/logoUTAPequeño.png"
                    className="h-15 w-auto min-w-30"
                />
                </a>
                </div>
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
                </div>
                <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10" >
                    <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                        key={item.id}
                        href={item.title}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                        style={{ color: '#6C1313' }}
                        >
                        {item.title}
                        </a>
                    ))}
                    </div>
                </div>
                </div>
            </DialogPanel>
            </Dialog>
        </header>
    </>
  )
}
