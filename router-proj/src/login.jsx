import { useNavigate } from "react-router"

export default function Login(){
  // let [username,setName ]= useState('');
  // let [pin,setPin] = useState('');
  let navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    navigate('/Home',{replace:true});
  }
  return( 
    <form action="" onSubmit={handleSubmit}>
      <input  type="text" name="userName" id="" required className="border-2 border-b-blue-300" />
      <input  type="text" name="Password" id="" required className="border-2 border-b-blue-300"/>
      <button type="submit">Login</button>
    </form>
  );
}