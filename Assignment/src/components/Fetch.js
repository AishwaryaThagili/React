import { useState, useEffect } from "react";


export const Fetch = () => {
    const [data, setData] = useState(null);
    

    useEffect(() => {
        fetch(`https://dummyjson.com/products/1`)
            .then((response) => response.json())
            .then((actualData) => setData(actualData));

    }, []);
    
    if (data) {
        console.log((data));
        
        return <div className="A">
        
   <p><strong>Title</strong>  : {data.title} </p>

   <p><strong>Description</strong>  : {data.description} </p>

   <p><strong>Price</strong>  : {data.price} </p>

   <p><strong>Images</strong>  : <br/><br/> {data.images && data.images.map((number,index) => <div><img src={number} style={{ width: 200, height: 200 }} key={index}></img><br /><br /></div>)}</p>

        </div>
    }
}