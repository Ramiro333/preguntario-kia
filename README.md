# Preguntero Kia
## Descripción:

Este proyecto es un preguntero que permite crear, gestionar y combinar conjuntos de preguntas de forma dinámica. Está diseñado para poner a prueba tus habilidades sin la necesidad de un compañero. La idea surgió para evitar el estilo tradicional de "carrito de compras" y crear algo más original y didáctico, aprovechando al máximo mis capacidades e imaginación.

## Uso
### Crear Conjuntos de Preguntas
#### En el preguntero, puedes:

- Generar preguntas aleatorias
- Crear tus propios conjuntos de preguntas.
- Agregar y eliminar preguntas.
- Guardar y cargar conjuntos de preguntas.

### Selección y Uso de Preguntas
- En el apartado "preguntas seleccionadas", el programa realiza preguntas de manera aleatoria del conjunto seleccionado, incluyendo una pequeña animación antes de mostrar la pregunta seleccionada.

- Las preguntas dentro del conjunto seleccionado pueden ser eliminadas individualmente o en su totalidad, así como guardadas y cargadas en cualquier momento.

### Características

- Gestión de Conjuntos: Crear, combinar y eliminar conjuntos de preguntas.
- Persistencia de Datos: Guardar y cargar conjuntos de preguntas usando localStorage.
- Animación de Selección: Animación antes de mostrar la pregunta seleccionada.
- Validaciones y Filtros: Varias validaciones para evitar errores lógicos.

### ÚLTIMA ENTREGA 12/7:

Para explicar mi proyecto, empiezo por la base de que quería evitar utilizar el famoso estilo "carrito de compras". Me reté a hacer algo más original y didáctico que explotase mis capacidades e imaginación. Por lo tanto, y respondiendo a la necesidad de mi pareja, creé un preguntero, en el cual poder poner a prueba tus habilidades sin la necesidad de un compañero.

En el preguntero, puedes crear tus propios conjuntos de preguntas, agregar preguntas, eliminarlas, eliminar todo el conjunto, guardar y cargar estos conjuntos. También puedes combinar estos conjuntos con otros que crees y añadir preguntas individuales.

En el apartado "preguntas seleccionadas" es en el que se va a basar el programa para realizar las preguntas de manera aleatoria que estén en ese conjunto seleccionado. Incluye una pequeña animación antes de que salga la pregunta que se seleccionó. Estas preguntas dentro del conjunto seleccionado también pueden ser eliminadas, individualmente o en su totalidad, así como guardadas y cargadas tanto como se quiera.

Una vez hecha esta síntesis de las funcionalidades del programa, yendo a la parte técnica, comienzo diciendo que he buscado usar varias prácticas y métodos para hacer tareas similares, esto a fin de demostrar mi control sobre dichos métodos, flexibilidad a la hora de aplicarlos e imaginación en la implementación de ellos. La funcionalidad principal está dada por la clase conjuntoPreguntas, allí es donde ocurre toda la magia. El constructor alberga el nombre del conjunto, las preguntas correspondientes y una propiedad primordial, el lugar. Lugar es sumamente importante, esto me ayudó a resolver un gran problema que mi código tenía, en donde no lograba que el DOM representase de forma correcta lo que sucedía a nivel interno en la memoria del sitio. Al aplicar esta propiedad, todos los conjuntos se trabajan en un estricto lugar del DOM, donde mostrarDiv lo único que hace es actualizar el DOM con lo que ocurra a nivel interno en la memoria de la página. La clase presenta múltiples filtros y validaciones para evitar errores lógicos, así como, por ejemplo, (usando sugar syntax) prohibiendo que un array llegue vacío, lo cual rompería de forma total el código. Con este pequeño arreglo, logro sobrepasar esta dificultad.

Para agregar conjuntos he decidido hacer algo similar a lo que hace la clase, pero usando funciones, para demostrar mi maestría con estas. Aunque se podría haber dividido el código infinitamente en funciones, he decidido mantenerlo sencillo y usando las suficientes como para que funcione de la manera que busco. Fue primordial la creación de la propiedad lugar de los objetos de conjuntos para lograr esto; de otra forma, los conjuntos nuevos no se representarían de forma correcta en el DOM. Esta parte del código también presenta variadas validaciones para mantener la página a prueba de errores, usando librerías para notificar del estado de las solicitudes, así como para advertir después de acciones importantes (como eliminar todas las preguntas del conjunto).

El manejo del storage se mantiene simple, usando una variable para almacenar todos los conjuntos y traerlos de vuelta en el formato correspondiente (JSON) y mostrándolos a nivel DOM una vez cargados en la memoria.

Para la parte de la API, al no tener mucho tiempo para preparar la sección, he usado la API de PokeAPI, para comparar la altura de dos pokemones y mostrándolo a nivel DOM, poniendo sus imágenes, obteniéndolas con fetch, y el texto resultante de la comparación, así como simulando una carga de datos con una función asincrónica. Me hubiera gustado incluir un carrusel de imágenes de pokemones también, que no descarto hacerlo fuera del plazo de entrega del proyecto, para practicar mi manejo de esta tecnología.

Para concluir, este proyecto demandó mucho sacrificio de mi parte, especialmente en la creación de una lógica de programación correcta. Mi mayor reto fue hacer algo diferente a otros proyectos y, al mismo tiempo, ayudar a alguien por quien siento mucho afecto. Considero que he logrado mi objetivo en cuanto a la funcionalidad del programa. Me planteé hacer un apartado de verdadero o falso dentro de mi página, pero creo que será mejor abordar esta funcionalidad más adelante y con otro tipo de herramientas. Cualquier tipo de feedback es agradecido y espero que mi programa sirva a muchas personas. **Gracias Por Leer :smile:.**