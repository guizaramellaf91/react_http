import React, { useEffect, useState } from 'react'
import './style.css'

function App() {

  const [lista, setLista] = useState([])

  useEffect(() => {

    function loadApi(){
      let url = 'http://universities.hipolabs.com/search?country=United+Kingdom'
      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        console.log(json)
        setLista(json)
      })
    }
    loadApi()
  }, [])

  return (
    <div className='container'>
      <header>
        <strong>List of Universities</strong>
      </header>

      {lista.map((item) => {
        return(
          <article key={item.id} className='post'>
            <strong>{item.name}</strong>
            <p>Country: {item.country}</p>
          </article>
        )
      })}
    </div>
  );
}

export default App