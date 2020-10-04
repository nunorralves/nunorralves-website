const DB = async (data: string): Promise<firebase.database.Reference> => {
  const firebase = await import('firebase/app');

  await import('firebase/database');

  try {
    firebase.initializeApp({
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
    });
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

  // return firebase.database().ref('views');
  return firebase.database().ref(data);
};

export default DB;
