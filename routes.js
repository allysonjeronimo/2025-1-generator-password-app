import {Home} from './pages/home'
import {Passwords} from './pages/passwords'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator()

export function Routes(){
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                }}

            />
            <Tabs.Screen
                name="passwords"
                component={Passwords}
                options={{
                    headerShown: false,
                }}
            />
        </Tabs.Navigator>
    )
}