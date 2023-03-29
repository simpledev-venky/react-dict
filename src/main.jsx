import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

const qryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    
 <QueryClientProvider client={qryClient}>
    <App />
 </QueryClientProvider>
)
