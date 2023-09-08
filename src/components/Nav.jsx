import PATHROUTES from "../helpers/PathRoutes";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = (props) => {
    const {onSearch} = props;
    return(
        <>
            <SearchBar onSearch={onSearch} />
            <Link to={PATHROUTES.HOME}>
                <button> Home </button>
            </Link>
            <Link to={PATHROUTES.ABOUT}>
                <button>About</button>
            </Link>
        </>
    )
}

export default Nav;