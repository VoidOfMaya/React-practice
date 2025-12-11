import { useEffect, useState } from "react";
        // IMPORTAMT keep in mind order of fetching and  work for waterfall prevention!
//we can also create custom hooks!! like so
const useImgURL = ()=>{
    const [imgUrl, setImgUrl] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading]= useState(true); 
    
    useEffect(()=>{
        //to prevent racing and multiple requests  we should cancell requests once a valid get request is returned
        //using the abort controller:
        const controller = new AbortController();
        //declare controller.signal to stop after one post  in the aditional parameters in fetch
        fetch('https://picsum.photos/v2/list',controller.signal,{
            headers: {'User-Agent': "the-odin-project"}
        })
        .then((response)=> {
            // sometimes the fetch might not fail and return a server error code so its important to handle these situations as follows
            if(response.status >= 400){
                throw new Error('server error');
            }
            return response.json()
        })
        .then((response)=> setImgUrl(response[0].download_url))
        .catch((error)=> setError(error))
        .finally(()=> setLoading(false));
        //abort aditional requsts on fimishing fetch
        return () => controller.abort();
    },[]);
    return{ imgUrl, error, loading};
}
const Img=()=>{
    //declaring the custom hook with its destructured variables
    const{ imgUrl, error, loading} = useImgURL();

    if(loading) return <p>Page Loading please wait a moment ...</p>
    if (error) return <p>A network error was encountered</p>
    return(
        imgUrl &&(
            <>
                <h1>BEHOLD! An Image</h1>
                <img src={imgUrl} alt ={'placeholder text'} height={'400px'}/>
            </>
        )
    );
};

export default Img;