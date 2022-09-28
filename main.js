const firebaseApp = firebase.initializeApp({ /* Firebase config */
  apiKey: "AIzaSyAFCNA8R6VUVe9BGrgTSL9FPfd5TV1-3cI",

  authDomain: "edtech-9afab.firebaseapp.com",

  projectId: "edtech-9afab",

  storageBucket: "edtech-9afab.appspot.com",

  messagingSenderId: "96142409552",

  appId: "1:96142409552:web:4f3d03c26b4be92a1cb655",

  measurementId: "G-KKNQV1E2ZT"

});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp = ()=>{
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  //firebase code
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    window.location.href = "signIn.html";
  })
  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
  });
}

const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        window.location.href = "landing.html";
      })
      .catch((error) => {
          console.log(error.code);
          console.log(error.message)
      });
}