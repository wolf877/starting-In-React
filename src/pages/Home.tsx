import {useHistory} from 'react-router-dom';
// import {useContext} from 'react';
// import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

import illustration from "../assests/images/images/illustration.svg";
import logoImg from "../assests/images/images/logo.svg";
import googleImg from '../assests/images/images/google-icon.svg';
// import {AuthContext} from '../contexts/AuthContexts';

import {useAuth} from '../hooks/useAuth'
// import {firebase, auth, database} from '../service/firebase';


import { Button } from "../components/Button";

import '../styles/auth.scss';

export function Home(){
    
    const history  = useHistory();
    
    const {user, signInWithGoogle} = useAuth();

    async function navigationToNewRoom(){
        // const provider = firebase.auth.GoogleAuthProvider();
        if(!user){
            await signInWithGoogle();
        }

        history.push('/rooms/new')
    }
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
                    <button onClick={navigationToNewRoom} className="create-Room">
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