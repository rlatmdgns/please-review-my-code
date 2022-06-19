import { User } from 'firebase/auth';
import { ReactNode, useEffect, useState } from 'react';
import { auth } from './auth';
import { AuthContext } from './authContext';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../db/db';

type Props = {
  children: ReactNode;
};

const AuthProvider = (props: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const { uid, displayName, email } = authUser;
        const q = await query(collection(db, 'users'), where('uid', '==', authUser?.uid));

        const querySnapshot = await getDocs(q);

        if (querySnapshot.size === 0) {
          await addDoc(collection(db, 'users'), { uid, displayName, email });
        }
      }

      setUser(authUser);
    });
  }, []);

  return <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
