import { useNavigate, useParams } from "react-router";

export default function User(){

  const{ userID } = useParams();
  const navigate= useNavigate();

  return (
    <>
    <p>User Number { userID }</p>
    <button onClick={()=>navigate(-1)} type="button" className="bg-blue-600 text-white border-2 p-2 rounded-sm">back</button>
    </>
  );
}