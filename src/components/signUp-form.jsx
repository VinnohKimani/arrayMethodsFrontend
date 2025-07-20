import { useForm } from "react-hook-form";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Data:", data);
    alert("Account created successfully!");
    reset(); // this will clear the form
  };

  return (
    <div className=" bg-white p-6 rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Create an Account
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          {" "}
          <label htmlFor="">First name</label>
          <input
            type="text"
            {...register("firstName", { required: "First name is required" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="First name"
          />
          {errors.firstName && (
            <p className="text-red-600 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          {" "}
          <label htmlFor="">Last name</label>
          <input
            type="text"
            {...register("lastName", { required: "Last Name is required" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Last name"
          />
          {errors.lastName && (
            <p className="text-red-600 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
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
        <div>
          {" "}
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "please confirm password",
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="confrim password"
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};
