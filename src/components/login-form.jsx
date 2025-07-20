import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Login Successfull");
    reset(); 
  };

  return (
    <div className=" bg-white p-6 rounded-2xl shadow-md space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Welcome Back
        </h2>
      </div>
      <div className="text-center text-sm">
        I don't have an account?{" "}
        <a
          href="/signUp"
          className="underline underline-offset-4 hover:cursor-pointer"
        >
          SignUp
        </a>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          {" "}
          <label htmlFor="email">Email</label>
          <input
            type="text"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="email"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <div>
          {" "}
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="+254 712345678"
          />
          {errors.phoneNumber && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <div>
          {" "}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="passowrd"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};
