import { Link } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContextProvider";

const Register = () => {
  const { createUser, errors, handleErrors } = useContext(AuthContext);

  const handleRegistration = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    createUser(email, password)
      .then(() => {
        handleErrors("");
        console.log("User created successfully");
      })
      .catch((error) => {
        console.error(error);
        handleErrors(error.message);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="w-full md:w-1/2 mx-auto">
        <div className="my-32">
          <div className="flex-col">
            <div className="mb-6">
              <h1 className="text-5xl font-bold text-center">Register now!</h1>
            </div>
            <div className="flex-shrink-0 w-full shadow-2xl bg-base-100 rounded-xl">
              <div className="card-body">
                <form onSubmit={handleRegistration}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image URL</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="photo url"
                      className="input input-bordered"
                    />
                  </div>
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
                      <span className="text-sm link link-hover">
                        Already have a account?
                      </span>
                      <button
                        type="button"
                        className="py-1.5 px-4 border ms-1 rounded-lg bg-blue-700 text-white"
                      >
                        <Link to="/login">Login</Link>
                      </button>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Register
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
};

export default Register;
