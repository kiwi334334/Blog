export default function signin(){
  return(
    <>
      <div className="w-screen h-screen bg-green-300">
        <div className="bg-slate-100 rounded absolute left-[30%] top-[30%] w-40% h-40% ">
          <form>
            <h1>Sign In</h1>
            <input placeholder="type username here"/>
            <input placeholder="type password here"/>
          </form>
        </div>
      </div>
    </>
  )
}