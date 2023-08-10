import { useState } from "react";
import NavbarAccent from "../layouts/NavbarAccent";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormatValid = emailPattern.test(email);
    if (!email) {
      errors.push("Email is required");
    } else if (!isFormatValid) {
      errors.push("Enter valid email");
    }
    if (errors.length === 0) {
      console.log("Form is valid");
    } else {
      setError(errors);
    }
  };
  return (
    <div>
      <NavbarAccent />
      <div className="d-flex justify-content-center align-items-center parent">
        <div className="sign-In my-4">
          <div className="text-center pb-1 sign-in-heading">
            <h1 className="mb-5 sign-in-header">Forgotten Password</h1>
            <p className="sign-in-sub-heading">
              Enter your Email to reset password
            </p>
          </div>
          <form action="" className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Placeholder"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.length > 0 && <p>{error}</p>}
            </div>
            {error.length === 0 && (
              <Link
                to="/PasswordRecovery"
                className="text-decoration-none text-white"
              >
                <button className="sign-in-btn">
                  Reset Password
                </button>
              </Link>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
