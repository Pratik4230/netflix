import { useState } from "react";
import Header from "./Header";

const LogIn = () => {

const [isSignIn , setIsSignIn] = useState(true);

const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
}

    return (
        <div className="">
            <Header/>

            <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
             srcset="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w,
                       https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w,
                 https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="bgimg"></img>
      
    
        <form className=" absolute bg-opacity-70 bg-black w-3/12  mt-40 mx-auto right-0 left-0 p-12 text-white rounded-3xl">
        
           <h1 className=" my-4 text-3xl font-semibold"> {isSignIn ? "SignIn" : "SignUp"} </h1>

           { !isSignIn && 
           <input type="text" placeholder="Full Name" className="my-4 p-2 w-full bg-slate-600 rounded-xl" />

           }
            <input type="text" placeholder="Email Address" className="my-4 p-2 w-full bg-slate-600 rounded-xl"/>
            <input type="password" placeholder="enter Password" className="my-4 p-2 w-full bg-slate-700 rounded-lg"/>
            <button className="bg-red-700 p-2 w-full my-6 text-lg rounded-3xl " >{isSignIn ? "SignIn" : "SignUp"}</button>
      
          <p> {isSignIn ? "New to Netflix ?" : "Aldready a User ?"}  <span className="cursor-pointer" onClick={toggleSignIn}> {isSignIn ? "SignUp Now" : "SignIn Now"}  </span> </p>
      </form>
      
        </div>
    )
}

export default LogIn;