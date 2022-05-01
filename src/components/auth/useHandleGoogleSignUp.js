import {
  getAdditionalUserInfo,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { useState } from 'react';

export const useHandleGoogleSignUp = (role) => {
  const [userInfo, setUserInfo] = useState({});
  const provider = new GoogleAuthProvider();
  const handleGoogleSignUp = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        return result;
      })
      .then((result) => {
        const loggedNameRole = result?.user?.displayName?.split(',');
        const newUser = getAdditionalUserInfo(result).isNewUser;
        if (!newUser && role !== loggedNameRole[1]) {
          alert(' User is already signed in as ' + loggedNameRole[1]);
        } else if (newUser) {
          updateUserInfo(result);
        } else {
          console.log({ result });
          setUserInfo({
            name: loggedNameRole[0],
            role: loggedNameRole[1],
            email: result.user.email,
            photoURL: result.user.photoURL,
          });
          alert('You are signed in successfully');
        }
      })
      .catch((error) => {
        const { email, errorCode, errorMessage } = error;
        console.log({ errorCode, errorMessage, email });
      });

    const updateUserInfo = (result) => {
      updateProfile(auth.currentUser, {
        displayName: result.user.displayName + ',' + role,
      })
        .then(() => {
          console.log('update', { result });
          alert('New user signed in successfully');
        })
        .catch((error) => {
          console.log('update err', error);
        });
    };
  };
  return { userInfo, handleGoogleSignUp };
};
