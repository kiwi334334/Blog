"use client"


import Link from "next/link"
import React from "react";

export default function signin(){  
  function Linkcheck() {
    if(name === "EW" && pass === "980039480"){
      return(
        <>
          <Link href="./blog1">Elias's Blog</Link>
        </>
      )
    }
    if(name === "MSBURCH" && pass === "IsTheBest"){
      return(
        <>
          <Link href="/blog2">Gianna blog</Link>
        </>
      )
    }
  }
  const [name, setName] = React.useState('');
  const [pass, setPass] = React.useState('');

  return(
    <>
      <div className="w-screen h-screen bg-green-300">
        <div className="bg-slate-100 rounded absolute left-[30%] top-[30%] w-40% h-40% ">
          <form>
            <h1>Sign In</h1>
            <input value={name} onChange={(event) => {setName(event.target.value);}} placeholder="type username here"/>
            <input value={pass} onChange={(event) => {setPass(event.target.value);}} placeholder="type password here"/>
            <br/>
          </form>
          <Linkcheck/>
        </div>
      </div>
    </>
  )
}