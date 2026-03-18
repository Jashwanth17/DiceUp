import React, { useState, useEffect, useRef } from 'react';
import '../../styles/matchScreen.css';
import arenaBg from '../../assets/images/ArenaBackgroundPortrait.png';
import ludoBoardImg from '../../assets/images/match/LudoBoardGradient.png';

const MatchScreen = ({ onBack }) => {
    const isDraggingRef = useRef(false);
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

    const updateBoardTransform = (angle) => {
        if (boardRef.current) {
            boardRef.current.style.transform = `scale(1.05) rotateZ(${angle}deg)`;
        }
    };

    const handleStart = (clientX, clientY, e) => {
        // Prevent default browser behavior (scrolling)
        if (e && e.cancelable) e.preventDefault();
        
        isDraggingRef.current = true;
        boardRef.current?.classList.add('grabbing');
        
        const mouseAngle = getAngle(clientX, clientY);
        startAngleRef.current = mouseAngle - currentAngleRef.current;
    };

    const handleMove = (clientX, clientY, e) => {
        if (!isDraggingRef.current) return;
        
        // Prevent default browser behavior (scrolling) during drag
        if (e && e.cancelable) e.preventDefault();

        const mouseAngle = getAngle(clientX, clientY);
        const newAngle = mouseAngle - startAngleRef.current;
        
        // DIRECT DOM UPDATE for maximum performance (60fps)
        updateBoardTransform(newAngle);
        currentAngleRef.current = newAngle;
    };

    const handleEnd = () => {
        isDraggingRef.current = false;
        boardRef.current?.classList.remove('grabbing');
    };

    useEffect(() => {
        const onMouseMove = (e) => handleMove(e.clientX, e.clientY, e);
        const onTouchMove = (e) => {
            if (e.touches && e.touches[0]) {
                handleMove(e.touches[0].clientX, e.touches[0].clientY, e);
            }
        };
        const onMouseUp = handleEnd;
        const onTouchEnd = handleEnd;

        // Use standard window listeners for a wider drag catchment
        window.addEventListener('mousemove', onMouseMove, { passive: false });
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, []);

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

            {/* Main Content: Large Ludo Board with High-Performance Drag-to-Rotate */}
            <div className="match-content">
                <div 
                    ref={boardRef}
                    className="ludo-board-wrapper"
                    style={{ 
                        backgroundImage: `url(${ludoBoardImg})`,
                        transform: 'scale(1.05) rotateZ(0deg)' // Initial state
                    }}
                    onMouseDown={(e) => handleStart(e.clientX, e.clientY, e)}
                    onTouchStart={(e) => {
                        if (e.touches && e.touches[0]) {
                            handleStart(e.touches[0].clientX, e.touches[0].clientY, e);
                        }
                    }}
                >
                    {/* Direct DOM Rotation for zero-latency mobile feel */}
                </div>
            </div>
        </div>
    );
};

export default MatchScreen;
