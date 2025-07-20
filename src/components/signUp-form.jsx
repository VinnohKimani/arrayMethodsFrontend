export const SignUpForm = () => {
  return (
    <div className=" bg-white p-6 rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Create an Account
      </h2>
      <form action="" className="space-y-4">
        <label htmlFor="">First name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="First name"
          required
        />
        <label htmlFor="">Last name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Last name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="email"
          required
        />
        <label htmlFor="">Phone Number</label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="phone number"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="passowrd"
          required
        />
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="confrim password"
          required
        />
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
