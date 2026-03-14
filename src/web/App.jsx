import React, { useState, useRef, useEffect } from 'react';
import '../styles/login.css';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import ForgotPassword from '../components/Auth/ForgotPassword';
import MobileLogin from '../components/Auth/MobileLogin';
import Lobby from '../components/Game/Lobby';

function App() {
    const [currentScreen, setCurrentScreen] = useState('login');
    const [showPassword, setShowPassword] = useState(false);

    // Auth States
    const [mobilePhase, setMobilePhase] = useState('entry');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const otpRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

    // Signup Data
    const [signupData, setSignupData] = useState({
        fullName: '',
        email: '',
        password: '',
        gender: 'Male'
    });
    const [selectedAvatar, setSelectedAvatar] = useState('assets/images/avatar1.png');
    const [uploadedAvatar, setUploadedAvatar] = useState(null);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const fileInputRef = useRef(null);

    // Recovery Data
    const [recoveryMethod, setRecoveryMethod] = useState('email');
    const [recoveryTarget, setRecoveryTarget] = useState('');
    const [recoveryPhase, setRecoveryPhase] = useState('entry');

    // Shared Timer
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval = null;
        if (timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const startOTPTimer = () => {
        setOtp(['', '', '', '', '', '']);
        setTimer(30);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedAvatar(reader.result);
                setSelectedAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleOtpChange = (index, value) => {
        if (index === -1) {
            setOtp(['', '', '', '', '', '']);
            return;
        }
        const char = value.substring(value.length - 1);
        if (isNaN(char)) return;
        const newOtp = [...otp];
        newOtp[index] = char;
        setOtp(newOtp);
        if (char && index < 5) otpRefs[index + 1].current.focus();
    };

    const avatars = [
        'assets/images/avatar1.png',
        'assets/images/avatar2.png',
        'assets/images/avatar3.png'
    ];

    const renderContent = () => {
        switch (currentScreen) {
            case 'mobile':
                return (
                    <MobileLogin
                        onNavigate={setCurrentScreen}
                        mobilePhase={mobilePhase}
                        setMobilePhase={setMobilePhase}
                        phoneNumber={phoneNumber}
                        setPhoneNumber={setPhoneNumber}
                        otp={otp}
                        otpRefs={otpRefs}
                        onOtpChange={handleOtpChange}
                        timer={timer}
                        startOTPTimer={startOTPTimer}
                        onVerify={() => setCurrentScreen('home')}
                    />
                );
            case 'signup':
                return (
                    <Signup
                        onNavigate={setCurrentScreen}
                        onTogglePassword={() => setShowPassword(!showPassword)}
                        showPassword={showPassword}
                        formData={signupData}
                        setFormData={setSignupData}
                        avatars={avatars}
                        selectedAvatar={selectedAvatar}
                        setSelectedAvatar={setSelectedAvatar}
                        uploadedAvatar={uploadedAvatar}
                        onFileUpload={handleFileUpload}
                        fileInputRef={fileInputRef}
                        agreedToTerms={agreedToTerms}
                        setAgreedToTerms={setAgreedToTerms}
                        onSignup={() => setCurrentScreen('home')}
                    />
                );
            case 'forgot-password':
                return (
                    <ForgotPassword
                        onNavigate={setCurrentScreen}
                        recoveryMethod={recoveryMethod}
                        setRecoveryMethod={setRecoveryMethod}
                        recoveryTarget={recoveryTarget}
                        setRecoveryTarget={setRecoveryTarget}
                        recoveryPhase={recoveryPhase}
                        setRecoveryPhase={setRecoveryPhase}
                        timer={timer}
                        startOTPTimer={startOTPTimer}
                        otp={otp}
                        otpRefs={otpRefs}
                        onOtpChange={handleOtpChange}
                        onVerify={() => setCurrentScreen('home')}
                    />
                );
            default:
                return (
                    <Login
                        onNavigate={setCurrentScreen}
                        onTogglePassword={() => setShowPassword(!showPassword)}
                        showPassword={showPassword}
                        onLogin={() => setCurrentScreen('home')}
                    />
                );
        }
    };

    if (currentScreen === 'home') {
        return <Lobby username={signupData.fullName || 'DiceUp Pro'} avatar={selectedAvatar} />;
    }

    return (
        <div className="login-container">
            {renderContent()}
            <div className="footer-text">
                BY ACCESSING DICEUP, YOU AGREE TO OUR<br />
                <a href="#">TERMS OF SERVICE</a> & <a href="#">PRIVACY POLICY</a>
            </div>
        </div>
    );
}

export default App;
