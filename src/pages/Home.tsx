import illustration from "../assests/images/images/illustration.svg";
import logoImg from "../assests/images/images/logo.svg";
import googleImg from '../assests/images/images/google-icon.svg';

import { Button } from "../components/Button";

import '../styles/auth.scss';

export function Home(){
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
                    <button className="create-Room">
                        <img src={googleImg} alt="google"/>
                        Crie sua sala com Google
                    </button>
                    <div className='separador'>Ou entre em uma sala</div>
                    <form>
                        <input type='text' placeholder='Digite o código'/>
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}