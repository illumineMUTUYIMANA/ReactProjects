export default function Home(){
  return (
    <>
    <h2 className="text-center text-2xl text-blue-400 pt-12">Welcome to websites Supermarket! </h2>
    <div className="grid grid-cols-3 gap-20 p-14">
      <p className="p-16 bg-green-200 shadow-gray-200 shadow-2xs border-2 border-gray-400 rounded-lg" >Backend</p>
      <p className="p-16 bg-green-200 shadow-gray-200 shadow-2xs border-2 border-gray-400 rounded-lg" >Frontend</p>
      <p className="p-16 bg-green-200 shadow-gray-200 shadow-2xs border-2 border-gray-400 rounded-lg" >full-stack</p>
    </div>
    </>
  ) 
}