import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-100" >
        <div className="w-full max-w-md px-4 py-6 rounded-lg shadow-lg bg-white">
          <div className="mb-8 text-center">
            <img
              src="https://raw.githubusercontent.com/mathcodes/RemoteDevelopers/main/remote-developers/public/assets/images/leonardosworld.png"
              alt="Logo"
              className="w-20 h-20 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-bold text-sm"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>    </div>
  );
};

export default LoginPage;
