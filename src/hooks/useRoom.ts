import { onValue, ref, off } from "@firebase/database";
import { useEffect, useState } from "react";
import { database } from "../service/firebase";
import { useAuth } from "./useAuth";

type Questions = {
    id: string,
    author: {
        avatar: string,
        name: string,
    },
    content: string,
    isAnswer: boolean,
    isHighLighted: boolean
    likeCount: number,
    likeId: string | undefined;
}

type roomQuestion = Record<string, {
    author: {
        avatar: string,
        name: string,
    },
    content: string,
    isAnswer: boolean,
    isHighLighted: boolean,
    likes: Record<string, {
        authotId: string
    }>
}>

export function useRoom(roomId:string){
    const {user} = useAuth();
    const [questions, setQuestion] = useState<Questions[]>([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const roomRef = ref(database, `room/${roomId}`)
        // roomRef.once('value', () =>{})
        onValue(roomRef, (valeu:any) => {
            const room =  valeu.val()
            const firebaseQuestions: roomQuestion = room.questions ?? {};
            // console.log(firebaseQuestions)
            const parsedQuestion = Object.entries(firebaseQuestions).map(([key, value]) => {
                // console.log(Object.values(value.likes ?? {}).some(like => like.author === user?.id))
                console.log(Object.values(value.likes ?? {}))
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighLighted: value.isHighLighted,
                    isAnswer: value.isAnswer,
                    likeCount: Object.values(value.likes ?? {}).length,
                    likeId: Object.entries(value.likes ?? {}).find(([key, value]) => value.authotId === user?.id)?.[0],
                }
            })
            
            setTitle(room.title)
            setQuestion(parsedQuestion)

            return ()=>{
                off(roomRef, 'value')
            }
        })
    }, [roomId, user?.id])

    return {title, questions}
}