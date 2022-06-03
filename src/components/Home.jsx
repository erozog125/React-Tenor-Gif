import React, { useState, useEffect } from 'react';
import { EntryData } from './EntryData';
import { GifCard } from './GifCard';


export const Home = () => {
  
  
  const URL = "https://g.tenor.com/v1/trending?"
  const URL2 = "https://g.tenor.com/v1/search?"
  const key = "DMHFGEWPEFHD";
  const limit = "15";
  
  const [cards, setCards] = useState([]); 

  const trendingGif = async () => {
    const query = `${URL}key=${key}&limit=${limit}`;
    const response = await fetch(query);
    const data = await response.json();
    setCards(data.results);      
  }

  useEffect(() => {
    trendingGif();    
  }, [])  

  
  const lookingGif = async (event) => {    
    const q = event.target.value;
    const query = `${URL2}key=${key}&limit=${limit}&q=${q}`;
    console.log(query);    
    const response = await fetch(query);    
    const data = await response.json();     
    console.log(data);    
    setCards(data.results);
  }  

  return (
      <div className="home">
        <h1>Gif Tenor</h1>
        <hr />
        {/* <EntryData event={lookingGif} /> */}
        <input type="text" onChange={lookingGif} />
        <hr />
        <main>
          {
            cards.map(card => (
              <GifCard key={card.id} src={card.media[0].mediumgif.url} alt={card.content_description} />
            ))
          }
        </main>
      </div>   
  )
}

const MakeItReal = () => {
 return `I will never give up on my dreams`
}
