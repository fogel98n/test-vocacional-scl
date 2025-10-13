

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # Test Vocacional SCL

    Proyecto frontend en React + TypeScript + Vite que implementa un Test de Interés Vocacional.

    Este README cubre cómo ejecutar el proyecto, la estructura principal del repositorio, los componentes clave, notas sobre diseño responsive (mobile-first) y cambios recientes aplicados.

    ## Tecnologías
    - React 18 + TypeScript
    - Vite
    - react-hook-form + zod (validación)

    ## Scripts (uso rápido)
    Abre una terminal en la raíz del proyecto y ejecuta:

    ```bash
    npm install
    npm run dev      # inicia servidor de desarrollo (Vite)
    npm run build    # build de producción
    npm run preview  # preview del build localmente
    ```


    ## Estructura principal

    src/
    - App.css, index.css         -> estilos globales
    - main.tsx                  -> punto de entrada
    - components/
      - contenido-inicio/       -> página de inicio + formulario inicial
        - contenido-inicio.tsx
        - contenido-inicio.css
      - header/                 -> header de la app
        - header.tsx
        - header.css
      - preguntas/              -> lógica y UI del test vocacional
        - preguntas.tsx
        - preguntas.css
      - resultados/             -> resultado del test
        - resultados.tsx
        - resultados.css
    - modules/
      - boton/                  -> componente de botón reutilizable
        - boton.tsx
        - boton.css
      - inputs/                 -> componente de input reutilizable
        - Inputs.tsx
        - inputs.css
    - auth/
      - autenticacion-Inputs.tsx -> hook de validación (zod + react-hook-form)
    - hooks/
      - useUsuarios.ts          -> hook para llamadas/estado de usuario
    - data/
      - preguntasVocacionales.ts -> lista de preguntas usadas en el test

    package.json, vite.config.ts, tsconfig.json, bun.lock, etc.

    ## Componentes clave y comportamiento

    - `Contenido` (`contenido-inicio`): formulario inicial donde el usuario ingresa nombre y correo. Usa `useValidacion` para validación con `zod`.
    - `Testpreguntas` (`preguntas`): componente principal del test. Muestra preguntas, barra de progreso y botones de respuesta. Al terminar, navega a `/resultados` con las respuestas en el `state`.
    - `ResultadoVocacional` (`resultados`): calcula la carrera más compatible y la muestra en una card centrada.
    - `Boton` (`modules/boton`): componente de botón reutilizable con estilos base en `boton.css` y comportamiento táctil optimizado.
    - `Inputs` (`modules/inputs`): campos de formulario reutilizables con manejo de errores y estilos en `inputs.css`.

    

    ## Cambios recientes (resumen)

    - Refactor:
      - `src/modules/boton/boton.tsx` ahora importa `boton.css` y expone la clase base `scl-boton`.
      - `src/modules/inputs/Inputs.tsx` ahora usa clases `scl-input-*` y estilos en `inputs.css` (en lugar de estilos inline).
    - Validación y envío:
      - `src/auth/autenticacion-Inputs.tsx` define el schema zod con `gmail` y el hook `useValidacion`.
      - `contenido-inicio.tsx` registra el form y al enviar crea un JSON `{ nombre, correo }` y navega a la ruta destino.
    - UI/Responsive: ajustes en `index.css`, `App.css`, `contenido-inicio.css`, `header.css`, `preguntas.css`, `resultados.css` para mobile-first.

    
    ## Contribuir

    1. Crea una rama nueva a partir de `main`.
    2. Haz tus cambios y abre un PR con descripción clara y capturas si son cambios visuales.

    ---
    Si quieres, puedo:

    - Añadir archivos de ejemplo (capturas de pantalla) a `docs/`.
    - Generar `variables.css` y migrar colores actuales.
    - Añadir scripts de prueba o CI básicos.

    Indica cuál de los puntos quieres que haga a continuación y lo implemento.
