import illustration from "../assests/images/images/illustration.svg";
import logoImg from "../assests/images/images/logo.svg";
import { FormEvent, useState } from "react";
import{ref,  push} from "firebase/database";
import { database } from "../service/firebase";
// import { useHistory } from "react-router-dom";
// import { useContext } from "react";
// import {AuthContext} from '../contexts/AuthContexts';

import {useAuth} from '../hooks/useAuth';
import { Link, useHistory } from "react-router-dom";
import { Button } from "../components/Button";

import '../styles/auth.scss';

export function NewRoom(){
    const { user } = useAuth();
    const history  = useHistory();
    const [newRoom, setnewRoom] = useState('');
    async function handleCreateRoom(event:FormEvent){
        
        event.preventDefault();

        if(newRoom.trim()===''){
            return;
        }
        
        const roomRef =  ref(database,`room`)
        const firebaseRoom = await push(roomRef, {
            title: newRoom,
            authorId: user?.id
        })

        history.push(`/room/${firebaseRoom.key}`)
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
                    
                   <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input type='text' 
                        placeholder='Nome da sala'
                        onChange={event =>setnewRoom(event.target.value)}
                        value={newRoom}/>
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