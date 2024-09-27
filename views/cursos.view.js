export function crearPagina(titulo, contenido){
    let html = `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${titulo}</title>
            <link href="./src/output.css" rel="stylesheet">
            <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" />
            
        </head>
        <body>
            <nav class="border-gray-200 bg-gray-200 shadow-lg px-4 py-4">
                <div class="container mx-auto flex flex-wrap items-center justify-between h-10">
                    <a href="#" class="flex items-center space-x-3">
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
                    <a href="/" class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Home</a>
                </li>
                <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Cursos <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                <!-- Dropdown menu -->
                <div id="dropdownNavbar" class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                    <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="/cursos/frontend" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">FrontEnd</a>
                    </li>
                    <li>
                        <a href="/cursos/backend" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">BackEnd</a>
                    </li>
                    <li>
                        <a href="/cursos/devops" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">DevOps</a>
                    </li>
                    <li>
                        <a href="/cursos/datascience" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Data Science</a>
                    </li>
                    <li>
                        <a href="/cursos/cybersecurity" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Cyber Security</a>
                    </li>
                    </ul>
                </div>
            </li>
                <li>
                    <a href="/nosotros" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Nosotros</a>
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

    

    <form class="max-w-md mx-auto">
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

    <!-- Descripción -->
    <div class="relative z-0 w-full mb-5 group">
        <textarea name="descripcion" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
        <label for="descripcion" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Descripción</label>
    </div>

    <!-- Select para tecnologías -->
    <div class="relative z-0 w-full mb-5 group">
        <select name="tecnologias" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>
        <option value="" disabled selected>Seleccionar tecnología</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="API">API</option>
        <option value="linux">Linux</option>
        <option value="node.js">Node.js</option>
        <option value="express">Express</option>
        <option value="otros">Otros</option>
        </select>
        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tecnología</label>
    </div>

    <!-- Input para horas del curso (solo números) -->
    <div class="relative z-0 w-full mb-5 group">
        <input type="number" name="horas" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="horas" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Horas del curso</label>
    </div>

    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

    `;
    return html;
};

export function crearCursos(cursos) {
    let html = `
    <section class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">`;
    if (cursos.length === 0) {
        html += `<p>Lo lamentamos, No hay cursos disponibles.</p>`;
    } else {
        cursos.forEach(curso => {
        html += `
        <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
                alt="${curso.nombre}"
                src="../img/${curso.img}"
                class="h-56 w-full object-cover"
            />

            <div class="bg-white p-4 sm:p-6">
                <p class="block text-xs text-gray-500">Duración: ${curso.horas} horas</p>

                <a href="#">
                    <h2 class="mt-0.5 text-lg text-gray-900">${curso.nombre}</h2>
                </a>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    ${curso.descripcion}
                </p>

                <a href="/cursos/${curso.id}" class="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Más Info + 
                    </span>
                </a>
            </div>
        </article>`;
        });
    }
    html += `</section>`;

    return html;
}

export function detalleCurso(curso){
    let html = `
    <article class="flex bg-white transition hover:shadow-xl">
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <p>Duración: ${curso.horas} horas</p>
        </div>

        <div class="hidden sm:block sm:basis-56">
            <img
            alt="${curso.nombre}"
            src="../img/${curso.img}"
            class="aspect-square h-full w-full object-cover"
            />
        </div>

        <div class="flex flex-1 flex-col justify-between">
            <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
                <h2 class="font-bold uppercase text-gray-900">
                ${curso.nombre}
                </h2>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                ${curso.descripcion}
            </p>
            </div>

            <div class="flex gap-x-2">
            `;
            curso.tecnologias.forEach(tag => {
                html += `<span class="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">${tag}</span>`;
            });
            html += `
            </div>
        </div>
        </article>
    `;

    return html;
}

