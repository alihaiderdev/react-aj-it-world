// const classes = "bg-red-500 text-yellow-500 font-bold m-4 p-4"
// const App = () => {
//   return (

//     // <div className="container bg-gray-300 mx-auto px-4"> <h1 >App</h1></div>
//     <div className="container lg:bg-gray-300 sm:bg-red-500 md:px-4 lg:px-6">
//       <div className="h-48 w-48 lg:rounded-full bg-red-400 border-4 border-cyan-800 border-dotted text-9xl font-extrabold">Hello</div>
//       <h1 >App</h1>
//       {/* <div className="columns-3">
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//       </div> */}
//       <div className="grid gap-4 grid-cols-1 bg-sky-700 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-3">
//         {/* <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
//         <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
//         <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
//         <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
//         <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
//         <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
//         <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
//         <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1>
//         <h1 className="bg-red-500 text-yellow-500 m-4 p-4">Hello</h1> */}

//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//         <h1 className={classes}>hello</h1>
//       </div>

//       <button className="bg-violet-500 hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
//         Save changes
//       </button>
//     </div>

//   )
// }


import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount } from './store/features/counterSlice';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
// import { ToTopOutlined } from '@ant-design/icons';
// import { FaArrowRotateRight } from "react-icons/fa6";


const App = () => {
  // const state = useSelector((state) => { return state });
  // const state = useSelector((state) => state);
  const value = useSelector((state) => state.count.value);
  const dispatch = useDispatch()
  console.log(value, "state");


  return (
    <div>
      {/* <Button type="link"
        block
        danger={false}
        disabled={false} ghost href='https://ant.design/components/button#api' htmlType='button' icon={<ToTopOutlined style={{ fontSize: "5rem", color: 'green', backgroundColor: "yellow" }} spin={false} rotate={270} />}>Ant Design Icon</Button>

      <Button type="primary"
        // block
        danger={true}
        disabled={false}

        ghost={false}
        // href='https://ant.design/components/button#api' htmlType='button'
        // icon={<FaArrowRotateRight color='red' size={15}
        // target='_blank'
        onClick={() => { console.log("you are clicking"); }}
        loading={false}
        shape="round"

      >Button</Button> */}

      <Button onClick={() => { dispatch(increment()) }}>Increment</Button>
      <Button onClick={() => { dispatch(incrementByAmount(5)) }}>Increment By Amount</Button>
      <span className='mx-4'>{value}</span>
      <Button onClick={() => { dispatch(decrement()) }}>Decrement</Button>
      <Button onClick={() => { dispatch(decrementByAmount(5)) }}>Decrement By Amount</Button>
      <Child1 />
      <Child2 />
    </div>
  )
}

export default App