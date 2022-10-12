import React, { useEffect, useState } from "react";
import { useRef } from "react";

const NewsLetter = () => {
  const [value, setValue] = useState("");
  const myref = useRef();
  useEffect(() => {
    myref.current.focus();
  }, []);
  const handleChange = (e) => {
    
    alert(value)
    setValue("")
  }
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {" "}
            Want tips & tricks to optimize your flow?{" "}
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className="my-4 lg:col-span-1 ">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              onChange={(e) => setValue(e.target.value)}
              ref={myref}
              className="sm:mx-3 p-3  flex w-full rounded-lg text-black  caret-[#00df9a] "
              type="email"
              placeholder="enter email"
              value={value}
            />
            <button onClick={handleChange} className="sm:mx-3 bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
