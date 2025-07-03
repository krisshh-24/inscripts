
import './App.css'
import Workspaceheader from './components/Workspaceheader'
import Toolbar from './components/Toolbar'
import Table from './components/Table'
import Tabs from './components/Tabs'
import Footer from './components/Footer'



function App() {


  return (
    <div>
      <Workspaceheader />
      <Toolbar />
      <Tabs></Tabs>
      <Table/>
      <Footer></Footer>
    </div>
  )
}

export default App
