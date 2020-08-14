import React, { useEffect, useState, Fragment } from 'react';
import './App.css';
import Axios from 'axios';
import Search from './components/Search';
import GifCard from './components/GifCard';
import Loader from './components/Loader';

function App() {
  const [ gifs, setGifs ] = useState([]);

  useEffect(() => {
    Axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=qLrUmfzUvZHmiV0T29Bn4XUczC17tDDh&limit=48&rating=G`)
      .then(res => {
        console.log(res);
        setGifs(res.data.data)
      })
  }, []) 

  const submit = (key) => {
    setGifs([])
    Axios.get(`https://api.giphy.com/v1/gifs/search?api_key=qLrUmfzUvZHmiV0T29Bn4XUczC17tDDh&q=${key}&limit=48&offset=0&rating=G&lang=en`)
      .then(res => setGifs(res.data.data))
  }

  return (
    <div className="App">
      {gifs.length ? <Fragment>
        <Search handleSubmit={submit} />
      <div>
      {
        gifs.map(gif => {
          return <GifCard gif={gif}/>
        })
      }
      </div> 
      </Fragment>: <Loader />}
    </div>
  );
}

export default App;
