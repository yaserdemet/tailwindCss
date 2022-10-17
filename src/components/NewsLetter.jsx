import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsLetter = () => {
  const [value, setValue] = useState("");
  const myref = useRef();
  useEffect(() => {
    myref.current.focus();
  }, []);
  const handleChange = (e) => {
    if(value == "") {
      toast.warn("Enter a valid email" , {
        theme : "dark",
        icon : "❌"
      })
    }
    else  {

      toast.success(value , {
        theme : "dark",
        icon : "👌"
    })
    setValue("")

    }
    
  }
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center">
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
              onChange={() => setValue(myref.current.value)}
              ref={myref}
              className="sm:mx-3 p-3  flex w-full rounded-lg text-black  caret-[#00df9a] "
              type="email"
              placeholder="enter email"
              value={value}
            />
            <button onClick={handleChange} className="btnCheck">
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
      <ToastContainer draggablePercent={1000} />
    </div>
  );
};

export default NewsLetter;
