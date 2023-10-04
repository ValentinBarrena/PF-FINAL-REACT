import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqwpMDTOY_iqKQX1J-XsGCc9QC-p64MEo",
  authDomain: "proyectocoder-402cf.firebaseapp.com",
  projectId: "proyectocoder-402cf",
  storageBucket: "proyectocoder-402cf.appspot.com",
  messagingSenderId: "746872734970",
  appId: "1:746872734970:web:94facca7efd4cd507f7543",
  measurementId: "G-MH3PY70FWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
