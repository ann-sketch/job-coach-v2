import React, { useEffect } from 'react';
import { LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigation';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, Button, ImageBackground, TouchableOpacity, Animated, Pressable, } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import UserContext from './context'

console.disableYellowBox = true;

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    // androidClientId: "694235095257-fkbf1u81sm5ii76om74j5b7h8u4v2m7a.apps.googleusercontent.com",
    // iosClientId: "23091368720-7s7oc7jit8d2udgftoisfk004jeocqft.apps.googleusercontent.com",
    webClientId: "23091368720-4n7nibbc50lb5pv9nd8r58jv3kmbjfmm.apps.googleusercontent.com",
    expoClientId: "23091368720-2chmhbplbo3d1c73rbgnmiaaro8nho4d.apps.googleusercontent.com"
  });


  React.useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    userInfoResponse.json().then(data => {
      setUserInfo(data);
    });
  }

  function showUserInfo() {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      );
    }
  }

  const animated = new Animated.Value(500);
  const duration = 3000;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: 50,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      {accessToken ?
        <UserContext.Provider value={[getUserData, userInfo]}>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </UserContext.Provider>

        :
        <View style={styles.welcomecontainer}>
          <ImageBackground
            source={require("./assets/img/bg.png")}
            style={styles.image}
          />
          <View style={styles.container}>
            {showUserInfo()}
            <Pressable onPress={accessToken ? getUserData : () => { promptAsync({ useProxy: true, showInRecents: true }) }}>
              <Image source={require("./assets/img/btn_google_signin_dark_focus_web.png")} style={styles.profilePic} />
            </Pressable>
            <StatusBar style="auto" />
          </View>
          <Animated.View style={[{ transform: [{ translateY: animated }] }]}>
            <View style={styles.welcome}>
              <View>
                <Text style={styles.header}>Welcome</Text>
                <Text style={styles.message}>
                  Find a career that is a good fit for your skills.
                  Make the most of your abilities and expertise in the employment market.{"\n"}
                  Join us for a once-in-a-lifetime opportunity.
                </Text>
              </View>
              <TouchableOpacity style={styles.signin}>
                <Text style={styles.signintext} onPress={null}>
                  Sign In With Google
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>

      }
    </>
  );
}

const styles = StyleSheet.create({
  welcomecontainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly"
  },

  image: {
    width: "100%",
    height: "70%",
    marginTop: "50%",
  },

  welcome: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(161, 170, 173, 0.136)",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 25,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "dodgerblue",
    elevation: 1,
    width: "100%",
    height: "60%",
    justifyContent: "space-evenly",
    alignItems: 'center'
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 5,
  },

  message: {
    fontSize: 16,
    textAlign: "left",
    lineHeight: 25,
    textTransform: "capitalize",
    color: "#454545",
  },

  signin: {
    height: 60,
    padding: 20,
    borderRadius: 50,
    marginBottom: 25,
    backgroundColor: "#000",
    width: "70%",
  },

  signintext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
