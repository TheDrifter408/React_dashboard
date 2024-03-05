import { Actor, Film, FilmCount } from "../types/dataTypes";

type RowProps = {
  rows: [] | null;
  dataType:string;
}

type TableProps = {
  rows: [] | null;
  fields: string[] | null;
  dataType:string;
}

function TableHeaders({fields}:{fields:string[] | null}){
  return (
    <tr>
      {
        fields?.map((field:string,idx:number) => (
          <th key={idx}>{field}</th>
        ))
      }
    </tr>
  )
}

function TableRows({rows,dataType}:RowProps){
  switch(dataType){
    case 'Actors':
      return(
        rows?.map((row:Actor) => (
          <tr key={row.actor_id}>
            <td>{row.actor_id}</td>
            <td>{row.first_name}</td>
            <td>{row.last_name}</td>
          </tr>
        ))
      );
    case 'Films':
      return(
        rows?.map((row:Film) => (
          <tr key={row.film_id}>
            <td>{row.film_id}</td>
            <td>{row.title}</td>
            <td>{row.description}</td>
            <td>{row.release_year}</td>
            <td>{row.length}</td>
            <td>{row.rating}</td>
          </tr>
        ))
      )
    case 'FilmCount':
      return(
        rows?.map((row: FilmCount,idx:number) => (
          <tr key={idx}>
            <td>{row.first_name}</td>
            <td>{row.last_name}</td>
            <td>{row.no_of_films}</td>
          </tr>
        ))
      )
  }
}


export default function Table({rows,fields,dataType}:TableProps) {
  return (
    <table>
      <thead>
        <TableHeaders fields={fields} />
      </thead>
      <tbody>
        <TableRows rows={rows} dataType={dataType} />
      </tbody>
    </table>
  )
}
