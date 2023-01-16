import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";

export const primaryRoute = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
   // errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <h1>Home</h1>
      },
      {
        path: 'perfil',
        element: <h1>Perfil</h1>
      },
      {
        path: 'planes',
        element: <h1>Planes</h1>
      },
      {
        path: 'recursos',
        element: <h1>Recursos</h1>
      },
      {
        path: 'jugar-ahora',
        element: <h1>Jugar Ahora</h1>
      }
    ]
  }
]);