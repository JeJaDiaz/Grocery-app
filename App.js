import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './src/screens/Splash'
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'
import Home from './src/screens/Home'
import Details from './src/screens/Details'
import Cart from './src/screens/Cart'
import { Provider } from 'react-redux'
import { Store } from './Redux/Store'
import CheckOut from './src/screens/CheckOut'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CheckOut"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="CheckOut" component={CheckOut} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App