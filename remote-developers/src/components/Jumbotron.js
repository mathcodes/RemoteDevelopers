import React from 'react';

const Jumbotron = () => {
  return (
    <div className="bg-gray-300 p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
          {/* Greeting */}
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold">Hello, Welcome!</h1>
            <p className="text-lg mt-2">
              Your personalized greeting message goes here.
            </p>
          </div>

          {/* Image */}
          <div className="mt-4 sm:mt-0">
            <img
              src="./leonardosworld.png"
              alt="a fabulous view of the future is thigns go right"
              className="rounded-full h-32 w-32 mx-auto sm:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
