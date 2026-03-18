import React, { useState, useEffect, useRef } from 'react';
import '../../styles/matchScreen.css';
import arenaBg from '../../assets/images/ArenaBackgroundPortrait.png';
import ludoBoardImg from '../../assets/images/match/LudoBoardGradient.png';

const MatchScreen = ({ onBack }) => {
    const [angle, setAngle] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const boardRef = useRef(null);
    const startAngleRef = useRef(0);
    const currentAngleRef = useRef(0);

    const getAngle = (clientX, clientY) => {
        if (!boardRef.current) return 0;
        const rect = boardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const radians = Math.atan2(clientY - centerY, clientX - centerX);
        return radians * (180 / Math.PI);
    };

    const handleStart = (clientX, clientY) => {
        setIsDragging(true);
        const mouseAngle = getAngle(clientX, clientY);
        startAngleRef.current = mouseAngle - currentAngleRef.current;
    };

    const handleMove = (clientX, clientY) => {
        if (!isDragging) return;
        const mouseAngle = getAngle(clientX, clientY);
        const newAngle = mouseAngle - startAngleRef.current;
        setAngle(newAngle);
        currentAngleRef.current = newAngle;
    };

    const handleEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const onMouseMove = (e) => handleMove(e.clientX, e.clientY);
        const onTouchMove = (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY);
        const onMouseUp = handleEnd;
        const onTouchEnd = handleEnd;

        if (isDragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('touchmove', onTouchMove);
            window.addEventListener('touchend', onTouchEnd);
        }

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, [isDragging]);

    return (
        <div className="match-container" style={{ backgroundImage: `url(${arenaBg})` }}>
            {/* Header with Back Button only */}
            <div className="match-header">
                <button className="match-back-btn" onClick={onBack}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
            </div>

            {/* Main Content: Large Ludo Board with Drag-to-Rotate */}
            <div className="match-content">
                <div 
                    ref={boardRef}
                    className={`ludo-board-wrapper ${isDragging ? 'grabbing' : ''}`}
                    style={{ 
                        backgroundImage: `url(${ludoBoardImg})`,
                        transform: `scale(1.05) rotateZ(${angle}deg)`
                    }}
                    onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
                    onTouchStart={(e) => handleStart(e.touches[0].clientX, e.touches[0].clientY)}
                >
                    {/* Centered Large Board with Drag Rotation */}
                </div>
            </div>
        </div>
    );
};

export default MatchScreen;
