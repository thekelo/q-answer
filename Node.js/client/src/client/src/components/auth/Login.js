import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';

function Login() {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // Sync user with your backend
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleGoogleLogin} className="google-login-btn">
      Sign in with Google
    </button>
  );
}
