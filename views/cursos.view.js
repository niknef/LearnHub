export function crearPagina(titulo, contenido){
    let html = `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${titulo}</title>
            <link href="../src/output.css" rel="stylesheet">
            <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" />
            
        </head>
        <body>
            <nav class="border-gray-200 bg-gray-200 shadow-lg px-6 py-4">
                <div class="container mx-auto flex flex-wrap items-center justify-between h-10">
                    <a href="/" class="flex items-center space-x-3">
                        <img src="../img/logo-learnhub.png" class="h-8" alt="LearnHub Logo" />
                            <h1 class="text-2xl font-semibold whitespace-nowrap text-blue-600/75">Learn<span class="text-blue-800">Hub</span></h1>
        </a>

        <button data-collapse-toggle="mobile-menu" type="button" class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Open main menu</span>

            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>

            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>

        <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                    <a href="/" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Inicio</a>
                </li>
                <li>
                    <a href="/cursos" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Cursos</a>
                </li>
                <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Categorias <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                <!-- Dropdown menu -->
                <div id="dropdownNavbar" class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                    <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="/cursos?categoria=frontend" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">FrontEnd</a>
                    </li>
                    <li>
                        <a href="/cursos?categoria=backend" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">BackEnd</a>
                    </li>
                    <li>
                        <a href="/cursos?categoria=devops" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">DevOps</a>
                    </li>
                    <li>
                        <a href="/cursos?categoria=data_science" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Data Science</a>
                    </li>
                    <li>
                        <a href="/cursos?categoria=cybersecurity" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Cyber Security</a>
                    </li>
                    </ul>
                </div>
            </li>
            </ul>
        </div>
    </div>
</nav>

            ${contenido}
            <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
        </body>
    </html>
    `
    return html
}

export function crearHome(){
    let html = `
    <section class="mt-10">
        <div class="mx-auto max-w-screen-xl px-4 py-16 flex flex-col lg:flex-row items-center justify-items-center gap-8">
            
            <div class="mb-8 lg:mb-0">
                <img src="../img/banner.png" alt="Desarrolla habilidades" class="w-full h-auto">
            </div>
            
            <div class="text-left lg:text-left w-1/2">
                    <h1 class="text-4xl font-extrabold text-blue-900 opacity-75 sm:text-5xl">Desarrolla habilidades que marcan la diferencia</h1>
                    <p class="mt-4 text-lg font-light text-gray-600">
                        En <span class="font-normal text-blue-600/75">Learn<span class="text-blue-800">Hub</span></span>, te ofrecemos cursos diseñados para que avances en tu carrera profesional. Aprende de manera flexible y a tu ritmo, con el respaldo de expertos en cada área.
                    </p>
                    <button type="button" class="text-white bg-gradient-to-br mt-4 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center me-2 mb-2">Suscríbete</button>
            </div>
        </div>
    </section>

    `;
    return html;
};

export function crearCursos(cursos, categoria) {
    // Función para capitalizar la primera letra de cada palabra
    const formatCategoryName = (category) => {
        if (!category) return '';
        return category
            .split('_') // Separar por guiones si se usa en los nombres
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '); // Unir nuevamente con espacios
    };

    let titulo = categoria ? `Cursos de ${formatCategoryName(categoria)}` : 'Todos nuestros cursos';
    let html = `
    <h1 class="text-5xl font-light text-gray-600 mt-6 ms-8">${titulo}</h1>
    <div class="flex justify-between items-center mt-6 mx-4">
        
        <a href="/" type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 ms-4 ">
            Volver al inicio
        </a>

        <div class="flex space-x-4 me-4">

            <a href="/cursos?ordenDuracion=asc${categoria ? `&categoria=${categoria}` : ''}" type="button" class="flex justify-center items-center text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">
            <svg class="w-6 h-6 text-white/85 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m0 14-4-4m4 4 4-4"/>
            </svg>
            <svg class="w-6 h-6 text-white/85 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            </a>

            <a href="/cursos?ordenDuracion=desc${categoria ? `&categoria=${categoria}` : ''}" type="button" class="flex justify-center items-center text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">
            <svg class="w-6 h-6 text-white/85 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
            </svg>

            <svg class="w-6 h-6 text-white/85 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            </a>
            
            <a href="/cursos/nuevo" type="button" class="flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">
            <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
            </svg>
            </a>

        </div>
    </div>
    <section class="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
    `;
    
    if (cursos.length === 0) {
        html += `<p>Lo lamentamos, No hay cursos disponibles.</p>`;
    } else {
        cursos.forEach(curso => {
        html += `
        <article class="flex flex-col justify-between overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
                alt="${curso.nombre}"
                src="../img/${curso.img}"
                class="h-56 w-full object-cover"
            />

            <div class="bg-white p-4 sm:p-6 flex flex-col flex-grow">
                <div class="flex items-center flex-wrap ml-0 mb-4">
                    <svg class="w-[17px] h-[17px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>

                    <p class="text-xs text-gray-500">Duración: ${curso.horas} horas</p>
                </div>
                
                <h2 class="mt-1 text-lg text-gray-800">${curso.nombre}</h2>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    ${curso.descripcion}
                </p>

                <div class="mt-auto pt-4">
                    <a href="/cursos/${curso._id}" class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Más Info +
                        </span>
                    </a>
                </div>
            </div>
        </article>`;
        });
    }
    html += `</section>`;

    return html;
}


