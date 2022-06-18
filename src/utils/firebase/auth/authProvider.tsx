import { User } from 'firebase/auth';
import { ReactNode, useEffect, useState } from 'react';
import { auth } from './auth';
import { AuthContext } from './authContext';

type Props = {
  children: ReactNode;
};

const AuthProvider = (props: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return auth.onAuthStateChanged(authUser => {
      console.log(`authUser`, authUser);
      setUser(authUser);
    });
  }, []);

  return <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
