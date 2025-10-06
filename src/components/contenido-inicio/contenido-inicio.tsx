import "./contenido-inicio.css";
import { useNavigate } from "react-router-dom";
import { Inputs } from "../../modules/inputs/Inputs";
import { useValidacion } from "../../auth/autenticacion-Inputs";
import { Boton } from "../../modules/boton/boton";

export function Contenido() {
    const navigate = useNavigate();
    const {form}=useValidacion();
    const {register,handleSubmit,formState:{errors}}=form;

    const handleCreateJson = (data: { nombre: string; gmail: string }) => {
        const usuario = {
            nombre: data.nombre,
            correo: data.gmail
        };
        console.log("Usuario creado:", JSON.stringify(usuario));
    navigate("/test"); 
    };

    
    return (
    <>
    <section className="inicio">
        <nav className="contendio-izquierdo">
        <div className="contenedor-info">
            <div className="contenedor-titulo">
            <h1>Bienvenido al Test de Interés Vocacional.</h1>
            </div>
            <div className="introduccion">
            <p>
            El Test de Interés Vocacional tiene como objetivo orientarte para la elección de tu futuro bachillerato. Al realizarlo, obtendrás un listado de diferentes opciones que podrían interesarte explorar.
            </p>
            </div>
            <div className="contenedor-preguntas">
            <span className="pregunta">¿Cómo responder el test?</span>
            </div>

            <div className="instrucciones-test">
            <div className="instruccion">
                <span className="numero">1</span>
                <p>Completa el formulario para iniciar el test.</p>
            </div>
            <div className="instruccion">
                <span className="numero">2</span>
                <p>
                Durante el test se te proponen distintas afirmaciones. Lee atentamente
                cada una de ellas y selecciona tu respuesta entre las opciones que van
                de 1 a 5.
                </p>
            </div>
            <div className="instruccion">
                <span className="numero">3</span>
                <p>
                Siendo 1 el indicador que la afirmación <strong>no te atrae en lo absoluto</strong>, 
                y 5 que la afirmación es <strong>algo que te atrae y te apasiona</strong>.
                </p>
            </div>
            <div className="instruccion">
                <span className="numero">4</span>
                <p>
                Recuerda que no hay respuestas correctas o incorrectas. Selecciona la que
                mejor se adapte a tus gustos, preferencias o tendencias personales.
                </p>
            </div>
            <div className="instruccion">
                <span className="numero">5</span>
                <p>
                Procura contestar siendo sincero y espontáneo, sin reflexionar demasiado
                en lo que se espera de ti, sino en lo que realmente te atrae.
                </p>
            </div>
            <div className="instruccion">
                <span className="numero">6</span>
                <p>
                Luego de responder cada pregunta, haz clic en el botón <strong>"siguiente"</strong>,
                para ver la próxima afirmación.
                </p>
            </div>
            </div>
        </div>
        </nav>
        <section className="lado-derecho">
            <div className="titulo-form">
                <p>¡Descubre tu carrera ideal!</p>
                <p>Completa el formulario para iniciar</p>
            </div>
            <div className="formulario">
                        <form onSubmit={handleSubmit(handleCreateJson)}>
                    <Inputs label="Nombre" name="nombre" register={register} errors={errors}/>
                    <Inputs label="Correo" name="gmail" register={register} errors={errors} type="email"/>
                    <Boton className="boton-siguiente" titulo="siguiente" type="submit"/>
                </form>
            </div>
        </section>
    </section>
    </>
);
}
