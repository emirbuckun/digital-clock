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
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
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