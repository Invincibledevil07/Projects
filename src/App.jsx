import { useCallback, useState } from 'react'


import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordGenrator=useCallback(()=>{
    let pass =""
    let str=
    "ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvwxyz"
    if(number) str +="0123456789"
    if(char) str +="!@#$%^&*()_+"

    for(let i=1;i<=array.length;i++){
      let char=Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(char)

    }
    setPassword(pass)

  },[length,number,char,setPassword])
   

  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500 '>
        <div className='flrx-shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" />

        </div>
      </div>
    </>
  )
}

export default App
