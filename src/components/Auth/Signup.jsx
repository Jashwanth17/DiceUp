import React from 'react';

const Signup = ({
    onNavigate,
    onTogglePassword,
    showPassword,
    formData,
    setFormData,
    avatars,
    selectedAvatar,
    setSelectedAvatar,
    uploadedAvatar,
    onFileUpload,
    fileInputRef,
    agreedToTerms,
    setAgreedToTerms,
    onSignup
}) => {
    const { fullName, email, password, gender } = formData;

    return (
        <div style={{ width: '100%' }}>
            <button className="back-btn" onClick={() => onNavigate('login')}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back
            </button>

            <h2 style={{ fontFamily: 'Russo One', color: 'white', marginBottom: '0.25rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>CREATE ACCOUNT</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '1rem' }}>Join the DiceUp community today</p>

            <div className="form-container" style={{ gap: '0.5rem' }}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <div className="password-wrapper">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                    <button className="toggle-password" onClick={onTogglePassword} type="button">
                        {showPassword ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22"></path></svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        )}
                    </button>
                </div>

                <div className="selection-label">Select Gender</div>
                <div className="selection-group">
                    {['Male', 'Female', 'Other'].map(g => (
                        <div
                            key={g}
                            className={`selection-tile ${gender === g ? 'active' : ''}`}
                            onClick={() => setFormData({ ...formData, gender: g })}
                        >
                            <div style={{ fontSize: '1rem' }}>{g === 'Male' ? '♂️' : g === 'Female' ? '♀️' : '👤'}</div>
                            {g}
                        </div>
                    ))}
                </div>

                <div className="selection-label">Select Avatar</div>
                <div className="avatar-grid">
                    {avatars.map((url, i) => (
                        <div key={i} className={`avatar-tile ${selectedAvatar === url ? 'active' : ''}`} onClick={() => setSelectedAvatar(url)}>
                            <img src={url} alt={`Avatar ${i + 1}`} />
                        </div>
                    ))}

                    <div
                        className={`avatar-tile ${selectedAvatar === uploadedAvatar ? 'active' : ''} ${!uploadedAvatar ? 'upload-box' : ''}`}
                        onClick={() => uploadedAvatar ? setSelectedAvatar(uploadedAvatar) : fileInputRef.current.click()}
                    >
                        {uploadedAvatar ? (
                            <img src={uploadedAvatar} alt="Custom Avatar" />
                        ) : (
                            "+"
                        )}
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={onFileUpload}
                    />
                </div>

                <div className="checkbox-row">
                    <input
                        type="checkbox"
                        id="terms"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                    />
                    <label htmlFor="terms">I agree to the Terms & Conditions</label>
                </div>

                <button
                    className="btn btn-signin"
                    style={{ marginTop: '0.5rem' }}
                    disabled={!agreedToTerms}
                    onClick={onSignup}
                >
                    SIGN UP
                </button>
            </div>
        </div>
    );
};

export default Signup;
