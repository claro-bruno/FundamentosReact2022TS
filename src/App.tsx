import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'



interface Posts {
  id: number;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  content: {
    type: 'paragraph' | 'link';
    content: string;
  }[]
  publishedAt: Date;
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/claro-bruno.png',
      name: 'Bruno Augusto',
      role: 'Backend Developer'
    },
    content: [
      { 
        type: 'paragraph', 
        content: "Fala galeraa 👋" 
      },
      {
        type: 'paragraph',
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      },      
    ],
    publishedAt: new Date('2022-11-10 20:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernando',
      role: 'CTO Rocketseat'
    },
    content: [
      { 
        type: 'paragraph', 
        content: "Fala galeraa 👋" 
      },
      {
        type: 'paragraph',
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      },      
    ],
    publishedAt: new Date('2022-10-20 20:00')
  },
];
export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post: Posts) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                
              />
            )
          })}
        </main>
      </div>
      
    </div>
     
  )
}

