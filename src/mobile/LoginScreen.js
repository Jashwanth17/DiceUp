import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { useFonts, RussoOne_400Regular } from '@expo-google-fonts/russo-one';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  let [fontsLoaded] = useFonts({
    RussoOne_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.backgroundGlow} />

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/dice-icon.png')}
            style={styles.diceIcon}
            resizeMode="contain"
          />
          <Text style={styles.title}>DICEUP</Text>
          <Text style={styles.tagline}>PLAY TOGETHER. WIN TOGETHER.</Text>
        </View>

        <View style={styles.authOptions}>
          <TouchableOpacity style={styles.googleBtn}>
            <Image
              source={{ uri: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg' }}
              style={styles.googleIcon}
            />
            <Text style={styles.googleBtnText}>CONTINUE WITH GOOGLE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mobileBtn}>
            <Text style={styles.mobileBtnText}>MOBILE NUMBER</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
          />
          <View style={styles.passwordWrapper}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255,0.4)"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#00E5FF"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signInBtnText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linksContainer}>
          <TouchableOpacity>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
          <Text style={styles.dot}>•</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.normalText}>New here? </Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.footerText}>
          BY ACCESSING DICEUP, YOU AGREE TO OUR{'\n'}
          <Text style={styles.footerLink}>TERMS OF SERVICE</Text> & <Text style={styles.footerLink}>PRIVACY POLICY</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040D14',
  },
  backgroundGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#040D14',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  diceIcon: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  title: {
    fontFamily: 'RussoOne_400Regular',
    fontSize: 48,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 229, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  tagline: {
    fontSize: 10,
    letterSpacing: 3,
    color: 'rgba(0, 229, 255, 0.7)',
    fontWeight: 'bold',
    marginTop: 5,
  },
  authOptions: {
    width: '100%',
    gap: 15,
    marginBottom: 30,
  },
  googleBtn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  googleIcon: {
    width: 20,
    height: 20,
  },
  googleBtnText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  mobileBtn: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#00E5FF',
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileBtnText: {
    color: '#00E5FF',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  formContainer: {
    width: '100%',
    gap: 12,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(0, 229, 255, 0.2)',
    borderRadius: 10,
    padding: 15,
    color: '#FFFFFF',
    fontSize: 14,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(0, 229, 255, 0.2)',
    borderRadius: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    color: '#FFFFFF',
    fontSize: 14,
  },
  toggleBtn: {
    padding: 10,
    marginRight: 5,
  },
  signInBtn: {
    backgroundColor: '#00E5FF',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  signInBtnText: {
    color: '#040D14',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  linksContainer: {
    flexDirection: 'row',
    marginTop: 25,
    alignItems: 'center',
    gap: 8,
  },
  linkText: {
    color: '#00E5FF',
    fontSize: 12,
    fontWeight: '600',
  },
  normalText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
  },
  dot: {
    color: 'rgba(255,255,255,0.3)',
  },
  footerText: {
    marginTop: 40,
    color: 'rgba(255,255,255,0.3)',
    fontSize: 9,
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 16,
  },
  footerLink: {
    color: '#00E5FF',
    textDecorationLine: 'underline',
  }
});
