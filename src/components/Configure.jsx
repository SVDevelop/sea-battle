import { useState } from 'react';

const Configure = () => {
    const [setup, setSetup] = useState({
        cellSize: 30,
        rows: 10, 
        columns: 10,
        signed: true
    })
    // const setup = () => {}
    return {setup, setSetup}
};

export default Configure;