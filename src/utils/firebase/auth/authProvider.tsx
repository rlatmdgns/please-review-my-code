import { User } from 'firebase/auth';
import { ReactNode, useEffect, useState } from 'react';
import { auth } from './auth';
import { AuthContext } from './authContext';
import { fbService } from 'utils/firebase/db/db';

type Props = {
  children: ReactNode;
};

const AuthProvider = (props: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        await fbService.createUser(authUser);
      }

      setUser(authUser);
    });
  }, []);

  return <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
