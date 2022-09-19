import React, { useState } from 'react';
// import {Container} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Quill.css';

function MyComponent() {
//   const [show, setShow] = useState('')
    const [value, setValue] = useState('');
    const getBtnData = () => {
        console.log(value);
    }
  return (
    <div className="editor">
      <button className="btnDataClass" onClick={getBtnData}>Save</button>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
}

export default MyComponent;
