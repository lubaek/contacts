import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBBTlgmnpmzq_KoaKIeEDP_gbQt1RQSPSo",
	authDomain: "contacts-4e3d4.firebaseapp.com",
	projectId: "contacts-4e3d4",
	storageBucket: "contacts-4e3d4.appspot.com",
	messagingSenderId: "45917142728",
	appId: "1:45917142728:web:6e9108dbe1b0552dd7affd",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
