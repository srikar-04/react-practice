import React from "react";
import { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("zinc-900");
  function changeColor(newColor) {
    setColor(newColor)
  }
  return (
    <div className={`main h-[100vh] w-full bg-${color}`}>
        <div className="border border-white p-4 rounded-full relative top-[550px] flex items-center justify-between cursor-pointer">
          <div className="border border-white rounded-lg p-1 bg-red-500 " onClick={() => changeColor('red-500')}>
            {"red"}
          </div>
          <div className="border border-white rounded-lg p-1 bg-green-500  " onClick={() => changeColor('green-500')}>
            {"green"}
          </div>
          <div className="border border-white rounded-lg p-1 bg-blue-500  " onClick={() => changeColor('blue-500')}>
            {"blue"}
          </div>
          <div className="border border-white rounded-lg p-1 bg-gray-500  " onClick={() => changeColor('gray-500')}>
            {"gray"}
          </div>
          <div className="border border-white rounded-lg p-1 bg-yellow-500  " onClick={() => changeColor('yellow-500')}>
            {"yellow"}
          </div>
          <div className="border border-white rounded-lg p-1 bg-pink-500  " onClick={() => changeColor('pink-500')}>
            {"pink"}
          </div>
          <div className="border border-white rounded-lg p-1 bg-purple-500  " onClick={() => changeColor('purple-500')}>
            {"purple"}
          </div>
        </div>
    </div>
  );
}

export default BgChanger;
