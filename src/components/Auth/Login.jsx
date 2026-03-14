import React from 'react';
import diceIcon from '../../assets/images/dice-icon.webp';

const Login = ({ onNavigate, onTogglePassword, showPassword, onLogin }) => {
    return (
        <>
            <div className="logo-container">
                <img src={diceIcon} alt="DiceUp Icon" className="dice-icon" />
                <h1>DICEUP</h1>
                <p className="tagline">Play Together. Win Together.</p>
            </div>

            <div className="auth-options">
                <button className="btn btn-google">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="22" alt="Google Logo" />
                    Continue with Google
                </button>
                <button className="btn btn-mobile" onClick={() => onNavigate('mobile')}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                    Mobile Number
                </button>
            </div>

            <div className="form-container">
                <input type="email" placeholder="Email Address" required />
                <div className="password-wrapper">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        required
                    />
                    <button
                        className="toggle-password"
                        onClick={onTogglePassword}
                        type="button"
                    >
                        {showPassword ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22"></path>
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        )}
                    </button>
                </div>
                <button className="btn btn-signin" onClick={onLogin}>SIGN IN</button>
            </div>

            <div className="links">
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('forgot-password'); }}>Forgot Password?</a>
                <span>•</span>
                <span>New here?</span>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('signup'); }}>Sign up</a>
            </div>
        </>
    );
};

export default Login;
