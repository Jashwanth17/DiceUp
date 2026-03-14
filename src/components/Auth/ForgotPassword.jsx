import React from 'react';

const ForgotPassword = ({
    onNavigate,
    recoveryMethod,
    setRecoveryMethod,
    recoveryTarget,
    setRecoveryTarget,
    recoveryPhase,
    setRecoveryPhase,
    timer,
    startOTPTimer,
    otp,
    otpRefs,
    onOtpChange,
    onVerify
}) => {
    return (
        <div style={{ width: '100%' }}>
            <button className="back-btn" onClick={() => {
                onNavigate('login');
                setRecoveryPhase('entry');
                setRecoveryTarget('');
            }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back
            </button>

            <h2 style={{ fontFamily: 'Russo One', color: 'white', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>RECOVER ACCOUNT</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '2.5rem' }}>Choose your recovery method</p>

            <div className="recovery-tabs">
                <div
                    className={`recovery-tab ${recoveryMethod === 'email' ? 'active' : ''}`}
                    onClick={() => { setRecoveryMethod('email'); setRecoveryTarget(''); setRecoveryPhase('entry'); }}
                >
                    Email
                </div>
                <div
                    className={`recovery-tab ${recoveryMethod === 'mobile' ? 'active' : ''}`}
                    onClick={() => { setRecoveryMethod('mobile'); setRecoveryTarget(''); setRecoveryPhase('entry'); }}
                >
                    Mobile
                </div>
            </div>

            <div className="form-container">
                {recoveryMethod === 'mobile' && recoveryPhase === 'entry' ? (
                    <div className="mobile-input-group">
                        <div className="country-label">+91</div>
                        <input
                            className="input"
                            type="tel"
                            placeholder="Mobile Number"
                            value={recoveryTarget}
                            onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, '');
                                if (val.length > 10) return;
                                setRecoveryTarget(val);
                            }}
                            style={{ flex: 1 }}
                        />
                    </div>
                ) : recoveryPhase === 'entry' ? (
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={recoveryTarget}
                        onChange={(e) => setRecoveryTarget(e.target.value)}
                        required
                    />
                ) : null}

                {recoveryPhase === 'entry' ? (
                    <button
                        className="btn btn-signin"
                        disabled={recoveryMethod === 'mobile' ? recoveryTarget.length < 10 : !recoveryTarget.includes('@')}
                        onClick={() => { setRecoveryPhase('otp'); startOTPTimer(); }}
                    >
                        SEND OTP
                    </button>
                ) : (
                    <div className="otp-phase" style={{ width: '100%', border: 'none', padding: 0, marginTop: 0 }}>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
                            OTP sent to {recoveryTarget}
                        </p>
                        <div className="otp-box-row">
                            {otp.map((digit, i) => (
                                <input
                                    key={i}
                                    ref={otpRefs[i]}
                                    className="otp-box"
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => onOtpChange(i, e.target.value)}
                                />
                            ))}
                        </div>
                        <button className="btn btn-signin" onClick={onVerify}>VERIFY & LOGIN</button>
                        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                            {timer > 0 ? (
                                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                                    Resend OTP in <span style={{ color: 'var(--accent-color)' }}>{timer}s</span>
                                </p>
                            ) : (
                                <p
                                    style={{ fontSize: '0.75rem', color: 'var(--accent-color)', cursor: 'pointer', fontWeight: 'bold' }}
                                    onClick={startOTPTimer}
                                >
                                    Resend OTP?
                                </p>
                            )}
                            <p
                                style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.5rem', cursor: 'pointer' }}
                                onClick={() => { setRecoveryPhase('entry'); onOtpChange(-1, ''); }} // -1 to clear all
                            >
                                Try again?
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
