import React, { useState } from 'react';
import '../../styles/lobby.css';

import classicImg from '../../assets/images/ClassicArena.png';
import tourneyImg from '../../assets/images/Tournament.png';
import quickImg from '../../assets/images/StopWatch.png';
import challengeImg from '../../assets/images/ChallengeMode.png';
import strategyImg from '../../assets/images/Strategy.png';

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

            {/* Classic Arena - Full Width */}
            <div className="game-card full-width classic">
                <div className="card-bg-image">
                    <img src={classicImg} alt="Classic Arena" />
                    <div className="card-bg-gradient"></div>
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
                <div className="card-bg-image">
                    <img src={tourneyImg} alt="Tournament" />
                    <div className="card-bg-gradient"></div>
                </div>
                <div>
                    <h3>TOURNAMENT</h3>
                    <p className="desc">Team battles: 2v2, 3v3, 4v4.<br />Compete for the crown.</p>
                </div>
                <button className="card-btn">JOIN TEAM</button>
            </div>

            {/* Quick Play - Half Width */}
            <div className="game-card half-width">
                <div className="card-bg-image">
                    <img src={quickImg} alt="Quick Play" />
                    <div className="card-bg-gradient"></div>
                </div>
                <div>
                    <h3>QUICK PLAY</h3>
                    <p className="desc">5 or 10-Minute matches.<br />Fast-paced Ludo action.</p>
                </div>
                <button className="card-btn">SPEED RUN</button>
            </div>

            {/* Challenge Mode - Full Width */}
            <div className="game-card full-width full-width-bot">
                <div className="card-bg-image">
                    <img src={challengeImg} alt="Challenge Mode" />
                    <div className="card-bg-gradient"></div>
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
                <div className="card-bg-image">
                    <img src={strategyImg} alt="Strategy Mode" />
                    <div className="card-bg-gradient"></div>
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
