import './App.css'
import { RevenueCard } from "./components/RevenueCard"
function App() {

  return (
    <div className="grid grid-cols-4">
      <RevenueCard title={"Amount pending"} amount={"99,37,89,00"} orderCount={13}/>
    </div>
  )
}

export default App
