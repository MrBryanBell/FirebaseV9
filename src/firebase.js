import {initializeApp} from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyBT8rWqZ6f8Y9j5xKLajFHqr3S_5vOStNg",
    authDomain: "svelte-app-f4502.firebaseapp.com",
    databaseURL: "https://svelte-app-f4502-default-rtdb.firebaseio.com",
    projectId: "svelte-app-f4502",
    storageBucket: "svelte-app-f4502.appspot.com",
    messagingSenderId: "269161675215",
    appId: "1:269161675215:web:8f3e039116a14a59767aba"
};

export const firebaseApp = initializeApp(firebaseConfig)

