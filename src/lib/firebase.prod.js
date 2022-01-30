import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const config = {
	apiKey: "AIzaSyDMvFqo9aLgYnmfiDxylZhU37C7gaXPIX0",
	authDomain: "nexflix-clone-8ac98.firebaseapp.com",
	projectId: "nexflix-clone-8ac98",
	storageBucket: "nexflix-clone-8ac98.appspot.com",
	messagingSenderId: "761044393544",
	appId: "1:761044393544:web:64dbef20b1edf19a18c27d",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
