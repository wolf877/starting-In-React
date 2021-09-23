import illustration from "../assests/images/images/illustration.svg";
import logoImg from "../assests/images/images/logo.svg";

// import { useHistory } from "react-router-dom";
// import { useContext } from "react";
// import {AuthContext} from '../contexts/AuthContexts';

// import {useAuth} from '../hooks/useAuth';
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

import '../styles/auth.scss';

export function NewRoom(){
    // const { user } = useAuth();
    // const history  = useHistory();
    
    return(
        <div id='page-auth'>
            <aside>
                <img src={illustration} alt="" />
                <strong>Cria salas de Q&amp;A</strong>
                <p>Tire suas Duvidas</p>
            </aside>
            <main>
                <div className= "main-content">
                    <img src={logoImg} alt="logo" />
                    
                   <h2>Criar uma nova sala</h2>
                    <form>
                        <input type='text' placeholder='Nome da sala'/>
                        <Button type='submit'>
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to='/'>Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}