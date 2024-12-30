import React, { useCallback, useEffect, useState } from "react";

function PasswordGenerator() {

    const [length, setLength] = useState(8)
    const [numAllowed, setNumAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('')

    const passwordGenerator = useCallback( () => {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if(numAllowed) {
            str+='0123456789'
        }
        if(charAllowed) {
            str+='!@#$%^&*()_{}`~><?/[]'
        }
        for(let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * str.length + 1)
            pass+=str[index]
        }
        setPassword(pass)
    }, [numAllowed, charAllowed, length])

    useEffect( () => {
        passwordGenerator()
    }, [length, numAllowed, charAllowed, passwordGenerator])
    
  return (
    <div className="w-full h-screen bg-zinc-900 pt-8 text-orange-600 flex justify-center">
      <div className="border h-fit p-4 rounded-lg">
        {/* input field and button */}
        <div className="flex gap-5 items-center mb-2">
          <input className="rounded p-1 w-full" type="text" value={password} />
          <button className="bg-blue-500 text-white p-1 rounded-lg">
            copy
          </button>
        </div>

        {/* other parameters */}
        <div className="flex gap-3 items-center">
          <input type="range" min={8} max={100}
            onChange={(e) => setLength(e.target.value)}
          />
          <div>length({length})</div>
          <div className="flex items-center gap-0.5">
            <input type="checkbox"
                onClick={() => setNumAllowed(prev => !prev)}
            />
            <div>Numbers</div>
          </div>
          <div className="flex items-center gap-0.5">
            <input type="checkbox"
                onClick={() => setCharAllowed(prev => !prev)}
            />
            <div>Characters</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
