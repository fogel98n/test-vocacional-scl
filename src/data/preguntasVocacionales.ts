export type Opcion = "A" | "B" | "C" | "D";

export interface Pregunta {
  carrera: "Computacion" | "Diseno" | "Biologicas" | "PeritoContador";
  pregunta: string;
  opciones: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

export const preguntasVocacional: Pregunta[] = [
  // --- Computación ---
  {
    carrera: "Computacion",
    pregunta: "¿Te gusta usar computadoras y descubrir cómo funcionan?",
    opciones: {
      A: "Sí, mucho",
      B: "Un poco",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Disfrutas resolver juegos o acertijos que te hacen pensar?",
    opciones: {
      A: "Sí, me encanta",
      B: "A veces",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Te gustaría crear tus propias aplicaciones o páginas web?",
    opciones: {
      A: "Sí, mucho",
      B: "Podría intentarlo",
      C: "No sé",
      D: "No me interesa",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Te gusta investigar y aprender cosas nuevas sobre tecnología?",
    opciones: {
      A: "Sí, bastante",
      B: "A veces",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Prefieres trabajar con máquinas antes que con personas?",
    opciones: {
      A: "Sí, me siento más cómodo así",
      B: "Depende del caso",
      C: "Prefiero personas",
      D: "No me interesa ninguna",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Te gusta armar o reparar aparatos electrónicos?",
    opciones: {
      A: "Sí, mucho",
      B: "Un poco",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Eres paciente cuando algo no funciona e intentas solucionarlo?",
    opciones: {
      A: "Sí, mucho",
      B: "A veces",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Te imaginas trabajando frente a una computadora la mayor parte del día?",
    opciones: {
      A: "Sí, no me molestaría",
      B: "Tal vez",
      C: "No mucho",
      D: "No me gustaría",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Te gusta aprender cosas por tu cuenta en internet?",
    opciones: {
      A: "Sí, todo el tiempo",
      B: "A veces",
      C: "Rara vez",
      D: "Nunca",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Sueles ser curioso con cómo funcionan los dispositivos o programas?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },

  // --- Diseño ---
  {
    carrera: "Diseno",
    pregunta: "¿Te gusta dibujar o hacer cosas creativas?",
    opciones: {
      A: "Sí, mucho",
      B: "A veces",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Te gusta elegir colores, combinar ropa o decorar cosas?",
    opciones: {
      A: "Sí, me encanta",
      B: "Un poco",
      C: "No tanto",
      D: "Nada",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Te fijas en los detalles de los carteles o anuncios?",
    opciones: {
      A: "Sí, siempre",
      B: "A veces",
      C: "Poco",
      D: "Nunca",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Disfrutas imaginar nuevas ideas o formas de hacer las cosas?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Te gustaría trabajar en algo relacionado con el arte o la creatividad?",
    opciones: {
      A: "Sí, totalmente",
      B: "Tal vez",
      C: "No estoy seguro",
      D: "No me gustaría",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Te gusta que las cosas se vean ordenadas y bonitas?",
    opciones: {
      A: "Sí, mucho",
      B: "A veces",
      C: "No tanto",
      D: "Nada",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Sueles imaginar cómo mejorar el aspecto de algo?",
    opciones: {
      A: "Sí, siempre",
      B: "A veces",
      C: "Rara vez",
      D: "Nunca",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Te gustaría hacer dibujos o diseños para redes sociales o marcas?",
    opciones: {
      A: "Sí, me encantaría",
      B: "Tal vez",
      C: "No sé",
      D: "No me interesa",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Te consideras una persona con mucha imaginación?",
    opciones: {
      A: "Sí, mucho",
      B: "Un poco",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Te gusta trabajar con colores, dibujos o decoraciones?",
    opciones: {
      A: "Sí, mucho",
      B: "A veces",
      C: "No tanto",
      D: "Nada",
    },
  },

  // --- Ciencias Biológicas ---
  {
    carrera: "Biologicas",
    pregunta: "¿Te gusta observar la naturaleza, los animales o las plantas?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Te interesa cuidar el medio ambiente?",
    opciones: {
      A: "Sí, mucho",
      B: "Un poco",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Te gustaría saber más sobre cómo funciona el cuerpo humano?",
    opciones: {
      A: "Sí, bastante",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Disfrutas aprender cosas sobre los animales o las plantas?",
    opciones: {
      A: "Sí, mucho",
      B: "A veces",
      C: "Rara vez",
      D: "Nunca",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Te gustaría trabajar en algo relacionado con la salud o la naturaleza?",
    opciones: {
      A: "Sí, totalmente",
      B: "Tal vez",
      C: "No sé",
      D: "No me gustaría",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Sueles ser curioso sobre cómo viven o crecen los seres vivos?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Prefieres actividades al aire libre antes que en oficina?",
    opciones: {
      A: "Sí, siempre",
      B: "A veces",
      C: "Rara vez",
      D: "Nunca",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Te gustaría investigar o ayudar a mejorar la salud de las personas?",
    opciones: {
      A: "Sí",
      B: "Tal vez",
      C: "No sé",
      D: "No",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Disfrutas ver documentales sobre la naturaleza o el espacio?",
    opciones: {
      A: "Sí, mucho",
      B: "A veces",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Te interesa aprender cómo cuidar mejor el planeta?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },

  // --- Perito Contador ---
  {
    carrera: "PeritoContador",
    pregunta: "¿Te gusta el orden y llevar control de tus cosas?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Disfrutas hacer cuentas o manejar dinero?",
    opciones: {
      A: "Sí, bastante",
      B: "A veces",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Te consideras una persona responsable y detallista?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Te gustaría ayudar a organizar el dinero de una empresa o negocio?",
    opciones: {
      A: "Sí, totalmente",
      B: "Tal vez",
      C: "No sé",
      D: "No me gustaría",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Prefieres trabajar con números antes que con cosas creativas?",
    opciones: {
      A: "Sí",
      B: "Depende",
      C: "No mucho",
      D: "Nada",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Te gusta planificar tus gastos o ahorrar dinero?",
    opciones: {
      A: "Sí, siempre",
      B: "A veces",
      C: "Poco",
      D: "Nunca",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Eres ordenado cuando haces tus tareas o trabajos?",
    opciones: {
      A: "Sí, mucho",
      B: "A veces",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Te interesa aprender cómo funcionan las empresas?",
    opciones: {
      A: "Sí, bastante",
      B: "Un poco",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Te gustaría tener tu propio negocio algún día?",
    opciones: {
      A: "Sí, claro",
      B: "Tal vez",
      C: "No sé",
      D: "No me interesa",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Prefieres trabajos tranquilos y bien organizados?",
    opciones: {
      A: "Sí, me gusta eso",
      B: "Depende",
      C: "No tanto",
      D: "Nada",
    },
  },
];
