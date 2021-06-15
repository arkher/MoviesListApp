/* eslint-disable react/display-name */
/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import React, { useEffect, useRef } from "react"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"

import { enableScreens } from "react-native-screens"
import Icon from "react-native-vector-icons/FontAwesome"
import { Provider } from "react-redux"
import { ToggleStorybook } from "../storybook/toggle-storybook"
import "./i18n"
import { canExit, setRootNavigation, useBackButtonHandler } from "./navigators"
import { PopularScreen, TrendingScreen } from "./screens"
import createStore from "./store"
import { initFonts } from "./theme/fonts" // expo
import "./utils/ignore-warnings"

enableScreens()

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

/**
 * This is the root component of our app.
 */
function App() {
  const navigationRef = useRef<NavigationContainerRef>(null)

  setRootNavigation(navigationRef)
  useBackButtonHandler(navigationRef, canExit)

  useEffect(() => {
    ;(async () => {
      await initFonts() // expo
    })()
  }, [])

  const Tab = createBottomTabNavigator()

  return (
    <Provider store={createStore()}>
      {/* <ToggleStorybook> */}
      {/* <RootStoreProvider value={rootStore}> */}
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName

                if (route.name === "Trending") {
                  iconName = focused ? "star" : "star-o"
                } else if (route.name === "Popular") {
                  iconName = focused ? "heart" : "heart-o"
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />
              },
            })}
            tabBarOptions={{
              activeTintColor: "white",
              inactiveTintColor: "gray",
              tabStyle: { paddingBottom: 8, backgroundColor: "black" },
            }}
          >
            <Tab.Screen name="Popular" component={PopularScreen} />
            <Tab.Screen name="Trending" component={TrendingScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      {/* </RootStoreProvider> */}
      {/* </ToggleStorybook> */}
    </Provider>
  )
}

export default App
