import { useState } from 'react';
import axios from 'axios'
import Table from '../components/Table';
import Header from '../components/Header';

type Data = {
  rows: [] | null;
  fields:string[] | null;
  Ascending:boolean
}

export default function Tables(){
    
const [data,setData] = useState<Data>({
    rows:[],
    fields:[],
    Ascending:true,
  });
  const [dataType,setDataType] = useState<string>('');
  

  function FilmsClick(){
    let asc = true;
    axios.get('http://localhost:3000/films')
    .then(res => {
      setData({
        rows:res.data,
        fields: Object.keys(res.data[0]),
        Ascending:asc
      });
      setDataType('Films');
    })
  }

  function Actors(){
    let asc = true;
    axios.get('http://localhost:3000/actors')
     .then(res => {
        setData({
          rows:res.data,
          fields:Object.keys(res.data[0]),
          Ascending:asc
        })
      }
     );
     setDataType('FilmCount');
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
      },
      {
        title:'Dashboard',
        path:'/'
      }
    ]} />
    <section>
      <h1>Sakila Actors</h1>
      <article>
        <div className="btn-container">
          <div>
            <button onClick={Actors}>Actors</button>
          </div>
          <div>
            <button onClick={FilmsClick}>Films</button>
          </div>
        </div>
      <div>

        <Table rows={data?.rows} fields={data?.fields} dataType={dataType} />
      </div>
      </article>
    </section>
    </>
  )
}

