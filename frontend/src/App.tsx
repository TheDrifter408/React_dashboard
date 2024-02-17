import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Table from './components/Table';
import Header from './components/Header';

type Data = {
  rows: [] | null;
  fields:string[] | null;
}

function App() {
  
  const [data,setData] = useState<Data>({
    rows:[],
    fields:[]
  });
  const [dataType,setDataType] = useState<string>('');

  function ActorsClick() {
    axios.get('http://localhost:3000/actors')
    .then(res => {
      setData({
        rows:res.data,
        fields: Object.keys(res.data[0])
      })
      setDataType('Actors');
    })
  }

  function FilmsClick(){
    axios.get('http://localhost:3000/films')
    .then(res => {
      setData({
        rows:res.data,
        fields: Object.keys(res.data[0])
      });
      setDataType('Films');
    })
  }

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
      <h1>Sakila Actors</h1>
      <article>
      <div className="btn-container">
        <button onClick={ActorsClick}>Actors</button>
        <button onClick={FilmsClick}>Films</button>
      </div>
      <div>
        <Table rows={data?.rows} fields={data?.fields} dataType={dataType} />
      </div>
      </article>
    </section>
    </>
    
  )
}

export default App
