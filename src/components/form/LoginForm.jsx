"use client" 
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const router = useRouter()
  const handleLogin = (data) => {
    if(data.email === "admin@email.com" && data.password === "123456"){
    //   alert("Login Successful");
      document.cookie = "auth=true; path=/"
      router.push("/products");
    }

  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <form
              onSubmit={handleSubmit(handleLogin)}>
                <label className="label">Email</label>
                <input type="email" {...register("email", { required: true, minLength: 5 })} className="input" placeholder="Email" />
                {errors.email?.type === "required" && <p className="text-error text-sm">Email is required</p>}
                {errors.email?.type === "minLength" && <p className="text-error text-sm">Email must be at least 5 characters</p>}


                <br />
                <label className="label">Password</label>
                <input
                  type="password"
                    {...register("password", { required: true, minLength: 6 })}
                  className="input"
                  placeholder="Password"
                />
                {errors.password?.type === "required" && <p className="text-error text-sm">Password is required</p>}
                {errors.password?.type === "minLength" && <p className="text-error text-sm">Password must be at least 6 characters</p>}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
