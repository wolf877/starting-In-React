import {ReactNode} from 'react';
import cx from 'classnames';
import "../styles/questions.scss";

type QuestionProps = {
    content: string,
    author: {
        name: string,
        avatar: string,
    };
    children?: ReactNode;
    isAnswer?: boolean;
    isHighLighted?: boolean;
}

export function Question({
        content, 
        author, 
        isAnswer=false, 
        isHighLighted=false, 
        children
    }:QuestionProps){
    return(
        <div 
            className={cx(
                'question',
                {answered: isAnswer},
                {highlighted: isHighLighted && !isAnswer}
            )}
            // className={`question ${isAnswer ? 'answered' : ''} ${isHighLighted ? 'highlighted' : ''}`}
        >
            <p> {content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>{children}</div>
            </footer>
        </div>
    )
}