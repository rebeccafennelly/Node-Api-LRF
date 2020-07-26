import * as admin from 'firebase-admin';
import serviceAccount from './serviceAccount.firebase';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://node-api-f7b5e.firebaseio.com",
});

export const firestore = admin.firestore();

export const functions = admin.functions;