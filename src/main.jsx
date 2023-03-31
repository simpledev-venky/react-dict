import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import { Auth0Provider } from "@auth0/auth0-react";

const qryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    
 <QueryClientProvider client={qryClient}>

    <Auth0Provider
    domain="dev-jvowp7i43sjvaixt.us.auth0.com"
    clientId="Rj5TMawUQtqSIaIy7C18dUQeXWwRCrL0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
  </Auth0Provider>

 </QueryClientProvider>
)
