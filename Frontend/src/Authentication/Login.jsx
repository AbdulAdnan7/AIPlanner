import React from 'react';
import Google from '/GLogo.png'

const Login = () => {
    return (
      <section className="flex justify-center items-center ">
  <div className="bg-white rounded-lg shadow-lg p-8 w-96">
    {/* Title */}
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Log in</h2>
    <p className="text-center text-gray-500 mb-6">
      New user? <span className="text-blue-600 cursor-pointer">Register Now</span>
    </p>

    {/* Social login */}
    <button className="w-full flex items-center justify-center bg-gray-200 text-black p-3 rounded-lg mb-4 hover:bg-gray-300 font-semibold transition">
      <img src={Google} alt="Google" className="w-5 h-5 mr-2" /> Continue with Google
    </button>

    {/* Divider */}
    <div className="flex items-center mb-4">
      <hr className="flex-grow border-gray-300" />
      <span className="px-2 text-gray-400 text-sm">or</span>
      <hr className="flex-grow border-gray-300" />
    </div>

    {/* Form */}
    <input type="text" placeholder="Username or Email" className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

    <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
      <label className="flex items-center">
        <input type="checkbox" className="mr-2"/> Remember Me
      </label>
      <span className="text-blue-600 cursor-pointer">Forgot password</span>
    </div>

    <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
      Sign In
    </button>

    <p className="text-center text-gray-400 text-xs mt-4">
      By creating this account, you agree to our Privacy Policy & Cookie Policy.
    </p>
  </div>
</section>

    );
};

export default Login;
