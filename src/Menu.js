
import {Link} from 'react-router-dom'
import './Menu.css'

function Menu() {
    return (

        <div className='faixa-menu'>
            <h1 className='titulo'> MENU </h1>

            <Link to='/dobro'> Calcular o dobro</Link>
        </div>
    )
}

export default Menu;

