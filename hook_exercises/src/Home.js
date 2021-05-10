import useFetch from './useFetch';
import Bloglist from './Bloglist';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="Home">
            { error && <div>{ error }</div>}
            { isPending && !error && <div>"Loading..."</div> }
            { blogs && <Bloglist blogs={ blogs } title={ "My Title" } /> }
        </div>
     );
}
 
export default Home;