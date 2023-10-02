import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/bootstrap/css/bootstrap.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

// @todo:
// 1. react router (add "about" page")
// 2. react hook form (allow to search by name)
// 3. test form
// 4. test query api
// 5. add login page (pass hardcoded on frontend side)
// 6. add backend storing password in db
// 7. add backend storing pixabay token and returning json
// 8. add second source of images


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </React.StrictMode>,
)
