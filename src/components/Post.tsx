import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface IAuthor {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;

}

interface PostProps {
    author: IAuthor;
    publishedAt: Date;
    content: Content[];
}
export function Post({ author, publishedAt, content }: PostProps) {
    const [ comments, setComments ] = useState(['Post muito bacana ein!'])
    const [ newCommentText, setNewCommentText ] = useState('');

    // const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month:'long',
    //     hour: '2-digit',
    //     minute: '2-digit'

    // }).format(publishedAt)

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        // const newCommentText = event.target.comment.value
        setComments([...comments, newCommentText ])
        setNewCommentText('')
        // event.target.comment.value = ""

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter((comment) => {
            return commentToDelete !== comment
        });
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    const isNewCommentEmpyt = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt=""/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                { content.map((line) => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{ line.content }</p>
                    } else if(line.type === 'link'){
                        return <p key={line.content}><a href="">{ line.content }</a></p>
                    }
                })}
                <p>
                    <a href="">#novoprojeto</a>
                    <a href="">#nlw </a>
                    <a href="">#rocketseat</a>
                </p>
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm} >
                <strong>Deixa seu feedback</strong>
                <textarea 
                    onChange={handleNewCommentChange}
                    name="comment"
                    value={newCommentText}
                    placeholder='Deixe um comentário'
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <div>
                    <button 
                        type='submit'
                        disabled={isNewCommentEmpyt}
                    >
                        Comentar
                    </button>
                </div>
            </form>
            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return <Comment onDeleteComment={deleteComment} key={comment} content={comment}/>
                })}
            </div>
        </article>
    )
}