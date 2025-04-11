import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border-[2px] border-gray-600 rounded-md px-40 py-6">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Counter</h1>
          <p className="text-4xl text-emerald-600 font-bold space-">{count}</p>
          <div className="space-x-6">
            <button
              onClick={() => dispatch(increment())}
              className="bg-green-600 text-white font-bold px-3 py-2 rounded-sm hover:bg-green-500"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="bg-red-600 text-white font-bold px-3 py-2 rounded-sm hover:bg-red-500"
            >
              Decrement
            </button>
          </div>
          <button
            onClick={() => dispatch(incrementByValue(10))}
            className="bg-gray-600 text-white font-bold px-3 py-2 rounded-sm hover:bg-gray-500 w-full"
          >
            Increment by Another
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
