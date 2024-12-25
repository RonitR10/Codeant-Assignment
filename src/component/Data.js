import active from '../active.png';
// this component is used to create a layout for the each entry in the RepoData.js 
const Data=({repo})=>{
   return(
    <div className="p-2 border-2 hover:bg-gray-100">
        <div className="flex m-2">
            <h2 className="font-semibold text-lg">{repo.title}</h2>
            <p className="ml-2 border-2 text-blue-800 text-center bg-cyan-50 border-cyan-200 rounded-2xl w-20">{repo.mode}</p>
        </div>
        <div className="flex m-2 items-center">
            <h3>{repo.tech}</h3>
            <img src={active} className="w-3 h-3 ml-1"></img>
            
            <i className="fa-solid fa-database  w-3 h-3 ml-12 "></i>
            <h3 className="ml-2">{repo.storage}</h3>
            <h3 className="ml-12">{repo.timeline}</h3>
        </div>
    
    </div>
   )
}
export default Data;