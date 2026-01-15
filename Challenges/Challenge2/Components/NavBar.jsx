import { Link } from "react-router"
export const NavBar = () => {
  return (
    <nav className="">
        <Link to="/">
            <span>
                <span>teste</span>
            </span>
        </Link>

        <div>
            <Link to="/teste2">
                <span>teste 2</span>
            </Link>
        </div>
    </nav>
  )
}
