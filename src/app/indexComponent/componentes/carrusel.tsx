'use client'
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "@deemlol/next-icons";

export default function Carrusel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { src: "/louis-hansel.png", alt: "Foto de Louis Hansel en Unsplash" },
        { src: "/simone-impei.png", alt: "Foto de Simone Impei en Unsplash" },
        { src: "/barn-images.png", alt: "Foto de Barn Images en Unsplash" }
    ];

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full p-10">
            {/* Carousel wrapper */}
            <div className=" overflow-hidden rounded-lg relative h-[700px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={` w-full transition-opacity duration-700 ease-in-out ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <Image
                            src={image.src}
                            width={2000}
                            height={300}
                            className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 imagen"
                            style={{ height: "700px" }}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex bottom-5 left-1/2 -translate-x-1/2 space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? "bg-white" : "bg-gray-400"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>

            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center align-center justify-center px-4 cursor-pointer hover:bg-zinc-500 hover:opacity-20"
                onClick={prevSlide}
                style={{ height: "700px"}}
            >
                <ChevronLeft size={36} color="#F2B705" />
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center align-center justify-center px-4 cursor-pointer hover:bg-zinc-500 hover:opacity-20"
                onClick={nextSlide}
                style={{ height: "700px"}}
            >
                <ChevronRight size={36} color="#F2B705" />
            </button>
        </div>

    );
}