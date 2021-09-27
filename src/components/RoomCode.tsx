import { type } from 'os';
import copyImg from '../assests/images/images/copy.svg';

import '../styles/room-code.scss';

interface RoomCodeProps {
    code: string;
}

export function RoomCode(props: RoomCodeProps){
    function copyRoomCode(){
        navigator.clipboard.writeText(props.code)
    }

    return(
        <button className="room-code" onClick={copyRoomCode}>
            <div>
                <img src={copyImg} alt="Copy" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}