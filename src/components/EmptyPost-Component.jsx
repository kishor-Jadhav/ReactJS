const EmptyPostlist=({handleFetchPost})=>{

    return(
    <>
    <h1>No Post to Display</h1>
    <button type="button" className="btn btn-primary" onClick={handleFetchPost}>
        Fetch All Post
      </button>
    </>)
}
export default EmptyPostlist;