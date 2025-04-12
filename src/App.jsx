import React from "react";
import Register from "./Rigster.jsx";
import Register2 from "./Register.jsx";
///import './App.css';
import myImage from "./assets/loginImage.jpg";
//import Login from './login';
import "./responsive.css";

//import './App.css';

function App() {

        


  // return (
  //   <>
  //     {/* <div className="container">
  //       <div className="left">
  //         <img src={myImage} alt="Example" />
  //       </div>
  //       <div className="right">
  //         <Register />
  //       </div>
  //     </div> */}
  //     <div className="flex flex-col sm:flex-row gap-2 bg-violet-400 w-full h-screen">
  //     <img className="max-w-1/2 w-full" src={myImage} alt="Example" />
  //     <Register2 />
  //     </div>
  //   </>
  // );
  // return (
  //   <>
  //     <div className="flex flex-col sm:flex-row w-full h-screen bg-violet-400">
  //       {/* Left side - Image */}
  //       <div className="w-full sm:w-1/2 h-1/2 sm:h-full">
  //         <img
  //           src={myImage}
  //           alt="Example"
  //           className="w-full h-full"
  //         />
  //       </div>
  
  //       {/* Right side - Form */}
  //       <div className="w-full sm:w-1/2 flex items-center justify-center p-4">
  //         <Register2 />
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <div>
      <Register />
      <button onClick={handleclick}>Go to Image </button>
      <button onClick={handleclick2}>Go to contact Page </button>
    </div>
  );
}

export default App;
