import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";






export default function Register() {

    const inputs = [
        {label:"Email",placeholder:"Ingrese un email", name:"email", type:"email"},
        {label:"Contraseña",placeholder:"Ingrese una contraseña", name:"contraseña", type:"password"},
    ]

    return (
        <div id="loginPrincipal" className="h-full flex ">    
            <div className="w-[1000px] h-[600px] bg-backgroundColor m-auto rounded-2xl flex">
                <div className="flex flex-col w-full">
                    <div className="m-auto h-[300px] flex">
                        <h1 className="m-auto text-3xl">Inicia sesión para comprar</h1>
                    </div>
                    <div className="m-auto w-full h-full">
                        <Form className="flex h-full w-[600px] flex-wrap md:flex-nowrap gap-30 p-10 pt-20 mt-20 m-auto">
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
                                    label:"pb-13 text-black/50",
                                    input:"p-0 pt-5"
                                }}
                                />
                            ))}
                            
                        </Form>    

                    </div>
                    <div className="w-full h-full flex flex-col gap-3">
                        <div className="m-auto mb-0">
                            <Button className="w-80" radius="full">
                                Ingresar
                            </Button>
                        </div>
                        <div className="m-auto mt-0">
                            <p className="text-[13px] ">¿No tienes cuenta? <Link color="foreground" underline="always">Registrate</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}