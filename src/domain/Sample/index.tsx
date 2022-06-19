import { signInWithPopup, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { auth, githubProvider, AuthContext } from '../../utils/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../utils/firebase/db/db';

const Sample = () => {
  const user = useContext(AuthContext);

  const logout = () => {
    signOut(auth).then(() => {
      console.log('logout');
    });
  };

  const login = () => {
    signInWithPopup(auth, githubProvider).then((res) => {
      console.log(res);
    });
  };

  function checkUserInfo() {
    console.log(user);
  }

  async function myTest() {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  return (
    <>
      {user && (
        <table>
          <tbody>
            <tr>
              <th>displayName</th>
              <td>{user.displayName}</td>
            </tr>
            <tr>
              <th>email</th>
              <td>{user.email}</td>
            </tr>
          </tbody>
        </table>
      )}

      <form>
        <button type="button" onClick={login}>
          로그인
        </button>
        <button type="button" onClick={logout}>
          로그아웃
        </button>
        <button type="button" onClick={checkUserInfo}>
          유저정보확인
        </button>

        <button type="button" onClick={myTest}>
          test
        </button>
      </form>
    </>
  );
};

export default Sample;
