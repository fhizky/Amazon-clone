import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: "AIzaSyCB9qWSKCzvtTeYzjrqNs6HMAIFt6RmVgc",
	authDomain: "e-clone-10d76.firebaseapp.com",
	databaseURL: "https://e-clone-10d76.firebaseio.com",
	projectId: "e-clone-10d76",
	storageBucket: "e-clone-10d76.appspot.com",
	messagingSenderId: "409648557624",
	appId: "1:409648557624:web:cd02caf928af27587f00cd",
	measurementId: "G-RJ35H3JCRL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//firestore is a realtime database in firebase
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
