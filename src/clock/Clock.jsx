import { useEffect, useState } from 'react';
import './clock.css';

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time)
    }

    useEffect(() => {
        setInterval(updateTime, 1000);
    }, []);

    return (
        <div className='clock'>
            <h1 className='clock-text'>
                {currentTime}
            </h1>
        </div>
    )
}

export default Clock