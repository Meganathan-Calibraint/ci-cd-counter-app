import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <h1>Counter App</h1>
      <p>Current Count: {counter}</p>
      <div style={{ display: 'flex', marginLeft: 5 }}>
        <button onClick={() => setCounter(prevState => prevState - 1)} disabled={counter === 0} id="decrease">-</button>
        <div style={{ marginLeft: 5, marginRight: 5 }} id="counter">{counter}</div>
        <button onClick={() => setCounter(prevState => prevState + 1)} id="increase">+</button>
      </div>
    </>
  )
}

export default App