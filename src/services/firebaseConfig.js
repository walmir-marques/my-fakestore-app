import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXTFhHtyvUOCb_xV8lP9hcHvGsqHXAULo",
  authDomain: "my-fakestore-app.firebaseapp.com",
  projectId: "my-fakestore-app",
  storageBucket: "my-fakestore-app.appspot.com",
  messagingSenderId: "700581833141",
  appId: "1:700581833141:web:bb90be97b0c87ef54991fc",
};

export const app = initializeApp(firebaseConfig);
