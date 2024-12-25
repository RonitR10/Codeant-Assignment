
const Header=()=>{
    return (
    <div className="p-3 ">
        <div className="flex justify-between m-2 flex-wrap md:flex-nowrap">
            <div>
                 <h2 className="text-2xl font-bold">Repositories</h2>
                 <h5>33 total repositories</h5>
            </div>
            <div className="flex">
                <button className="flex mr-4 justify-center rounded-lg border-2 w-32 h-10 items-center" >
                    <i className="fa-solid fa-arrows-rotate mr-1"></i>
                    <p>Refresh All</p>
                </button>
                <button className="flex mr-4 bg-blue-500 text-white rounded-lg w-40 h-10 content-center justify-center items-center">
                <i className="fa-solid fa-plus mr-1" ></i>
                    <p>Add Repository</p>
                </button>
            </div>
        </div>
        <div className="border-2 flex w-72 justify-start rounded-lg mb-5 items-center">
            <i className="fa-solid fa-magnifying-glass ml-2"></i>
            <input  placeholder="Search Repositories" className="text-base ml-2 w-full outline-none"></input>
        </div>
    </div>)
}
export default Header;