import { useEffect, useState } from "react";


  function useFetchAPi<T>(url:string){
    const [info, setInfo] = useState <T | null>(null);
    const [loading,setLoading]= useState(true);
    const [err,setError] = useState('')

    useEffect(
    ()=>{
      async function fet(){
        try{
          const response = await fetch(url) ;
          const data = await response.json();
          setInfo(data);
          setLoading(false);
        }catch(err){
          setError(err as string);
          setLoading(false);
        }

      }
      fet();
    },[url]
    )
    return {info,loading,err};
  }


export default function App(){

  interface Obj{
    userId:number,
    id:number,
    title:string,
    [key:string]: string|number,
    

  }

  const {info, loading,err} = useFetchAPi<Obj[]>('https://jsonplaceholder.typicode.com/posts')

  if(loading)return <p>Loading</p>;
  if(err)return <p>{err}</p>

  return(
    <>
      {info?.map((post)=>
        <p key={post.id}>{post.title}</p>
      )}
    </>
  )



}