const classes = "bg-red-500 text-yellow-500 font-bold m-4 p-4"
const App = () => {
  return (

    // <div className="container bg-gray-300 mx-auto px-4"> <h1 >App</h1></div>
    <div className="container lg:bg-gray-300 sm:bg-red-500 md:px-4 lg:px-6">
      <div className="h-48 w-48 lg:rounded-full bg-red-400 border-4 border-cyan-800 border-dotted text-9xl font-extrabold">Hello</div>
      <h1 >App</h1>
      {/* <div className="columns-3">
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </div> */}
      <div className="grid gap-4 grid-cols-1 bg-sky-700 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-3">
        {/* <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
        <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
        <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
        <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
        <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
        <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
        <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
        <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
        <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1> */}

        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
        <h1 className={classes}>hello</h1>
      </div>

      <button className="bg-violet-500 hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
        Save changes
      </button>
    </div>

  )
}

export default App