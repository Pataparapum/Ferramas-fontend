import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { NumberInput } from "@heroui/number-input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { Star } from "@deemlol/next-icons";
import { Mail } from "@deemlol/next-icons";
import { Bell } from "@deemlol/next-icons";





export default function Login() {

    const inputs = [
        {label:"Email",placeholder:"Ingrese un email", name:"email", type:"email"},
        {label:"Nombre",placeholder:"Ingrese un nombre", name:"nombre", type:"text"},
        {label:"Apellido",placeholder:"Ingrese un apellido", name:"apellido", type:"text"},
        {label:"Contraseña",placeholder:"Ingrese una contraseña", name:"contraseña", type:"password"},
        {label:"Rut",placeholder:"Ingrese su rut", name:"rut", type:"text"}
    ]

    return (
        <div id="loginPrincipal" className="h-full flex ">    
            <div className="w-[1000px] h-[600px] bg-backgroundColor m-auto rounded-2xl flex">
                <div className="flex flex-col w-[600px]">
                    <div className="m-10 mb-0">
                        <h1 className="text-2xl">Inicia sesión o registrate para comprar</h1>
                    </div>
                    <div className="m-auto w-full">
                        <Form className="flex w-full flex-wrap md:flex-nowrap gap-5 p-5">
                            { inputs.map((input, index) => (
                                <Input 
                                key={index}
                                isRequired
                                isClearable
                                variant="underlined"
                                label={input.label}
                                placeholder={input.placeholder}
                                labelPlacement="outside"
                                name={input.name}
                                type={input.type}
                                classNames={{
                                    label:"pb-9 text-black/50",
                                    input:"p-0 pt-5"                                    
                                }}
                                />
                            ))}
                            
                            <NumberInput
                                isRequired
                                isClearable
                                hideStepper
                                variant="underlined"
                                label="Celular"
                                placeholder="Ingresa un celular"
                                labelPlacement="outside"
                                name="celular"
                                classNames={{
                                    label:"pb-9 text-black/50",
                                    input:"p-0 pt-5"
                                    
                                }}
                            />
                        </Form>    

                    </div>
                    <div className="w-full h-full flex flex-col gap-3">
                        <div className="m-auto mb-0">
                            <Button className="w-80" radius="full">
                                Regístrate
                            </Button>
                        </div>
                        <div className="m-auto mt-0">
                            <p className="text-[13px]">¿Ya tienes una cuenta? <Link color="foreground" underline="always">Inicia sesión</Link></p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="m-10">
                        <h1 className="text-2xl">Beneficios de crear una cuenta</h1>
                    </div>
                    <div>
                        <div className="flex flex-col ">
                            <div className="flex w-90">
                                <div className="border-2 rounded-full w-22 h-13 m-10 flex gap-4">
                                    <Bell className="m-auto mt-3"/>
                                </div>
                                <div className="m-auto justify-start">
                                    <p className=""><strong>Recibir notificaciones en tiempo real</strong> de tus pedidos</p>
                                </div>
                            </div>
                            
                            <div className="flex w-90">
                                <div className="border-2 rounded-full w-13 h-13 m-10 flex gap-1">
                                    <Mail className="m-auto mt-3"/>
                                </div>
                                <div className="m-auto ml-0 justify-start">
                                    <p className="">revisa tus <strong>boletas online</strong></p>
                                </div>
                            </div>

                            <div className="flex w-90">
                                <div className="border-2 rounded-full w-22 h-13 m-10 flex gap-4">
                                    <Star className="m-auto mt-3"/>
                                </div>
                                <div className="m-auto justify-start">
                                    <p className="">Guarda <strong>medios de pago y direcciones favoritas</strong></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}