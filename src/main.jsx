import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import "./assets/styles/main.css";
import router from './routes/routes.jsx';

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
