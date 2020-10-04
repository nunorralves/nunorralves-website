import * as admin from 'firebase-admin';
// import { join } from 'path';
// const cert = join(__dirname, '../service-account.json');
// const cert = join(process.cwd(), '/nextblog-firebase.json');

// const clientCredentials = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
//   privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY
// };

// // Check that `window` is in scope for the analytics module!
// if (typeof window !== 'undefined' && !admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//       clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY
//     }),
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     serviceAccountId: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     databaseAuthVariableOverride: {
//       uid: 'service_account'
//     }
//   });
//   // To enable analytics. https://firebase.google.com/docs/analytics/get-started
//   // if ('measurementId' in clientCredentials) firebase.analytics()
// }

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
  });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack);
  }
}

export default admin.database();
