import React, { RefObject, SyntheticEvent, useRef } from 'react';

interface IFormProps {
    handleCreatePost: (event: SyntheticEvent, textarea: RefObject<HTMLTextAreaElement>) => void
}

const FormPostTwidder = ({ handleCreatePost }: IFormProps) => {
    const textarea = useRef<HTMLTextAreaElement>(null);

    return (
        <div>
            <form onSubmit={(event: SyntheticEvent) => handleCreatePost(event, textarea)}>
                <label style={{ display: "block" }} htmlFor="twidderMessage">Twidde agora:</label>
                <textarea ref={textarea} style={{ fontFamily: "sans-serif", fontSize: "1.3rem", border: "1px solid #DDD" }} id="twidderMessage" cols={120} rows={2}></textarea>
                <button style={{ display: "block", margin: "5px 0", padding: "10px 40px" }}>Twiddar</button>
            </form>
        </div>
    );
}

export default FormPostTwidder;