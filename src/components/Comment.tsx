import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [ likeCount , setLikeCount ] = useState(0)
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment( ){
        setLikeCount((state) => { return state + 1 })
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt=""/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Augusto</strong>
                            <time title="25 de Novembro as 10:00h" dateTime='2022-11-24 10:00:00'>
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment}title='Deletar Comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={24}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    )
}