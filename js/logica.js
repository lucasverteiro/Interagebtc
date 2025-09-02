// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8y6PN5YCQHMNPSNWrVXEDDjB_PyJJ9r0",
  authDomain: "interagebtc.firebaseapp.com",
  databaseURL: "https://interagebtc-default-rtdb.firebaseio.com",
  projectId: "interagebtc",
  storageBucket: "interagebtc.firebasestorage.app",
  messagingSenderId: "947810202435",
  appId: "1:947810202435:web:831e18d572d3bd51f2b5f6",
  measurementId: "G-0KLJERD8EM"
};
// Initializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function salvarEmail() {
    const email = document.getElementById("email").value;
    if (email) {
        try{
            const docRef = await addDoc(collection(db, "email"), {
                endereco: email, dataSalvo: new Date()
            });
            console.log("Email salvo com ID:", docRef.id);
            alert("Email salvo com sucesso!");

document.getElementById("email").value = '';

window.location.href = "https://lucasverteiro.github.io/Interagebtc";
        } catch (e) {
            console.error("Erro ao adicionar documento: ", e);
            alert("Erro ao salvar o email. Tente novamente.");
        }
    } else {
            alert("Por favor, digite um endereço de e-mail.");
    }
}

document.getElementById("btnemail").addEventListener("click", salvarEmail)

let segundos = 15;
const temporizadorElemento = document.getElementById('temporizador')
function atualizarTemporizador() {
    temporizadorElemento.textContent = segundos;
    segundos--;
    if (segundos < 0) {
        window.history.back();
    } else {
        setTimeout(atualizarTemporizador,1000)
    }
}

atualizarTemporizador();

function clicar(){
    var eml = window.document.getElementById('email')
    if (eml) {
        console.open("https://lucasverteiro.github.io/Interagebtc")
    } else {
        
    }
}

var end = window.document.getElementById('endereço')
eml.addEventListener('click', clicar)
