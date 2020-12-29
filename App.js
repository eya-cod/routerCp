import React,{useState} from 'react'
import './App.css';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Trailer from './components/Trailer';




function App() {
  const [TitleFilter, setTitleFilter] = useState('')
  const [RateFilter, setRateFilter] = useState(1)
  const [Movies, setMovies] = useState([
    {
      title:'The Joker',
      rate:4,
      posterUrl:'https://i.pinimg.com/originals/7c/0c/f2/7c0cf26a8a1e7b9fe8a1e393f28177f1.jpg',
      description:'initially portrayed as a small-time crook, was disfigured and driven insane by an accident with toxic chemicals. He was depicted with chalk-white skin, ruby-red lips permanently fixed in a demonic grin, and bright green hair.',
      trailerLink: 'https://www.youtube.com/embed/t433PEQGErc',
    }
    ,

    {
      title:'La la Land',
      rate:5,
      posterUrl:'https://www.movies.ch/db_data/movies/lalaland/artwrk/ki_l/510_01_-_OV_705x1015_4f.jpg',
      description:' is a 2016 American musical romantic drama film written and directed by Damien Chazelle. It stars Ryan Gosling as a jazz pianist and Emma Stone as an aspiring actress, who meet and fall in love while pursuing their dreams in Los Angeles.',
      trailerLink:'https://www.youtube.com/embed/0pdqf4P9MB8',
    } 
    ,

    {
      title:'Harry Potter',
      rate:3,
      posterUrl:'https://oblikon.net/wp-content/uploads/harry-potter-and-the-prisoner-of-azkaban-poster.jpg',
      description:'Harry Potter is a film series based on the eponymous novels by J. K. Rowling. The series is ... Rowling asked Kloves to remain faithful to the spirit of the books; thus, the plot and tone of each film and its corresponding book are virtually the same ',
      trailerLink:'https://www.youtube.com/embed/qZJvQ7eGxbI',
    }

  ])
  const handleAdd=(x)=>{
  setMovies([...Movies,x]);
  }

  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} RateFilter={RateFilter} />
      <AddMovie handleAdd={handleAdd}/>
      <MovieList Movies={Movies} TitleFilter={TitleFilter} RateFilter={RateFilter} />
      
      </Route>
      <Route path='/Trailer/:title' render={(props) => <Trailer Movies={Movies} {...props} />}  />
      </Router>
      
    </div>
  );
}

export default App;
