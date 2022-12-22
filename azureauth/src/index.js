import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import {EventType, PublicClientApplication} from "@azure/msal-browser";

const pca = new PublicClientApplication({
  auth:{
    clientId:"41e1c2ad-f9b4-43b9-a132-fc6dd8d2f255",
    authority:"https://login.microsoftonline.com/2ecee660-4610-4953-91b5-abd83b8c675b",
    redirectUri:"/"
  }
})

pca.addEventCallback(event => {
  if(event.eventType === EventType.LOGIN_SUCCESS){
    console.log("🚀 ~ file: index.js:19 ~ event", event)
    
    pca.setActiveAccount(event.payload.account);
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App msalInstance = {pca}/>
  </React.StrictMode>
);

