import './App.css'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <Header headers={[
      {

        title:'About This Project',
        path:'/about'
      },
      {
        title: 'Source Code',
        path:'github'
      }
    ]} />
    <section>
      <Dashboard />
    </section>
    </>
    
  )
}

export default App
