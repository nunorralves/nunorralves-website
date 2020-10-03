import * as admin from 'firebase-admin';
import { join } from 'path';
// const cert = join(__dirname, '../service-account.json');
const cert = join(process.cwd(), '/nextblog-firebase.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(cert),
    databaseURL: 'https://nextblog-6aa55.firebaseio.com'
  });
}

export default admin.database();
