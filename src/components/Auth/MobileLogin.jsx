import React from 'react';

const MobileLogin = ({
    onNavigate,
    mobilePhase,
    setMobilePhase,
    phoneNumber,
    setPhoneNumber,
    otp,
    otpRefs,
    onOtpChange,
    timer,
    startOTPTimer,
    onVerify
}) => {
    return (
        <div style={{ width: '100%' }}>
            <button className="back-btn" onClick={() => {
                onNavigate('login');
                setMobilePhase('entry');
                setPhoneNumber('');
            }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back
            </button>

            <h2 style={{ fontFamily: 'Russo One', color: 'white', marginBottom: '0.5rem', marginTop: '1.5rem' }}>MOBILE LOGIN</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '2.5rem' }}>
                {mobilePhase === 'entry' ? "Enter your mobile number to get started" : `OTP sent to +91 ${phoneNumber}`}
            </p>

            <div className="mobile-input-group">
                <div className="country-label">+91</div>
                <input
                    className="input"
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        if (val.length > 10) return;
                        setPhoneNumber(val);
                    }}
                    style={{ flex: 1 }}
                    disabled={mobilePhase === 'otp'}
                />
            </div>

            {mobilePhase === 'entry' ? (
                <button
                    className="btn btn-signin"
                    disabled={phoneNumber.length < 10}
                    onClick={() => { setMobilePhase('otp'); startOTPTimer(); }}
                >
                    SEND OTP
                </button>
            ) : (
                <>
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
                            onClick={() => { setMobilePhase('entry'); onOtpChange(-1, ''); }}
                        >
                            Change Number?
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default MobileLogin;
