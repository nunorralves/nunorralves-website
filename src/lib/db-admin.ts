import * as admin from 'firebase-admin';
// import { join } from 'path';
// const cert = join(__dirname, '../service-account.json');
// const cert = join(process.cwd(), '/nextblog-firebase.json');

if (!admin.apps.length) {
  admin.initializeApp({
    // credential: admin.credential.cert(cert),
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      projectId: 'nextblog-6aa55'
    }),
    databaseURL: 'https://nextblog-6aa55.firebaseio.com'
  });
}

export default admin.database();
