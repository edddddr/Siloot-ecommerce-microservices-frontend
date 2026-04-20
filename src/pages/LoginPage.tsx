import { useState } from "react";
import { useLogin } from "../features/auth/hooks/useLogin";

const LoginPage = () => {
  const { mutate, isPending } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate({ email, password });
};

  return (
    <div className="p-4">
      <h1>Login</h1>

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

        <button type="submit" className="bg-blue-500 text-white p-2">
          {isPending ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;