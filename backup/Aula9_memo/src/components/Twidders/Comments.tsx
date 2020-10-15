import React from "react";

interface ICommentsProps {
    messages: Message[];
}

export interface Message {
    id: number;
    name: string;
    body: string;
}

const style = {
    marginLeft: "30px"
}

const Comments = ({ messages }: ICommentsProps) => {
    return (
        <div style={style} className="comments">
        {messages.map(({ id, name, body }) => (
            <div key={id}>
                <h4>{name}</h4>
                <p style={{ width: "400px" }}>{body}</p>
            </div>
            )
        )}
        </div>
    );
}

export default Comments;