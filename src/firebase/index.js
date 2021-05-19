import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCafh8MSQHLBSZGJlKcjE8uWERYsWHYsJc",
  authDomain: "icon-6a096.firebaseapp.com",
  projectId: "icon-6a096",
  storageBucket: "icon-6a096.appspot.com",
  messagingSenderId: "383614351849",
  appId: "1:383614351849:web:54aba39027d5247c393378"
};

/*
const firebaseConfig = {
	"apiKey": "AIzaSyBKVVBcUrqYjOcNrZIB1PWpplw0vBCtoBs",
	"authDomain": "redballoon-redjunior.firebaseapp.com",
	"databaseURL": "https://redballoon-redjunior.firebaseio.com",
	"projectId": "redballoon-redjunior",
	"storageBucket": "redballoon-redjunior.appspot.com",
	"messagingSenderId": "206080050985"

};
*/

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };