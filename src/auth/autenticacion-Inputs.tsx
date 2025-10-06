import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema=z.object({
    nombre:z.string().min(1,"el nombre es obligatorio"),
    gmail:z.string().email("debe ser un correo valido"),
});

type FormValues = z.infer<typeof schema>;

export function useValidacion(){
    const form=useForm({
        resolver:zodResolver(schema),
    });

const onSubmit:SubmitHandler<FormValues>=(data)=>{
    console.log("datos validos",data)
}
 return{form,onSubmit}
}