import { User } from 'firebase/auth';
import { ReactNode, useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import { auth } from './auth';
import { AuthContext } from './authContext';
import { NAME_ATOM, IMAGE_ATOM, EMAIL_ATOM } from 'store';
import { fbService } from 'utils/firebase/db';

type Props = {
  children: ReactNode;
};

interface IUser extends User {
  reloadUserInfo?: {
    screenName: string;
  };
}

const AuthProvider = (props: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const setUserName = useSetAtom(NAME_ATOM);
  const setUserImage = useSetAtom(IMAGE_ATOM);
  const setUserEmail = useSetAtom(EMAIL_ATOM);

  useEffect(() => {
    return auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        await fbService.createUser(authUser);

        const AUTH_USER = authUser as IUser;

        setUser(AUTH_USER);
        setUserName(AUTH_USER?.reloadUserInfo?.screenName);
        setUserImage(AUTH_USER?.photoURL);
        setUserEmail(AUTH_USER?.email);
      }
    });
  }, []);

  return <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
