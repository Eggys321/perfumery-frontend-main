import { useState } from "react";
import NavbarAccent from "../layouts/NavbarAccent";
import eyeclose from "../assets/eye-close.svg";
import eyeopen from "../assets/eye-open.svg";

const PasswordRecovery = () => {
  const [newPassword, SetnewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState({});
  const [reveal, setReveal] = useState(false);
  const [reveal2, setReveal2] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!newPassword) {
      errors.newPassword = "Password is required!";
    } else if (newPassword.length < 5) {
      errors.newPassword = "Password length must be greater than 5!";
    }

    if (!confirmNewPassword) {
      errors.confirmNewPassword = "Password is required!";
    } else if (confirmNewPassword !== newPassword) {
      errors.confirmNewPassword = "Both passwords must match!";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form is valid");
    } else {
      setError(validationErrors);
    }
  };

   const handleReveal = () => {
    setReveal(!reveal);
  };
   const handleReveal2 = () => {
    setReveal2(!reveal2);
  };
  return (
    <div>
      <NavbarAccent />
      <div className="d-flex justify-content-center align-items-center parent">
        <div className="sign-In my-4">
          <div className="text-center pb-1 sign-in-heading">
            <h1 className="mb-5 sign-in-header">Password Reset</h1>
            <p className="sign-in-sub-heading">Enter your new password</p>
          </div>
          <form
            action=""
            className="d-flex flex-column gap-4"
            onSubmit={handleSubmit}
          >
            <div className="d-flex flex-column gap-1 password-input">
              <label htmlFor="password">New Password</label>
              <input
                type={reveal ? "text" : "password"}
                id="password"
                placeholder="Placeholder"
                value={newPassword}
                onChange={(e) => SetnewPassword(e.target.value)}
              />
               <img
                className="reveal-image"
                onClick={handleReveal}
                src={reveal ? eyeclose : eyeopen}
                alt=""
              />
              {error.newPassword && (
                <p className="error-message">{error.newPassword}</p>
              )}
            </div>
            <div className="d-flex flex-column gap-1 password-input">
              <label htmlFor="password">Confirm New Password</label>
              <input
                type={reveal2 ? "text" : "password"}
                id="password"
                placeholder="Placeholder"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
               <img
                className="reveal-image"
                onClick={handleReveal2}
                src={reveal2 ? eyeclose : eyeopen}
                alt=""
              />
              {error.confirmNewPassword && (
                <p className="error-message">{error.confirmNewPassword}</p>
              )}
            </div>
            <button type="submit" className="sign-in-btn">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
