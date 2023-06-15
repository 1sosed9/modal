import React, { useState } from 'react';
import Modal from './componets/Modal/Modal';
import './index.scss';

function App() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="App">
            <button className="open-modal-btn" onClick={() => setOpen(true)}>✨ Открыть окно</button>
            <Modal open={open} setOpen={setOpen} children={<img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />}>
            </Modal>
        </div>
    );
}

export default App;
