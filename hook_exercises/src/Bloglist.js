const Bloglist = ({ blogs, title, handleDelete }) => {
    return ( 
        <div className="Bloglist">
            { title }
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.body }</p>
                    <p>By: { blog.author }</p>
                    <button onClick={ handleDelete }></button>
                </div>  
            ))}             
        </div>
    );
}
 
export default Bloglist;