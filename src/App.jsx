import Count from "./components/Count"
import { CounterProvider } from "./context/context"

const App = () => {
  return (
    <div>
    <CounterProvider>
    <Count/>
    </CounterProvider>
    </div>
  )
}

export default App
