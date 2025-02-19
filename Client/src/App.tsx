import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-yellow p-4 text-center text-2xl text-red-500 font-bold mx-auto mt-4 w-1/2">
        Hello from College Hub Frontend!
      </div>
    </>
  )
}

export default App
