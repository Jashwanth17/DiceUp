import React, { useState, useEffect } from 'react';
import '../../styles/classicArena.css';
import arenaBg from '../../assets/images/ArenaBackgroundPortrait.png';
import ludoBoardImg from '../../assets/images/match/LudoBoardGradient.png';

const playerOptions = [
    {
        count: 2, label: '2 Players',
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        )
    },
    {
        count: 3, label: '3 Players',
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        )
    },
    {
        count: 4, label: '4 Players',
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                <circle cx="19" cy="7" r="3" opacity="0.5"></circle>
            </svg>
        )
    },
    {
        count: 5, label: '5 Players',
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <circle cx="12" cy="4" r="2" opacity="0.7"></circle>
                <circle cx="12" cy="20" r="2" opacity="0.7"></circle>
                <circle cx="4" cy="12" r="2" opacity="0.7"></circle>
                <circle cx="20" cy="12" r="2" opacity="0.7"></circle>
            </svg>
        )
    },
    {
        count: 6, label: '6 Players',
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="8" r="3"></circle>
                <circle cx="16" cy="8" r="3"></circle>
                <circle cx="4" cy="16" r="3" opacity="0.7"></circle>
                <circle cx="12" cy="16" r="3"></circle>
                <circle cx="20" cy="16" r="3" opacity="0.7"></circle>
            </svg>
        )
    },
];

const ClassicArena = ({ onBack, onStartMatch }) => {
    const [selected, setSelected] = useState(null);
    const [matchmaking, setMatchmaking] = useState(false);

    // Preload MatchScreen assets during matchmaking delay
    useEffect(() => {
        if (matchmaking) {
            const preloadImages = [arenaBg, ludoBoardImg];
            preloadImages.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        }
    }, [matchmaking]);

    const handleStartMatch = () => {
        if (!selected) return;
        setMatchmaking(true);
        setTimeout(() => {
            setMatchmaking(false);
            if (onStartMatch) onStartMatch(selected);
        }, 3000);
    };

    return (
        <div
            className="arena-container"
            style={{ backgroundImage: `url(${arenaBg})` }}
        >
            <div className="arena-header">
                <button className="arena-back-btn" onClick={onBack}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <div className="arena-header-text">
                    <span className="arena-mode-label">ARENA MODE</span>
                    <h1 className="arena-title">CLASSIC ARENA</h1>
                </div>
            </div>

            <div className="arena-body">
                <div className="arena-match-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="M12 8v4" opacity="0.6" />
                        <path d="M12 16h.01" opacity="0.8" />
                    </svg>
                </div>

                <h2 className="arena-section-title">Matchmaking</h2>
                <p className="arena-section-sub">SELECT PLAYER COUNT</p>

                <div className="player-grid">
                    <button className={`player-card ${selected === 2 ? 'selected' : ''}`} onClick={() => setSelected(2)}>
                        <span className="player-card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                <path d="m18 14-3-3 3-3" opacity="0.5" />
                                <path d="m6 10 3 3-3 3" opacity="0.5" />
                            </svg>
                        </span>
                        <span className="player-card-label">2 Players</span>
                    </button>

                    <button className={`player-card ${selected === 3 ? 'selected' : ''}`} onClick={() => setSelected(3)}>
                        <span className="player-card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="5" r="3" />
                                <path d="M12 8v3" opacity="0.6" />
                                <circle cx="6" cy="15" r="3" />
                                <circle cx="18" cy="15" r="3" />
                                <path d="M6 18v1" opacity="0.6" />
                                <path d="M18 18v1" opacity="0.6" />
                                <path d="m9 15 3-3 3 3" opacity="0.4" />
                            </svg>
                        </span>
                        <span className="player-card-label">3 Players</span>
                    </button>

                    <button className={`player-card center-solo ${selected === 4 ? 'selected' : ''}`} onClick={() => setSelected(4)}>
                        <span className="player-card-icon">
                            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="7" rx="1" />
                                <rect x="14" y="3" width="7" height="7" rx="1" />
                                <rect x="3" y="14" width="7" height="7" rx="1" />
                                <rect x="14" y="14" width="7" height="7" rx="1" />
                                <path d="M10 6.5h4" opacity="0.5" />
                                <path d="M10 17.5h4" opacity="0.5" />
                                <path d="M6.5 10v4" opacity="0.5" />
                                <path d="M17.5 10v4" opacity="0.5" />
                                <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8" />
                            </svg>
                        </span>
                        <span className="player-card-label">4 Players</span>
                    </button>

                    <button className={`player-card ${selected === 5 ? 'selected' : ''}`} onClick={() => setSelected(5)}>
                        <span className="player-card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3" />
                                <circle cx="12" cy="4" r="2" opacity="0.7" />
                                <circle cx="12" cy="20" r="2" opacity="0.7" />
                                <circle cx="4" cy="12" r="2" opacity="0.7" />
                                <circle cx="20" cy="12" r="2" opacity="0.7" />
                                <path d="M12 7v2" opacity="0.4" />
                                <path d="m7 12 2 0" opacity="0.4" />
                            </svg>
                        </span>
                        <span className="player-card-label">5 Players</span>
                    </button>

                    <button className={`player-card ${selected === 6 ? 'selected' : ''}`} onClick={() => setSelected(6)}>
                        <span className="player-card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="8" cy="8" r="3" />
                                <circle cx="16" cy="8" r="3" />
                                <circle cx="20" cy="16" r="3" opacity="0.7" />
                                <circle cx="12" cy="16" r="3" />
                                <circle cx="4" cy="16" r="3" opacity="0.7" />
                                <path d="M12 11v2" opacity="0.5" />
                            </svg>
                        </span>
                        <span className="player-card-label">6 Players</span>
                    </button>
                </div>
            </div>

            <div className="arena-footer">
                <button
                    className={`start-match-btn ${!selected ? 'disabled' : ''}`}
                    onClick={handleStartMatch}
                    disabled={!selected}
                >
                    {matchmaking ? (
                        <>
                            <span className="dot-pulse"></span>
                            FINDING MATCH...
                        </>
                    ) : (
                        <>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                            START MATCH
                        </>
                    )}
                </button>
                <p className="arena-connect-label">CONNECTING TO GLOBAL SERVERS...</p>
            </div>
        </div>
    );
};

export default ClassicArena;
