const DB = async (data: string): Promise<firebase.database.Reference> => {
  const firebase = await import('firebase/app');

  await import('firebase/database');
  let ref: firebase.database.Reference = null;
  try {
    if (typeof window !== 'undefined' && !firebase.apps.length) {
      firebase.initializeApp({
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
      });
      // ref = firebase.database().ref('views');
      ref = firebase.database().ref(data);
    }
  } catch (error) {
    /*
     * We skip the "already exists" message which is
     * not an actual error when we're hot-reloading.
     */
    if (!/already exists/u.test(error.message)) {
      // eslint-disable-next-line no-console
      console.error('Firebase initialization error', error.stack);
    }
  }

  return ref;
};

export default DB;
