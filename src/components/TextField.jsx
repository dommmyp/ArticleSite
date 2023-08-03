import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './TextField.css'

function TextField() {
    const [value, setValue] = useState('');

    const submit = async (content) => {
        const date = new Date()
        const output = {
            title: 'title',
            content: content,
            user: 'default',
            topics: ['math'],
            date: date
        };
        await fetch('http://localhost:3000/create-post', {
            method: 'POST',
            body: JSON.stringify(output),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <div className="textField">
            <ReactQuill theme="snow" value={value} onChange={setValue} />
            <button onClick={() => submit(value)}>submit</button>
        </div>
    )
}
export default TextField;
