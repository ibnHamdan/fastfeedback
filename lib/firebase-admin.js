import admin from "firebase-admin";

const serviceAccount = require("../fastfeedback-d271f-firebase-adminsdk-2wq04-d56d9d70f1.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: "https://fastfeedback-d271f.firebaseio.com",
  });
}

export default admin.firestore();
