import { registerUser } from "../firebase/app.js";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [messageError, setMessageError] = useState("");
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.current) return;
    if (!form.current.email.value) return setMessageError("Email is required");
    if (!form.current.password.value)
      return setMessageError("Password is required");
    if (form.current.password.value.length < 6)
      return setMessageError("Password must be at least 6 characters");
    setMessageError("");
    registerUser(form.current.email.value, form.current.password.value);
    form.current.reset();
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <small>{messageError}</small>
        <div className="w-full max-w-xs">
          <h1 className="mb-10">Authenticacion</h1>
          <form action="#" ref={form} onSubmit={handleSubmit}>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                placeholder="Ingrese su email"
                required
              />
            </label>

            <label htmlFor="password">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                placeholder="Ingrese su password"
                required
              />
            </label>
            <button type="submit">Login</button>
          </form>
          <a href="#">Google</a>
        </div>
      </div>
    </>
  );
}