export function detalleCurso(curso){
    let html = `

    <div class="flex justify-between items-center mt-6 mx-4">
        
        <a href="/" type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 ms-4 ">
            Volver al inicio
        </a>

        <div class="flex space-x-4 me-4">
            <a href="/cursos/modificar/${curso._id}" type="button" class="flex justify-center items-center text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">
            <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
            </svg>



            </a>

            <a href="/cursos/eliminar/${curso._id}" type="button" class="flex justify-center items-center text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">
            <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
            </svg>


            </a>
        </div>
    </div>
    <article class="flex bg-white mx-auto mt-10 shadow-lg rounded-lg w-1/2">

        <div class="hidden sm:block sm:basis-56">
            <img
            alt="${curso.nombre}"
            src="../img/${curso.img}"
            class="h-full w-full object-cover rounded-l-lg"
            />
        </div>

        <div class="flex flex-1 flex-col justify-between">
            <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
                <h2 class="font-medium text-xl uppercase text-gray-900">
                ${curso.nombre}
                </h2>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                ${curso.descripcion}
            </p>


            <div class="flex items-center flex-wrap ml-0">
                <svg class="w-[19px] h-[19px] text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>

                <p class="mt-2 ml-1 mb-2 line-clamp-3 text-sm/relaxed text-gray-400">
                Duración: ${curso.horas} horas
            </p>
                </div>
            
            
            <div class="flex items-center flex-wrap"> 
            `;
            curso.tecnologias.forEach(tag => {
                html += `<span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 mt-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">${tag}</span>`;
            });
            html += `
            </div>
            </div>
        </div>
        </article>
    `;

    return html;
}

export function crearCursoNuevo(){
    let html = `
    <a href="/" type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 ms-6 mt-6 ">
    Volver al inicio
    </a>
    <h1 class="text-3xl font-light text-gray-600 my-4 text-center"> Agregar un curso </h1>

    <form action='/cursos/nuevo' method='post' class="max-w-md mx-auto">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="nombre" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="nombre" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre del curso</label>
    </div>
    

    <!-- Select para categoría -->
    <div class="relative z-0 w-full mb-5 group">
        <select name="categoria" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>
        <option value="" disabled selected>Seleccionar categoría</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="devops">DevOps</option>
        <option value="datascience">Data Science</option>
        <option value="cybersecurity">Cybersecurity</option>
        </select>
        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Categoría</label>
    </div>

    <!-- Campo para imagen -->
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="img" value="default.jpg" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="imagen" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Nombre de la imagen (ej. curso.png)</label>
    </div>

    <!-- Descripción -->
    <div class="relative z-0 w-full mb-5 group">
        <textarea name="descripcion" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
        <label for="descripcion" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Descripción</label>
    </div>


<!-- Switches para tecnologías en dos columnas -->
    <div class="relative z-0 w-full mb-5 group ">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Tecnologías</p>
        
        <!-- Grid de dos columnas -->
        <div class="grid grid-cols-2 gap-2 ">
            <div class="flex items-center mb-4">
                <input id="html" type="checkbox" name="tecnologias" value="HTML" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="html" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">HTML</label>
            </div>

            <div class="flex items-center mb-4">
                <input id="css" type="checkbox" name="tecnologias" value="CSS" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="css" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CSS</label>
            </div>

            <div class="flex items-center mb-4">
                <input id="javascript" type="checkbox" name="tecnologias" value="JavaScript" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="javascript" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">JavaScript</label>
            </div>

            <div class="flex items-center mb-4">
                <input id="api" type="checkbox" name="tecnologias" value="API" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="api" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">API</label>
            </div>

            <div class="flex items-center mb-4">
                <input id="linux" type="checkbox" name="tecnologias" value="Linux" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="linux" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Linux</label>
            </div>

            <div class="flex items-center mb-4">
                <input id="node" type="checkbox" name="tecnologias" value="Node.js" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="node" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Node.js</label>
            </div>

            <div class="flex items-center mb-4">
                <input id="express" type="checkbox" name="tecnologias" value="Express" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="express" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Express</label>
            </div>

            <div class="flex items-center mb-4">
                <input id="otros" type="checkbox" name="tecnologias" value="Otros" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="otros" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Otros</label>
            </div>
        </div>
    </div>

    <!-- Input para horas del curso (solo números) -->
    <div class="relative z-0 w-full mb-5 group">
        <input type="number" name="horas" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="horas" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Horas del curso</label>
    </div>

    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form> `;
    return html;
}

