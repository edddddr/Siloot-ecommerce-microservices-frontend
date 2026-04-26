import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRegister } from "../features/auth/hooks/useRegister";
import { Input } from "../shared/components/Input";
import { Button } from "../shared/components/Button";
import { FcGoogle } from "react-icons/fc";
import { signupImage } from "../assets/images/index"

const Register = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  
  // 1. Handle Server Response
  const { mutate, isPending } = useRegister({
    onSuccess: () => {
      setSuccessMessage("You are registered successfully! Redirecting...");
      
      // Delay navigation slightly so user can read the success message
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },
    onError: (error: any) => {
      // Professional tip: Handle backend errors (e.g. "Email already exists")
      console.error("Signup failed:", error);
    }
  });

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email or phone is required";
    } else if (!emailRegex.test(formData.email) && isNaN(Number(formData.email))) {
      newErrors.email = "Invalid format";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Min. 6 characters required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      mutate(formData);
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row items-center py-10 md:py-20">
      
      <div className="w-full md:w-1/2 h-full min-h-[400px] bg-[#CBE4E8] flex items-center justify-center p-0">
        <img src={signupImage} alt="Signup Visual" className="w-full h-full object-contain pt-10" />
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center px-6">
        <div className="w-full max-w-[370px] flex flex-col gap-10">
          
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-medium text-content-dark">Create an account</h1>
            <p className="text-base text-content-dark">Enter your details below</p>
          </div>

          {/* Success Message Display */}
          {successMessage && (
            <div className="bg-btn-success/20 text-btn-success p-4 rounded border border-btn-success text-center font-medium animate-pulse">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Input name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} variant="underline" error={errors.first_name} />
                <Input name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} variant="underline" error={errors.last_name} />
              </div>
              <Input name="email" placeholder="Email or Phone Number" value={formData.email} onChange={handleChange} variant="underline" error={errors.email} />
              <Input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} variant="underline" error={errors.password} />
            </div>

            <div className="flex flex-col gap-4">
              <Button type="submit" variant="danger" isLoading={isPending} className="w-full py-4 rounded bg-[#DB4444]">
                Create Account
              </Button>

              <button type="button" className="w-full py-4 flex items-center justify-center gap-4 border border-content-muted rounded hover:bg-brand-light transition-colors">
                <FcGoogle size={24} />
                <span className="text-base text-content-dark">Sign up with Google</span>
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center gap-4">
            <p className="text-content-muted">Already have account?</p>
            <Link to="/login#" className="font-medium border-b border-content-muted pb-1 hover:text-brand-accent transition-colors">Log in</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;