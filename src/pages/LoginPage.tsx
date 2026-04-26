import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../features/auth/hooks/useLogin"; // Assuming your login hook
import { Input } from "../shared/components/Input";
import { Button } from "../shared/components/Button";
import { signupImage } from "../assets/images/index"

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.email) newErrors.email = "Email or phone is required";
    if (!formData.password) newErrors.password = "Password is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      mutate(formData, {
        onSuccess: () => {
          // Navigate to home after successful login
          navigate("/");
        }
      });
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row items-center py-10 md:py-20">
      
      {/* --- Column 1: Visual Section (Matches Register) --- */}
      <div className="w-full md:w-1/2 h-full min-h-[400px] bg-[#CBE4E8] flex items-center justify-center p-0">
        <img 
          src={signupImage} 
          alt="Login Visual" 
          className="w-full h-full object-contain pt-10 md:pt-20" 
        />
      </div>

      {/* --- Column 2: Form Section --- */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 md:px-0">
        <div className="w-full max-w-[370px] flex flex-col gap-10">
          
          {/* Row 1: Header */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-medium tracking-wider text-content-dark">
              Log in to Exclusive
            </h1>
            <p className="text-base font-normal text-content-dark">
              Enter your details below
            </p>
          </div>

          {/* Row 2: Inputs & Parallel Actions */}
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8">
              <Input 
                name="email"
                type="text" 
                placeholder="Email or Phone Number" 
                variant="underline"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <Input 
                name="password"
                type="password" 
                placeholder="Password" 
                variant="underline"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />
            </div>

            {/* Parallel Button and Link */}
            <div className="flex items-center justify-between gap-4">
              <Button 
                type="submit"
                variant="danger" 
                isLoading={isPending}
                className="px-12 py-4 rounded bg-[#DB4444]"
              >
                Log In
              </Button>

              <Link 
                to="/register#" 
                className="text-brand-accent hover:underline transition-all font-medium"
              >
                Forget Password?
              </Link>
            </div>
          </form>

          {/* Optional: Register redirection if they don't have an account */}
          <div className="flex items-center justify-center gap-2">
            <p className="text-content-muted">Don't have an account?</p>
            <Link to="/register" className="font-medium border-b border-content-muted">
              Register
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
};


export default LoginPage