import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from './components/Rutas/ProtectedRoute.jsx';
import AdminRoute from './components/Rutas/AdminRoute.jsx';
import AdminHome from './pages/AdminHome.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Login/Register.jsx';
import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Cursos from './pages/Cursos.jsx';
import DetalleCursos from './components/Cursos/DetalleCurso.jsx'
import Error404Page from './pages/Error404Page.jsx';
import Logout from './components/Login/Logout.jsx'
import Tecnologias from './pages/Tecnologias.jsx'
import Categorias from './pages/Categorias.jsx';
import Profesores from './pages/Profesores.jsx';
import AdminCursos from './components/Admin/AdminCursos.jsx';
import AdminCategorias from './components/Admin/AdminCategorias.jsx';
import AdminTecnologias from './components/Admin/AdminTecnologias.jsx';
import ConfirmDeleteCurso from './components/Admin/ConfrimDeleteCurso.jsx';
import ConfirmDeleteCategoria from './components/Admin/ConfirmDeleteCategoria.jsx';
import ConfirmDeleteTecnologia from './components/Admin/ConfrimDeleteTecnologia.jsx';
import CrearCurso from './components/Admin/CrearCurso.jsx';
import CrearCategoria from './components/Admin/CrearCategoria.jsx';
import CrearTecnologia from './components/Admin/CrearTecnologia.jsx';
import EditarTecnologia from './components/Admin/EditarTecnologia.jsx';
import EditarCategoria from './components/Admin/EditarCategoria.jsx';
import EditarCurso from './components/Admin/EditarCurso.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [ 
      {
        path: "/",
        element: <ProtectedRoute><Home /></ProtectedRoute>, 
      },
      {
        path: "/cursos",
        element: <ProtectedRoute><Cursos /></ProtectedRoute>, 
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "cursos/:id",
        element: <ProtectedRoute> <DetalleCursos/> </ProtectedRoute>
      },
      {
        path: "/tecnologias",
        element: <ProtectedRoute> <Tecnologias/> </ProtectedRoute>
      },
      {
        path: "/categorias",
        element: <ProtectedRoute> <Categorias/> </ProtectedRoute>
      },
      {
        path: "/profesores",
        element: <ProtectedRoute> <Profesores/> </ProtectedRoute>
      },
      {
        path: "/admin",
        element: <AdminRoute><AdminHome /></AdminRoute>
        
      },
      {
        path: "/admin/cursos",
        element: <AdminRoute><AdminCursos /></AdminRoute>
      },
      {
        path: "/admin/categorias",
        element: <AdminRoute><AdminCategorias /></AdminRoute>
      },
      {
        path: "/admin/tecnologias",
        element: <AdminRoute><AdminTecnologias /></AdminRoute>
      },
      {
        path: "/admin/cursos/eliminar/:id",
        element: <AdminRoute><ConfirmDeleteCurso /></AdminRoute>
      },
      {
        path: "/admin/categorias/delete/:id",
        element: <AdminRoute><ConfirmDeleteCategoria /></AdminRoute>
      },
      {
        path: "/admin/tecnologias/delete/:id",
        element: <AdminRoute><ConfirmDeleteTecnologia /></AdminRoute>
      },
      {
        path: "/admin/cursos/new",
        element: <AdminRoute><CrearCurso /></AdminRoute>
      },
      {
        path: "/admin/categoria/new",
        element: <AdminRoute><CrearCategoria /></AdminRoute>
      },
      {
        path: "/admin/tecnologia/new",
        element: <AdminRoute><CrearTecnologia /></AdminRoute>
      },
      {
        path: "/admin/tecnologias/editar/:id",
        element: <AdminRoute><EditarTecnologia /></AdminRoute>
      },
      {
        path: "/admin/categorias/editar/:id",
        element: <AdminRoute><EditarCategoria /></AdminRoute>
      },
      {
        path: "/admin/cursos/editar/:id",
        element: <AdminRoute><EditarCurso /></AdminRoute>
      },
    
    

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)