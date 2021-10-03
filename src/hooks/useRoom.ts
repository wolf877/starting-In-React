import { onValue, ref } from "@firebase/database";
import { useEffect, useState } from "react";
import { database } from "../service/firebase";

type Questions = {
    id: string,
    author: {
        avatar: string,
        name: string,
    },
    content: string,
    isAnswer: boolean,
    isHighLighted: boolean
}

type roomQuestion = Record<string, {
    author: {
        avatar: string,
        name: string,
    },
    content: string,
    isAnswer: boolean,
    isHighLighted: boolean
}>

export function useRoom(roomId:string){
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
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighLighted: value.isHighLighted,
                    isAnswer: valeu.isAnswer
                }
            })

            setTitle(room.title)
            setQuestion(parsedQuestion)

        })
    }, [roomId])

    return {title, questions}
}