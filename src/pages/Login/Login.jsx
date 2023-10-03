import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContextProvider";

function Login() {
  const { loginUser, errors, handleErrors } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const handleLoginClick = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((userCredential) => {
        console.log("User login successful", userCredential.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => handleErrors(error.message));
  };

  return (
    <div>
      <Navbar />
      <div className="w-full md:w-1/2 mx-auto">
        <div className="my-32">
          <div className="flex-col">
            <div className="mb-6">
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
            </div>
            <div className="flex-shrink-0 w-full shadow-2xl bg-base-100 rounded-xl">
              <div className="card-body">
                <form onSubmit={handleLoginClick}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <Link className="label-text-alt link link-hover">
                        Forgot password?
                      </Link>
                      <span className="text-sm">Or</span>
                      <div>
                        <span className="label-text-alt link link-hover">
                          New to this site?
                        </span>
                        <button
                          type="button"
                          className="py-1 px-3 border ms-1 rounded-lg bg-blue-700 text-white"
                        >
                          <Link to="/register">Register</Link>
                        </button>
                      </div>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
                {errors && (
                  <p className="text-red-500 font-semibold text-xl text-center mt-5">
                    {errors}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
