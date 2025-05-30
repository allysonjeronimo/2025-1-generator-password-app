import {Home} from './pages/home'
import {Passwords} from './pages/passwords'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from "@expo/vector-icons"

const Tabs = createBottomTabNavigator()

export function Routes(){
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused)
                            return <Ionicons name="home" size={size} color={color}/>
                        return <Ionicons name="home-outline" size={size} color={color}/>
                    }
                }}
            />
            <Tabs.Screen
                name="passwords"
                component={Passwords}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused)
                            return <Ionicons name="lock-closed" size={size} color={color}/>
                        return <Ionicons name="lock-closed-outline" size={size} color={color}/>
                    }
                }}
            />
        </Tabs.Navigator>
    )
}