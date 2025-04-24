import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState("8");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef= useRef(null);
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()|";

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPassword=(()=>{
     window.navigator.clipboard.writeText(password);
     passwordRef.current?.select();
  })
  useEffect(()=>{
generatePassword()
  }, [length, charAllowed, numberAllowed])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-black rounded-2xl"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-2xl mx-1 hover:bg-green-400" onClick={copyPassword} ref={passwordRef}>
            Copy it
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setlength(e.target.value)}
            />
            <label htmlFor="length">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-l">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="Number">Number</label>
          </div>
          <div className="flex items-center gap-x-l">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={charAllowed}
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="Character">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
