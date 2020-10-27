import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="max-w-lg max-w-xs bg-blue-800 shadow-2xl rounded-lg mx-auto text-center py-12 rounded-xl">
          <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">Example Login</h1>
          <h3 className="text-gray-200 text-center font-semibold">(demonstrating styles built with Tailwind)</h3>
          <div className="container py-5 max-w-md mx-auto">
              <form method="" action="">
                  <div className="mb-4">
                      <input placeholder="Username"
                          className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="username" type="text" />
                  </div>
                  <div className="mb-6">

                      <input placeholder="Password"
                          className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="password" type="password" />

                  </div>
                  <div className="flex items-center justify-between">
                      <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button">
                          Sign In
                      </button>
                      <span className="inline-block align-baseline font-bold text-sm text-gray-400">
                          Forgot Password?
                      </span>
                  </div>
              </form>
          </div>
      </div>
    </div>
  );
}

export default App;
