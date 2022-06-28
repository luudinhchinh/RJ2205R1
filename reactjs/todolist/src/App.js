import {useState} from 'react'
import './App.css';

function App() {
  const [job,setJob]=useState('')
  const [jobs,setJobs]=useState([])
  
  const handleAdd=()=>{
    setJobs(prev=>[...prev,job])
    setJob('')
  }
  
  return (
    <div className="App">
      <input value={job} onChange={e=>setJob(e.target.value)} />
      <button onClick={handleAdd}>add</button>
      <table className='listTable'>
        {jobs.map((list,index)=>(
          <tbody  key={index}>
            <tr>
            <td><input type='checkbox' /></td>
            <td>{list}</td>
            <td><button>edit</button></td>
            <td><button >delete</button></td>
          </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;
