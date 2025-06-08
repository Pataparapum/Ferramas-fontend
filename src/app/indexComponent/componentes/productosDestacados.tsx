'use client'
import Image from "next/image";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";

import {Pagination, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

const ProductImage = () => {
    return (
        <Image 
            alt="producto destacado"
            width={90}
            height={90}
            src={"/alicate_universal.png"}
         />
    )
}


const ProductCard= () => {
    return (
        <div>
            <Card 
                isBlurred
                className="border-none rounded-2xl"
                shadow="sm">
                <CardBody>
                    <div className="bg-brownSecondary-200 m-auto h-60 grid grid-row-6 md:grid-rows-12 gap-6 md:gap-4 items-center justify-center rounded-2xl">
                        <div className="m-auto justify-center row-span-6 md:row-span-4 p-5 mt-5 bg-amber-50 rounded-2xl">
                            <ProductImage />
                        </div>
                        <div className="flex flex-col row-span-6 md:row-span-8 m-auto text-center p-3 mt-15">
                            <h2 className="text-2xl">Alicate multiuso</h2>
                            <p className="text-lg">Precio: $2000</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default function ProductosDestacados() {
    return (
    
        <div className="w-full h-full">
            <div id="titulo">
                <h1 className="text-4xl justify-start underline underline-offset-4 p-10">Productos destacados</h1>
            </div>

            <div className="mt-15">
                <Swiper 
                    modules={[Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    loop={true}
                    centeredSlides={true}
                    >
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                </Swiper>

                
            </div>
            
        </div>
    )
}
    