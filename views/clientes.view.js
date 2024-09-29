export function crearCardsClientes(clientes) {
    let html = `
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-5xl font-light text-gray-600 mt-6 ms-8">Lista de Clientes</h1>

        <div class="flex justify-between items-center mt-6 mx-4">
        
        <a href="/" type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 ms-4 ">
            Volver al inicio
        </a>

        <div class="flex space-x-4 me-4">
            
            <a href="/clientes/nuevo" type="button" class="flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">
            <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
            </svg>
            </a>

        </div>
    </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ms-8">
    `;

    // Comprobar si la lista de clientes está vacía
    if (clientes.length === 0) {
        html += `<p class="text-center text-gray-700">No hay clientes registrados</p>`;
    } else {
        // Generar tarjetas para cada cliente
        clientes.forEach(cliente => {
            html += `
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <div class="w-300 h-300 flex items-center justify-center">
                    <img src="../img/${cliente.foto}" alt="${cliente.nombre}" class="w-300 h-300 object-contain" />
                </div>
                <div class="p-4">
                    <h2 class="text-xl font-semibold">${cliente.nombre}</h2>
                    <p class="text-gray-700 mb-2">${cliente.descripcion}</p>
                    <div class="flex justify-between mt-4">
                        <a href="/clientes/modificar/${cliente._id}" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Modificar</a>
                        <a href="/clientes/eliminar/${cliente._id}" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Eliminar</a>
                        <a href="/clientes/cursos/nuevo?clienteId=${cliente._id}" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Agregar Curso</a>
                        <a href="/clientes/cursos?clienteId=${cliente._id}" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Ver Cursos</a>
                    </div>
                </div>
            </div>

            `;
        });
    }

    html += `</div></div>`;
    return html;
}

export function crearClienteNuevo() {
    let html = `
    <a href="/" type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 ms-6 mt-6 ">
        Volver al inicio
    </a>
    <h1 class="text-3xl font-light text-gray-600 my-4 text-center"> Agregar un nuevo cliente </h1>

    <form action='/clientes/nuevo' method='post' class="max-w-md mx-auto">
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="nombre" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="nombre" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre del cliente</label>
        </div>

        <!-- Campo para imagen -->
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="foto" value="user.png" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="imagen" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Nombre de la imagen (ej. user.png)</label>
        </div>

        <!-- Descripción -->
        <div class="relative z-0 w-full mb-5 group">
            <textarea name="descripcion" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
            <label for="descripcion" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:font-medium peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Descripción</label>
        </div>

        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar Cliente</button>
    </form>`;
    return html;
}

export function modificarCliente(cliente) {
    let html = `
    <a href="/" type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 ms-6 mt-6 ">
        Volver al inicio
    </a>
    <h1 class="text-3xl font-light text-gray-600 my-4 text-center"> Modificar usuario: ${cliente.nombre} </h1>

    <form action='/clientes/modificar/${cliente._id}' method='post' class="max-w-md mx-auto mt-6">
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="nombre" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value="${cliente.nombre}" required />
            <label for="nombre" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre del cliente</label>
        </div>

        <!-- Campo para imagen -->
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="foto" value="${cliente.foto}" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="imagen" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Nombre de la imagen (ej. user.png)</label>
        </div>

        <!-- Descripción -->
        <div class="relative z-0 w-full mb-5 group">
            <textarea name="descripcion" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>${cliente.descripcion}</textarea>
            <label for="descripcion" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:font-medium peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Descripción</label>
        </div>

        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Modificar Cliente</button>
    </form>`;
    return html;
}

export function crearCursoNuevo(cliente){
    let html = `
    <a href="/" type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 ms-6 mt-6 ">
    Volver al inicio
    </a>
    <h1 class="text-3xl font-light text-gray-600 my-4 text-center"> Agregar un curso </h1>

    <form action='/clientes/cursos/nuevo' method='post' class="max-w-md mx-auto">
    <div class="relative z-0 w-full mb-5 group">
        
        <input type="hidden" name="clienteId" value="${cliente._id}"/> 
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

export function crearCursos(cursos, clienteId) {

    let html = `
    <h1 class="text-5xl font-light text-gray-600 mt-6 ms-8">Cursos del usuario</h1>
    <div class="flex justify-between items-center mt-6 mx-4">
        
        <a href="/" type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 ms-4 ">
            Volver al inicio
        </a>
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