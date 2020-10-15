import React, { RefObject, SyntheticEvent, useEffect, useState } from "react";
import Axios from "axios";
import Comments, { Message } from "./Comments";
import FormPostTwidder from "./FormPostTwidder";

interface TwidderState {
  id: number;
  title: string;
  comments: Message[];
}

interface TwidderRemote {
  data: TwidderState[]
}

interface CommentsRemote {
  data: Message[]
}

const style = {
  margin: "30px",
  padding: "10px"
}

const messageStyle = {
  marginBottom: "20px",
  padding: "20px",
  boxShadow: "2px 2px 7px #DDD"
}

const Twidder = () => {
  const [twidders, setTwidders] = useState<TwidderState[]>([]);

  useEffect(() => {
    const loadMessages = async () => {
      const { data: messages } = await Axios.get<null, TwidderRemote>("https://jsonplaceholder.typicode.com/posts");
      
      const newMessages = await messages.map(async (message) => {
        const { data: remoteComments } = await Axios.get<null, CommentsRemote>(`https://jsonplaceholder.typicode.com/posts/${message.id}/comments`);
        message.comments = remoteComments;
        
        return message;
      });
      
      Promise.all(newMessages).then((messages) => {
        setTwidders(messages);
      });
    }

    loadMessages();
  }, []);

  const handleCreatePost = (event: SyntheticEvent, textarea: RefObject<HTMLTextAreaElement>) => {
    event.preventDefault();

    if (textarea.current === null) {
      return;
    }
    setTwidders([
      {
        id: 400,
        title: "Meu twidd teste",
        comments: []
      },
      ...twidders
    ]);
  }

  const handleChangePost = (id: number) => {
    const [newTwidders, twidd3] = [[...twidders], twidders[id]];

    newTwidders[id].title = twidd3.title = "Novo titulo";

    setTwidders(newTwidders);
  }

  return (
    <section style={{ fontFamily: "sans-serif", fontSize: "1.3rem" }}>
      
      <div style={style}>
        <FormPostTwidder handleCreatePost={handleCreatePost} />
        <button onClick={() => handleChangePost(0)}>Change Message 1</button>
        {twidders.length > 0 ? twidders.map(({ id, title, comments }) => (
          <section key={id} style={messageStyle}>
            <h3 style={messageStyle}>{title}</h3>
            <p>Comentários | total: {comments.length}</p>
            <Comments messages={comments} />
          </section>
        )
        ) : 'Carregando...'}
      </div>
    </section>
  );
}

export default Twidder;