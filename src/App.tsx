import './App.css'
import Header from './components/Header'
import Legend from './components/Legend'
import ScheduleTable from './components/ScheduleTable'
import MobileSchedule from './components/MobileSchedule'
import Timer from './components/Timer'
import Tips from './components/Tips'
import Dashboard from './components/Dashboard'
import TodoList from './components/TodoList'
import { useNotifications } from './utils/useNotifications'

function App() {
  useNotifications()

  return (
    <div className="app-container">
      <Header />
      <div className="top-widgets">
        <Dashboard />
        <TodoList />
      </div>
      {/* Desktop: table + sidebar legend */}
      <div className="content-layout desktop-only">
        <div className="main-content">
          <ScheduleTable />
        </div>
        <aside className="sidebar">
          <Legend />
        </aside>
      </div>
      {/* Mobile: card-based day view */}
      <div className="mobile-only">
        <MobileSchedule />
      </div>
      <Timer />
      <Tips />
    </div>
  )
}

export default App
