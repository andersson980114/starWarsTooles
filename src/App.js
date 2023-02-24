import './App.css'; 
import Card from './components/Card';
import { useState } from 'react';
function App() {
  
  const baseURL = "https://swapi.dev/api";
  const [search, setSearch] = useState('people')
  const [name, setName] = useState('Luke Skywalker')  
  const [post, setPost] = useState()
  const [data, setData] = useState()
   const buscar = async() =>{
    //`${baseURL}/${search}/${name}`
    console.log("iniciando busqueda")
    console.log(baseURL+'/'+search+'/?format=json')

    let res = await fetch(baseURL+'/'+search+'/?format=json')
    let datas = res.json
    setData(datas.results)
       
     console.log(datas.result)
  }
  const handleSearch = (item) =>{
    console.log(item)
    setSearch(item)
  }

  const handleChange = event => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  return (
    <div className="App row mx-5 px-0 ">
        <div className='col-12  '>
          <div className='row  '>
            <button className='btn btn-dark btn-outline-light col-2 m-1' onClick={() => handleSearch('people')}>Personajes</button>
            <button className='btn btn-dark btn-outline-light col-2 m-1' onClick={() =>handleSearch('species')}>Especies</button>
            <button className='btn btn-dark btn-outline-light col-2 m-1' onClick={() =>handleSearch('planets')}>Planetas</button>
            <button className='btn btn-dark btn-outline-light col-2 m-1' onClick={() =>handleSearch('vehicles')}>Vehiculos</button>
          </div>
          <div className='col-8'>
            <div className='row ' >
              <div className="input-group mb-3">
                <input type="text" className="form-control " placeholder="Buscar..." aria-label="Recipient's username" aria-describedby="button-addon2" value={name} onChange={handleChange}/>
                <button className="btn btn-dark btn-outline-light"   id="button-addon2" onClick={() =>buscar()}>Button</button>
              </div>

          
            </div>
          </div>
          <div className='col'>
            <div className='row'> 
              <Card data={{data}}/>  
            </div>
          </div>

        </div>
        
       
       {/** */}
       
       {/** */}
    </div>
  );
}

export default App;
