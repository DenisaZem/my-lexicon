import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Úvod</Link></li>
            <li><Link to="/overview">Přehled slov</Link></li>
            <li><Link to="/form">Formulář</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
