import React from 'react'
import seriesData from "../Api/seriesData.json";

  const NetflixSeries=()=>{
    
        function handleBtn(url) {
          window.open(url, '_blank');
        }
        
          
    return(
        <>
        <div className='max-w-7xl  pl-36 pr-8 m-16'>
        <ul className='grid grid-cols-3 gap-14 '>
            {seriesData.map((ele)=>{
                return(
                <li key={ele.id} className=' shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] 
                h-[105%] w-[100%] rounded-lg overflow-hidden hover:scale-95 duration-150  hover:shadow-lg '>

                <div>
                     <img src={ele.img_url} alt="" width="300" height="300" className='w-[100%]'></img>
                </div>
                <div className='pl-5 pr-5 flex flex-col gap-3'>
                    <h1 className=' font-bold'>NAME: {ele.name}</h1>
                    <h3 className=' font-bold'>
                        RATING:{ele.rating}
                    </h3>
                    <p>SUMMARY: {ele.description} </p>
                    <p>CAST:{ele.cast}</p>
                    <p>GENRE:{ele.genre}</p>
                    
                    <button   onClick={() => handleBtn(ele.watch_url)} className='outline-4 px-4 py-1 rounded-full shadow-lg
                     bg-blue-400 hover:bg-blue-700 text-white'>Watch Now</button>
            
                </div>
            </li>
                   
                );
            })}
            
        </ul>
        </div>
       
        </>
    )
}

export default NetflixSeries