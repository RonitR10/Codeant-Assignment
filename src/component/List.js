import Data from "./Data";
import RepoData from "./RepoData";
// Generates the list of all the data in the Repodata.js using the component Data.
const List=()=>{
    return (
        <div className="">
            {
            RepoData.map((rep)=><Data key={rep.id} repo={rep}/>)
            }
        </div>
    )
}
export default List;