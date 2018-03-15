/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */ 

//esto aun no funciona

// Initialize Firebase

        var config = {
            apiKey: "AIzaSyBRfZdgrnRTpB_siiWS7YZAqxYl6DKUNZ0",
            authDomain: "funnypets-d3a7a.firebaseapp.com",
            databaseURL: "https://funnypets-d3a7a.firebaseio.com",
            projectId: "funnypets-d3a7a",
            storageBucket: "",
            messagingSenderId: "974970038538"
        };
        firebase.initializeApp(config);
        var id = document.getElementById("proof");
        //referencia de lla base de datos
        var dbref = firebase.database().ref().child("text");
        dbref.on('value',snap=>id.innerHTML=snap.val());
