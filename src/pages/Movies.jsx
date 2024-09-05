import { useLoaderData } from "react-router-dom"

export const Movie = () => {
    const moviesData = useLoaderData();
    console.log(moviesData);
    
    
    
    
    return ( <>
   { moviesData.search.map((curMovie) => {
    return <Card key = {curMovie.imdbID} curMovie={curMovie}/>;
   })}
   </>
   
)
    
}