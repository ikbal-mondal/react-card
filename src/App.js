import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card/Card';
import Header from './Header/Header';


function App(props) {
  return(
    <div className="App my-4">

   <Header></Header>
   <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
  
   </div>
 
 <div className="grid grid-cols-3">
 <Photos></Photos>
 </div>



    </div>
  )
 }

 const Photos = (props) => {

const [photos, setPhotos] = useState([])

useEffect(()=> {

  fetch(`https://jsonplaceholder.typicode.com/photos`)
  .then(res => res.json())
  .then(data => setPhotos(data))

 
},[])


  return(

    <div className="">
          <div className='grid grid-cols-4 gap-4'>
   {
   photos.map(photo => <Card photo={photo}></Card>)
  }
 </div>
    </div>
  )

 }

export default App;
