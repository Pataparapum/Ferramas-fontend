'use client'
import { Card, CardBody} from "@heroui/card";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";
import {Pagination, PaginationItem, PaginationCursor} from "@heroui/react";
import React from "react";
import { ChevronDown } from "@deemlol/next-icons";
import { ChevronUp } from "@deemlol/next-icons";

const order = [
    {key:"recomendado", label:"Recomendado"},
    {key: "mayor", label: "Mayor precio a menor precio"},
    {key: "menor", label:"Menor precio a mayor precio"},
    {key:"evaluado", label:"mejor evaluado"},
    
];

const UpDownButton = (props:any) => {
    const {topOrBottom} = props;

    if (topOrBottom) {
        return <ChevronUp/>
    } else {
        return <ChevronDown/>
    }
}


export default function Filtros() {

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Recomendado"]));
    const [upDown, setSelectedUpDown] = React.useState(false);

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replace(/_/g, " "),
        [selectedKeys],
    )

    
    return (
        <Card className="w-[1100px]">
            <CardBody>
                <div className="bg-backgroundColor rounded-2xl p-11 flex justify-between items-center" >
                    <div id="ordenarPor" className="flex w-[250px] flex-wrap flex-col md:flex-nowrap">
                        <div >
                            <span className="text-zinc-400">Ordenar Por</span>
                        </div>
                          <Dropdown onOpenChange={(isOpen) => {setSelectedUpDown(isOpen)}  }>
                            <DropdownTrigger>
                                    <Button className="flex justify-between text-start p-0 border-b-2" variant="bordered" color="default">     
                                        {selectedValue}
                                        <UpDownButton topOrBottom={upDown}/>
                                    </Button>
                            </DropdownTrigger>
                            <DropdownMenu 
                                    disallowEmptySelection
                                    selectedKeys={selectedKeys}
                                    selectionMode="single"
                                    variant="solid"
                                    className="bg-backgroundColor shadow-2xl pt-2 pb-2 rounded-b-md"
                                    onSelectionChange={(key) => setSelectedKeys(key as Set<string>)}
                                    itemClasses={{
                                        base:[
                                            "p-4",
                                            "hover:bg-zinc-300",
                                            "data-[selected]:border-l-4",
                                            "data-[selected]:border-l-blue-500",
                                        ]}}
                                    >
                                {order.map((elementos, index) => (
                                    <DropdownItem hideSelectedIcon
                                     id="index" key={elementos.label}>{elementos.label}</DropdownItem>
                                ))}
                                
                            </DropdownMenu>
                        </Dropdown>
                                                
                    </div>

                    <div>
                        <Pagination showControls showShadow variant="flat" initialPage={1} total={1} size="md"  classNames={{
                            wrapper:"gap 0 overflow-visible h-8 rounded border-divider",
                            item:"w-8 h-8 text-small bg-transparent",
                            cursor: "bg-gradient-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
                            next:"p-3",
                        }}/>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
