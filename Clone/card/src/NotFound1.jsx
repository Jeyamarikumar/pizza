import { Link } from "react-router-dom";

function NotFound1(){
    return(
        <>
        <h2>Error 404 Page Not Found</h2>
        <Link to="/" className="btn btn-primary">Home</Link>
        </>
    );
}

export default NotFound1