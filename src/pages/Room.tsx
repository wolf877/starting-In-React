import {useParams} from "react-router-dom";
import logoImg from "../assests/images/images/logo.svg";
import {Button} from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import {useState, FormEvent} from 'react';
//, useEffect
import { useAuth } from "../hooks/useAuth";
import {ref, push} from "firebase/database";
//onChildAdded onValue
import '../styles/room.scss';
import { database } from "../service/firebase";
import { Question } from "../components/Question";
import { useRoom } from "../hooks/useRoom";

type RoomParams = {
    id: string,
}

export function Room(){
    const params = useParams<RoomParams>()
    const {user} = useAuth();
    const [newQuestion, setNewQuestion] = useState('');
    
    
    const roomId = params.id;
    const {title, questions} = useRoom(roomId);
    

    async function handleNewSendQuestion(event: FormEvent){
        event.preventDefault();
        
        if(newQuestion.trim() === ''){
            return;
        }

        if(!user){
            throw new Error('You not logged');
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar
            },
            isHighLighted: false,
            isAnswer: false
        };

        
        await push(ref(database, `room/${roomId}/questions`), question)
        setNewQuestion('')
    }

    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeask"/>
                    <RoomCode code={params.id}/>
                </div>
            </header>

            <main className='content'>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} Perguntas</span>}
                </div>

                <form onSubmit={handleNewSendQuestion}>
                    <textarea 
                        placeholder="O que deseja perguntar?"
                        onChange={event =>setNewQuestion(event.target.value)}
                        value = {newQuestion}
                    />

                    <div className="form-footer">
                        { user ? (
                            <div className="user-info">
                                <img src={user.avatar} alt={user.name}/>
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <span>Para enviar uma pergunta <button>faça seu login</button></span>
                            ) }
                        
                        <Button type="submit" disabled={!user}>Enviar pergunta</Button>
                    </div>
                </form>
                

                <div className="question-list">
                    {questions.map(question => {
                        return(
                            <Question
                                key= {question.id}
                                content={question.content}
                                author={question.author}
                            />
                        )
                    })}
                </div>
                
            </main>
        </div>
    )
}