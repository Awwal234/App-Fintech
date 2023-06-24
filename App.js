import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import SignupScreen from './screens/SignupScreen.js';
import VerifyOTP from './screens/VerifyOTP.js';
import VerifySignup from './screens/VerifySignup.js';
import TandC from './screens/TermsAndConditions/TandC.js'
import PinSignup from './screens/auth/PinSignup.js'

// application
import MainScreen from './screens/app/home/MainScreen.js';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* login route paths */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OTP" component={VerifyOTP} />
        {/* end login route paths */}
        {/* signup route paths */}
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="TandC" component={TandC} />
        <Stack.Screen name="VerifySignup" component={VerifySignup} />
        <Stack.Screen name="PinSignup" component={PinSignup} />
        {/* end signup route paths */}
        {/* app route */}
        <Stack.Screen name="MainScreen" component={MainScreen} />
        {/* end app route */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}