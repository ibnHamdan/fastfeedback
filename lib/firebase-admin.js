import admin from "firebase-admin";

const serviceAccount = require("../fastfeedback-d271f-firebase-adminsdk-2wq04-d56d9d70f1.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin.firestore();
