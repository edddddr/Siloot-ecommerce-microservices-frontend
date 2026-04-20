import { useState } from "react";
import { useRegister } from "../features/auth/hooks/useRegister";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { mutate, isPending } = useRegister();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(
      { email, password },
      {
        onSuccess: () => {
          // After register → go to login
          navigate("/login");
        },
      }
    );
  };

  return (
    <div className="p-4">
      <h1>Register</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />

        <button type="submit" className="bg-green-500 text-white p-2">
          {isPending ? "Creating..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;