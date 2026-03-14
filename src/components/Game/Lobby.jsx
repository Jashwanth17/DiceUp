import React, { useState } from 'react';
import '../../styles/lobby.css';

const Lobby = ({ username, avatar }) => {
    const [activeTab, setActiveTab] = useState('home');

    const renderHeader = () => (
        <div className="lobby-header">
            <div className="profile-section">
                <div className="avatar-wrapper">
                    <img src={avatar || 'assets/images/avatar1.png'} alt="Profile Avatar" className="lobby-avatar" />
                    <div className="level-badge">LVL 24</div>
                </div>
                <div className="player-info">
                    <h2>{username || 'DiceUp'}</h2>
                    <p className="player-title">PRO PLAYER</p>
                </div>
            </div>
            
            <div className="currency-bar">
                <div className="currency coins">
                    <span>50.4K</span> 🪙
                </div>
                <div className="divider"></div>
                <div className="currency gems">
                    <span>1,250</span> 💎
                </div>
            </div>
        </div>
    );

    const renderHome = () => (
        <div className="card-grid">
            {/* SVG Shared Gradients */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <linearGradient id="dice-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#00E5FF" />
                    </linearGradient>
                    <linearGradient id="team-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00E5FF" />
                        <stop offset="100%" stopColor="#005A66" />
                    </linearGradient>
                    <linearGradient id="bolt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="100%" stopColor="#FF6B00" />
                    </linearGradient>
                    <linearGradient id="sword-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E2E8F0" />
                        <stop offset="100%" stopColor="#94A3B8" />
                    </linearGradient>
                    <linearGradient id="head-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00E5FF" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Classic Arena - Full Width */}
            <div className="game-card full-width classic">
                <div className="card-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="url(#dice-grad)" className="premium-svg">
                        <rect x="3" y="3" width="18" height="18" rx="4" ry="4" stroke="rgba(0,229,255,0.5)" strokeWidth="1"></rect>
                        <circle cx="8" cy="8" r="1.5" fill="#0A1926"></circle>
                        <circle cx="16" cy="16" r="1.5" fill="#0A1926"></circle>
                        <circle cx="16" cy="8" r="1.5" fill="#0A1926"></circle>
                        <circle cx="8" cy="16" r="1.5" fill="#0A1926"></circle>
                        <circle cx="12" cy="12" r="1.5" fill="#0A1926"></circle>
                    </svg>
                </div>
                <div>
                    <h3>CLASSIC ARENA</h3>
                    <p className="subtitle">Traditional 2-8 player free-for-all.</p>
                    <p className="desc">The first player to bring all tokens home wins.</p>
                </div>
                <button className="card-btn primary">PLAY NOW</button>
            </div>

            {/* Tournament - Half Width */}
            <div className="game-card half-width">
                <div className="card-icon">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="url(#team-grad)" className="premium-svg">
                        <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" opacity="0.9"></path>
                        <path d="M18 21a6 6 0 0 0-12 0h12z" opacity="0.9"></path>
                        <path d="M19 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" opacity="0.5"></path>
                        <path d="M23 21a5 5 0 0 0-8-2.67v2.67h8z" opacity="0.5"></path>
                        <path d="M5 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" opacity="0.5"></path>
                        <path d="M1 21a5 5 0 0 1 8-2.67v2.67H1z" opacity="0.5"></path>
                    </svg>
                </div>
                <div>
                    <h3>TOURNAMENT</h3>
                    <p className="desc">Team battles: 2v2, 3v3, 4v4.<br />Compete for the crown.</p>
                </div>
                <button className="card-btn">JOIN TEAM</button>
            </div>

            {/* Quick Play - Half Width */}
            <div className="game-card half-width">
                <div className="card-icon">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="url(#bolt-grad)" className="premium-svg">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                </div>
                <div>
                    <h3>QUICK PLAY</h3>
                    <p className="desc">5 or 10-Minute matches.<br />Fast-paced Ludo action.</p>
                </div>
                <button className="card-btn">SPEED RUN</button>
            </div>

            {/* Challenge Mode - Full Width */}
            <div className="game-card full-width full-width-bot">
                <div className="card-icon custom-sword">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="url(#sword-grad)" className="premium-svg">
                        <path d="M18.8 3.2C18.1 2.5 17 2.5 16.3 3.2L12 7.5L7.7 3.2C7 2.5 5.9 2.5 5.2 3.2C4.5 3.9 4.5 5 5.2 5.7L9.5 10L3.2 16.3C2.5 17 2.5 18.1 3.2 18.8L5.2 20.8C5.9 21.5 7 21.5 7.7 20.8L14 14.5L18.3 18.8C19 19.5 20.1 19.5 20.8 18.8C21.5 18.1 21.5 17 20.8 16.3L16.5 12L20.8 7.7C21.5 7 21.5 5.9 20.8 5.2L18.8 3.2Z" />
                    </svg>
                </div>
                <div>
                    <h3>CHALLENGE MODE</h3>
                    <p className="subtitle">1 vs 2, 1 vs 3, or 1 vs 4.</p>
                    <p className="desc">One player must defeat multiple opponents to claim the jackpot.</p>
                </div>
                <button className="card-btn">ACCEPT CHALLENGE</button>
            </div>

            {/* Strategy Mode - Full Width */}
            <div className="game-card full-width full-width-bot">
                <div className="card-icon custom-strategy">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="url(#head-grad)" className="premium-svg">
                        <path d="M11.5,21.5 C6.80557963,21.4984242 3,17.6599691 3,12.941 C3,11.233 3.511,9.654 4.384,8.349 C4.569,7.399 5.341,6.671 6.307,6.467 C7.025,5.086 8.356,4 10,4 C11.968,4 13.626,5.335 14.125,7.151 C14.654,7.051 15.204,7 15.765,7 C18.656,7 21,9.344 21,12.235 C21,14.685 19.324,16.745 17.039,17.331 C17.013,17.387 16.983,17.441 16.953,17.494 L15.234,20.5 C14.542,21.71 13.5,21.5 12.5,21.5 Z" opacity="0.4"/>
                        <path d="M14.5,12 C14.5,13.38 13.38,14.5 12,14.5 C10.62,14.5 9.5,13.38 9.5,12 C9.5,10.62 10.62,9.5 12,9.5 C13.38,9.5 14.5,10.62 14.5,12 Z"/>
                        <path d="M15.464,13.565 L16.891,14.07 C16.591,14.914 16.03,15.632 15.289,16.126 L14.032,15.342 C13.435,15.703 12.74,15.93 12,16 L12,17.5 C11.083,17.5 10.222,17.202 9.502,16.703 L10.366,15.49 C9.791,15.143 9.293,14.673 8.904,14.114 L7.468,14.566 C7.091,13.784 6.9,12.915 6.942,12 L8.428,12 C8.461,11.237 8.7,10.518 9.106,9.889 L8.067,8.85 C8.683,8.086 9.489,7.5 10.428,7.169 L11.082,8.535 C11.714,8.232 12.428,8.058 13.18,8 L13.407,6.516 C14.34,6.671 15.201,7.03 15.939,7.55 L15.02,8.775 C15.545,9.255 15.968,9.843 16.257,10.5 L17.659,10.127 C17.893,10.966 17.936,11.87 17.778,12.732 L16.32,12.443 C16.13,12.871 15.84,13.25 15.464,13.565 Z M12,13.5 C12.828,13.5 13.5,12.828 13.5,12 C13.5,11.172 12.828,10.5 12,10.5 C11.172,10.5 10.5,11.172 10.5,12 C10.5,12.828 11.172,13.5 12,13.5 Z"/>
                    </svg>
                </div>
                <div>
                    <h3>STRATEGY MODE</h3>
                    <p className="subtitle">Gate Block & Freeze Move abilities.</p>
                    <p className="desc">Strategic gameplay with unique special abilities to crush foes.</p>
                </div>
                <button className="card-btn">USE TACTICS</button>
            </div>
        </div>
    );

    const renderFriends = () => (
        <div className="tab-content">
            <h2>FRIENDS</h2>
            <p>Connect and play with your friends.</p>
            <div className="tab-feature-list">
                <div className="feature-item">➕ Add Friends</div>
                <div className="feature-item">🎮 Invite to Play</div>
                <div className="feature-item">🔒 Create Private Rooms</div>
                <div className="feature-item">🟢 View Online Friends</div>
            </div>
        </div>
    );

    const renderRewards = () => (
        <div className="tab-content">
            <h2>REWARDS</h2>
            <p>Return to the game regularly for bonuses.</p>
            <div className="tab-feature-list">
                <div className="feature-item">🎁 Daily Login Rewards</div>
                <div className="feature-item">🎡 Lucky Spin</div>
                <div className="feature-item">🌟 Special Events</div>
                <div className="feature-item">🪙 Free Coins</div>
            </div>
        </div>
    );

    const renderLeaderboard = () => (
        <div className="tab-content">
            <h2>LEADERBOARD</h2>
            <p>Compete to achieve higher ranks.</p>
            <div className="tab-feature-list">
                <div className="feature-item">🌍 Global Leaderboard</div>
                <div className="feature-item">📅 Weekly Rankings</div>
                <div className="feature-item">👑 Top Players</div>
                <div className="feature-item">📊 Player Statistics</div>
            </div>
        </div>
    );

    const renderProfile = () => (
        <div className="tab-content">
            <h2>PROFILE</h2>
            <p>Manage your account and view progress.</p>
            <div className="tab-feature-list">
                <div className="feature-item">👤 Customize Avatar & Name</div>
                <div className="feature-item">⭐ View Level (LVL 24)</div>
                <div className="feature-item">🏆 Total Wins & History</div>
                <div className="feature-item">⚙️ Game Settings</div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch(activeTab) {
            case 'profile': return renderProfile();
            case 'friends': return renderFriends();
            case 'home': return renderHome();
            case 'rewards': return renderRewards();
            case 'leaderboard': return renderLeaderboard();
            default: return renderHome();
        }
    };

    return (
        <div className="lobby-container">
            {renderHeader()}
            <div className="lobby-content">
                {renderContent()}
            </div>

            {/* Bottom Navigation */}
            <div className="lobby-nav">
                
                <div className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
                    <div className="nav-icon-wrapper">
                        <span className="nav-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </span>
                    </div>
                    <span>PROFILE</span>
                </div>

                <div className={`nav-item ${activeTab === 'friends' ? 'active' : ''}`} onClick={() => setActiveTab('friends')}>
                    <div className="nav-icon-wrapper">
                        <span className="nav-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </span>
                    </div>
                    <span>FRIENDS</span>
                </div>

                <div className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
                    <div className="nav-icon-wrapper">
                        <span className="nav-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </span>
                    </div>
                    <span>HOME</span>
                </div>

                <div className={`nav-item ${activeTab === 'rewards' ? 'active' : ''}`} onClick={() => setActiveTab('rewards')}>
                    <div className="nav-icon-wrapper">
                        <span className="nav-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                                <rect x="2" y="7" width="20" height="5"></rect>
                                <line x1="12" y1="22" x2="12" y2="7"></line>
                                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                            </svg>
                        </span>
                    </div>
                    <span>REWARDS</span>
                </div>

                <div className={`nav-item ${activeTab === 'leaderboard' ? 'active' : ''}`} onClick={() => setActiveTab('leaderboard')}>
                    <div className="nav-icon-wrapper">
                        <span className="nav-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 20V10"></path>
                                <path d="M12 20V4"></path>
                                <path d="M6 20v-4"></path>
                                <line x1="2" y1="20" x2="22" y2="20"></line>
                            </svg>
                        </span>
                    </div>
                    <span>RANKING</span>
                </div>

            </div>
        </div>
    );
};

export default Lobby;
