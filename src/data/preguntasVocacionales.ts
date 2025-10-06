
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

// 10 preguntas por carrera
export const preguntasVocacional: Pregunta[] = [
  // --- Bachillerato en Computación ---
  {
    carrera: "Computacion",
    pregunta: "¿Te interesa aprender a programar y crear software?",
    opciones: {
      A: "Sí, mucho",
      B: "Un poco",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Disfrutas resolver problemas lógicos o matemáticos?",
    opciones: {
      A: "Sí, bastante",
      B: "A veces",
      C: "Rara vez",
      D: "No me gusta",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Te gustaría desarrollar aplicaciones o videojuegos?",
    opciones: {
      A: "Sí, totalmente",
      B: "Tal vez",
      C: "No estoy seguro",
      D: "No me interesa",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Te atrae entender cómo funcionan los sistemas operativos o redes?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Tienes curiosidad por la inteligencia artificial o la robótica?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "No mucho",
      D: "Nada",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Te gustaría trabajar con hardware o ensamblar computadoras?",
    opciones: {
      A: "Sí",
      B: "Un poco",
      C: "No tanto",
      D: "No me gusta",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Prefieres trabajar con tecnología antes que con personas?",
    opciones: {
      A: "Sí, totalmente",
      B: "Depende",
      C: "Prefiero personas",
      D: "No me interesa ninguna",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Te emociona aprender nuevos lenguajes de programación?",
    opciones: {
      A: "Sí, me encanta",
      B: "A veces",
      C: "No tanto",
      D: "No me interesa",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Te ves trabajando en desarrollo de software o ciberseguridad?",
    opciones: {
      A: "Sí",
      B: "Tal vez",
      C: "No sé",
      D: "No lo veo para mí",
    },
  },
  {
    carrera: "Computacion",
    pregunta: "¿Sueles tener paciencia para encontrar errores en tu trabajo?",
    opciones: {
      A: "Sí, mucha",
      B: "Algo",
      C: "Poca",
      D: "Ninguna",
    },
  },

  // --- Bachillerato en Diseño ---
  {
    carrera: "Diseno",
    pregunta: "¿Te gusta crear gráficos, ilustraciones o animaciones?",
    opciones: {
      A: "Sí, mucho",
      B: "Un poco",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Te interesa el diseño de logotipos, carteles o contenido visual?",
    opciones: {
      A: "Sí, bastante",
      B: "A veces",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Te atrae trabajar con programas como Photoshop, Illustrator o Canva?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Tienes buena percepción de colores, formas y proporciones?",
    opciones: {
      A: "Sí, excelente",
      B: "Buena",
      C: "Regular",
      D: "Mala",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Te gustaría dedicarte al diseño publicitario o digital?",
    opciones: {
      A: "Sí",
      B: "Tal vez",
      C: "No sé",
      D: "No",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Disfrutas combinar creatividad con tecnología?",
    opciones: {
      A: "Sí, totalmente",
      B: "Depende",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Te consideras una persona creativa e innovadora?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Te interesa aprender sobre tipografía y composición visual?",
    opciones: {
      A: "Sí, bastante",
      B: "Un poco",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Te gustaría crear diseños para redes sociales, marcas o sitios web?",
    opciones: {
      A: "Sí, me encanta",
      B: "Podría hacerlo",
      C: "No mucho",
      D: "No me interesa",
    },
  },
  {
    carrera: "Diseno",
    pregunta: "¿Sueles imaginar cómo mejorar el aspecto visual de las cosas?",
    opciones: {
      A: "Sí, siempre",
      B: "A veces",
      C: "Rara vez",
      D: "Nunca",
    },
  },

  // --- Ciencias Biológicas ---
  {
    carrera: "Biologicas",
    pregunta: "¿Te interesa estudiar organismos, plantas o ecosistemas?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Te motiva hacer experimentos de biología o química?",
    opciones: {
      A: "Sí, disfruto mucho",
      B: "A veces",
      C: "Rara vez",
      D: "Nunca",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Te gusta leer sobre descubrimientos científicos?",
    opciones: {
      A: "Sí, con frecuencia",
      B: "A veces",
      C: "Pocas veces",
      D: "Nunca",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Te interesa la salud humana, genética o microbiología?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Disfrutas estar al aire libre y observar la naturaleza?",
    opciones: {
      A: "Sí, bastante",
      B: "A veces",
      C: "Poco",
      D: "Nunca",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Tienes curiosidad por entender cómo funcionan los seres vivos?",
    opciones: {
      A: "Sí, mucha curiosidad",
      B: "Moderada",
      C: "Poca",
      D: "Nada",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Te gustaría dedicarte a la investigación o biotecnología?",
    opciones: {
      A: "Sí, mucho",
      B: "Quizás",
      C: "No estoy seguro",
      D: "No lo veo para mí",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Te interesa la conservación del medio ambiente?",
    opciones: {
      A: "Sí",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Prefieres resolver problemas relacionados con la salud o la ecología?",
    opciones: {
      A: "Sí",
      B: "Depende del tema",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "Biologicas",
    pregunta: "¿Te ves trabajando en investigación o salud pública?",
    opciones: {
      A: "Sí, definitivamente",
      B: "Tal vez",
      C: "No sé",
      D: "No me imagino allí",
    },
  },

  // --- Perito Contador ---
  {
    carrera: "PeritoContador",
    pregunta: "¿Te gusta trabajar con números, cálculos y finanzas?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Te interesa la contabilidad, auditoría o administración?",
    opciones: {
      A: "Sí",
      B: "Un poco",
      C: "No mucho",
      D: "No me interesa",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Disfrutas llevar registros, balances o informes contables?",
    opciones: {
      A: "Sí, bastante",
      B: "A veces",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Eres una persona organizada y detallista?",
    opciones: {
      A: "Sí, mucho",
      B: "Más o menos",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Te gustaría aprender sobre impuestos y leyes financieras?",
    opciones: {
      A: "Sí, mucho",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Prefieres trabajar en oficina con documentos y cálculos?",
    opciones: {
      A: "Sí, me gusta",
      B: "Depende del día",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Te interesa el manejo del dinero y los presupuestos?",
    opciones: {
      A: "Sí, bastante",
      B: "Algo",
      C: "Poco",
      D: "Nada",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Disfrutas resolver problemas financieros o calcular costos?",
    opciones: {
      A: "Sí",
      B: "A veces",
      C: "Rara vez",
      D: "No",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Te ves trabajando en empresas, bancos o instituciones financieras?",
    opciones: {
      A: "Sí",
      B: "Tal vez",
      C: "No sé",
      D: "No lo veo para mí",
    },
  },
  {
    carrera: "PeritoContador",
    pregunta: "¿Te gustaría dirigir tu propio negocio o asesorar empresas?",
    opciones: {
      A: "Sí, mucho",
      B: "Tal vez",
      C: "No estoy seguro",
      D: "No me interesa",
    },
  },
];
