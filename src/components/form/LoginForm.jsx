"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion"; // optional - for smooth animations

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    // Simulate login (replace with real API call later)
    if (data.email === "admin@email.com" && data.password === "123456") {
      document.cookie = "auth=true; path=/; max-age=3600"; // 1 hour
      router.push("/products");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="grid md:grid-cols-2 overflow-hidden rounded-2xl shadow-2xl bg-base-100">
          {/* Left Side - Illustration / Welcome */}
          <div className="relative hidden md:flex flex-col justify-center p-10 lg:p-16 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="space-y-6 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >
                Welcome back!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-neutral opacity-80 max-w-md"
              >
                We're glad to see you again. Log in to continue shopping for your little heroes at Hero Kids!
              </motion.p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">✓</div>
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">✓</div>
                  <span>Fast Checkout</span>
                </div>
              </div>
            </div>

            {/* Optional floating elements / decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          {/* Right Side - Login Form */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <h2 className="text-3xl font-bold mb-2 text-center md:text-left">Login</h2>
              <p className="text-neutral mb-8 text-center md:text-left">
                Enter your credentials to access your account
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="hello@herokids.com"
                    className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-error text-sm mt-1.5">{errors.email.message}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="label">
                    <span className="label-text font-medium">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className={`input input-bordered w-full ${errors.password ? "input-error" : ""}`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-error text-sm mt-1.5">{errors.password.message}</p>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="cursor-pointer flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <span>Remember me</span>
                  </label>

                  <a href="#" className="link link-hover link-primary">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>

              <div className="divider my-8">OR</div>

              <p className="text-center text-sm">
                Don't have an account?{" "}
                <a href="/signup" className="link link-primary font-medium">
                  Create one now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}