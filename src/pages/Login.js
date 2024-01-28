import { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthGoogleContext } from "../contexts/AuthGoogle";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);
  const navigate = useNavigate();

  async function loginGoogle() {
    await signInGoogle();
  }

  useEffect(() => {
    // Verificar o estado de autenticação e redirecionar
    if (signed) {
      navigate("/home");
    }
  }, [signed, navigate]);

  return (
    <div className="w-full h-screen z-20 flex justify-center items-center bg-white absolute top-0 left-0">
      <button className="text-2xl" onClick={loginGoogle}>
        <FcGoogle className="inline-block" /> Login
      </button>
    </div>
  );
};
