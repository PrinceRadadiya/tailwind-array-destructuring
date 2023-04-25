import React from "react";

const Section2 = () => {
  return (
    <div className="w-full h-screen text-black">
      <div className="max-w-[1200px] mx-auto mt-8 grid md:grid-cols-2 text-end">
        <div className="p-4">
          <img
            className="w-full h-[500px] shadow-2xl object-cover"
            src="https://drive.google.com/uc?export=download&id=1GenUqE7fmNYYCpfRXQ5VIKi3OobNTwUZ"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-2xl font-serif">zara</p>
          <p className="text-5xl">prince store</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            consequatur sapiente aliquid, dignissimos tenetur provident
            recusandae velit minima obcaecati eligendi, saepe doloremque
            consectetur placeat nihil quaerat debitis nemo aliquam nesciunt!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