export function modificarCurso(curso){
    let html = `
    <a href="/" type="button" class="mt-6 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 ms-6 ">
            Volver al inicio
        </a>
    <h1 class="text-3xl font-light text-gray-600 my-4 text-center"> Modicar curso <span class="font-medium"> ${curso.nombre}</span></h1>
    <form action='/cursos/modificar/${curso._id}' method='post' class="max-w-md mx-auto mt-8">
    <div class="relative z-0 w-full mb-5 group">

        <input type="text" name="nombre" value="${curso.nombre}" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
        
        <label for="nombre" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre del curso</label>
    </div>

    <!-- Select para categoría -->
    <div class="relative z-0 w-full mb-5 group">
        
    <select name="categoria" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
        
    <option value="${curso.categoria}" disabled selected>${curso.categoria}</option>
        
    <option value="frontend">Frontend</option>
        
    <option value="backend">Backend</option>
        
    <option value="devops">DevOps</option>
        
    <option value="data_science">Data Science</option>
        
    <option value="cybersecurity">Cybersecurity</option>
    
    </select>
        
    <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Categoría</label>
    
    </div>

    <!-- Campo para imagen -->
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="img" value="${curso.img}" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
        <label for="imagen" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Nombre de la imagen (ej. curso.png)</label>
    </div>

    <!-- Descripción -->
    <div class="relative z-0 w-full mb-5 group">
        <textarea name="descripcion" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value="${curso.descripcion}">${curso.descripcion}</textarea>
        
        <label for="descripcion" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Descripción</label>
    </div>


<!-- Switches para tecnologías en dos columnas -->
    <div class="relative z-0 w-full mb-5 group ">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Tecnologías</p>
        
        <!-- Grid de dos columnas -->
        <div class="grid grid-cols-2 gap-2 ">
            <div class="flex items-center mb-4">
                
            <input id="html" type="checkbox" name="tecnologias" value="HTML" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                
            <label for="html" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">HTML</label>
            </div>

            <div class="flex items-center mb-4">
                
            <input id="css" type="checkbox" name="tecnologias" value="CSS" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                
            <label for="css" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CSS</label>
            </div>

            <div class="flex items-center mb-4">
                
            <input id="javascript" type="checkbox" name="tecnologias" value="JavaScript" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                
            <label for="javascript" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">JavaScript</label>
            </div>

            <div class="flex items-center mb-4">
                
            <input id="api" type="checkbox" name="tecnologias" value="API" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                
            <label for="api" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">API</label>
            </div>

            <div class="flex items-center mb-4">
                
            <input id="linux" type="checkbox" name="tecnologias" value="Linux" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                
            <label for="linux" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Linux</label>
            </div>

            <div class="flex items-center mb-4">
                
            <input id="node" type="checkbox" name="tecnologias" value="Node.js" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                
            <label for="node" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Node.js</label>
            </div>

            <div class="flex items-center mb-4">
                
            <input id="express" type="checkbox" name="tecnologias" value="Express" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                
            <label for="express" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Express</label>
            </div>

            <div class="flex items-center mb-4">
                
            <input id="otros" type="checkbox" name="tecnologias" value="Otros" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                
            <label for="otros" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Otros</label>
            </div>
        </div>
    </div>

    <!-- Input para horas del curso (solo números) -->
    <div class="relative z-0 w-full mb-5 group">
        
    <input type="number" name="horas" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value="${curso.horas}"/>
        
    <label for="horas" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Horas del curso</label>
    </div>

    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form> `;
    return html;
}
