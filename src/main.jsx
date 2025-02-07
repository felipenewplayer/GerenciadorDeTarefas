import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { TaskPage } from './components/pages/TaskPage'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
        },
        {
            path: "/task",
            element: <TaskPage/>,
        },
    ])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
