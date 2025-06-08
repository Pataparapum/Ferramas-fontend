import {Card, CardBody} from "@heroui/card";
import Image from "next/image";

const AlicateImage = () => {
    return (
        <Image
            alt="producto oferta 1"
            className=" m-auto object-cover rounded-2xl shadow-2xl bg-zinc-200"
            height={140}
            width={140}
            src="/alicate_universal.png"
            />
    )
}

const CardPubliHorizontal = () => {
    return (<Card
                isBlurred
                className="border-none rounded-2xl"
                shadow="sm">
                    <CardBody>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                            <div className="relative col-span-6 md:col-span-4">
                                <AlicateImage/>
                            </div>

                            <div className="flex flex-col col-span-6 md:col-span-8 m-auto">
                                <h1 className="text-5xl">Alicate Universal</h1>

                                <p>Descripción del producto</p>

                            </div>
                        </div>
                    </CardBody>
            </Card>)
}

const CardPubliVertical = (props:any) => {

    let {mt} = props;
    let {cardMt} = props;

    let classNameText = `flex flex-col row-span-6 md:row-span-8 m-auto text-center ${mt ? mt : ""}`;
    let classNameCard = `grid row-cols-6 md:row-cols-12 gap-6 md:gap-5 items-center justify-center ${cardMt ? cardMt : ""}`;

    return (
        <Card
            isBlurred
            className="border-none rounded-2xl"
            shadow="sm">
                <CardBody>
                    <div className="">
                        <div className={classNameCard}>
                            <AlicateImage/>
                        </div>

                        <div className={classNameText}>
                            <h1 className="text-5xl ">Alicate Universal</h1>

                            <p>Descripción del producto</p>

                        </div>
                    </div>
                </CardBody>
            
        </Card>
    )
}


export default function Bento() {
    return (

        <div className="grid grid-cols-4 grid-rows-3 gap-3 justify-items-center m-auto w-full h-full p-20 ">
            
             <div id="publi-1" className="col-span-3 w-full h-40 bg-bluePrimary-200 rounded-2xl">
                <CardPubliHorizontal />
             </div>
            

            <div id="publi-2" className="col-span-2 w-full h-40 bg-brownSecondary-100 rounded-2xl">
                <CardPubliHorizontal />
            </div>

            <div id="publi-4" className="row-span-2 w-full bg-red-500 h-83 rounded-2xl">
                <CardPubliVertical />
            </div>

            <div id="publi-5 " className="row-span-3 row-start-1 col-start-4 w-full bg-blue-600 h-126 rounded-2xl">
                <CardPubliVertical mt="mt-20" cardMt="mt-17"/>
            </div>

            <div id="publi-3" className="col-span-2 w-full h-40 bg-brownPrimary rounded-2xl">
                <CardPubliHorizontal />
            </div>
        </div>
    )
}