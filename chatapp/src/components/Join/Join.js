import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  // name = localStorage.getItem("user_f_name") + localStorage.getItem("user_l_name");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" defaultValue={localStorage.getItem("user_f_name") + localStorage.getItem("user_l_name")} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat-on?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Join the group</button>
        </Link>
      </div>
    </div>
  );
}
