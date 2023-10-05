import { BsGithub, BsGoogle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContextProvider";

function LoginOptions() {
  const { logInWithGoogle, logInWithGithub, handleErrors, errors } =
    useContext(AuthContext);

  const handleSignInWithGoogle = () => {
    logInWithGoogle()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };

  const handleSignInWithGithub = () => {
    logInWithGithub()
      .then((result) => {
        console.log(result.user);
        handleErrors("");
      })
      .catch((error) => {
        console.error(error);
        handleErrors(error);
      });
  };

  return (
    <div className="p-3">
      {errors && <p className="text-red-500 font-bold text-lg"> {errors} </p>}
      <h2 className="text-xl font-semibold text-dark-2">Login With</h2>
      <button
        onClick={handleSignInWithGoogle}
        className="flex items-center gap-2 justify-center rounded w-full border py-2 text-[#3268d9] border-[#3268d9] mt-6 mb-3"
      >
        <BsGoogle />
        login with Google
      </button>
      <button
        onClick={handleSignInWithGithub}
        className="flex items-center gap-2 justify-center rounded w-full border py-2 text-dark-2 border-black/50"
      >
        <BsGithub />
        login with Github
      </button>
    </div>
  );
}

export default LoginOptions;
