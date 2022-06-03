import React, { useState, useContext } from "react";
import { View, Text, Image, ScrollView, Alert, Pressable, Button } from "react-native";
// import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import UserContext from "../context";


export default function SettingScreen() {
  const [getUserData, userInfo] = useContext(UserContext);
  getUserData

  return (
    <View style={styles.sContainer}>
      <ScrollView>
        <View style={styles.headerC}>
          <View style={styles.header}>
          </View>
          {/* <View style={styles.profilePicture}></View> */}
          <Button title="Click To Show Account Info" onPress={getUserData} />

          {userInfo ?
            <>
              <Image style={styles.profilePicture} source={{ uri: userInfo.picture }} />
              <View style={styles.profileContainer}>
                <View style={styles.profileTextContainer}>
                  <Text style={styles.profileText}>{userInfo.name}</Text>
                  <Text style={styles.profileText}>{userInfo.email}</Text>
                </View>
              </View>
            </> : null}
        </View>
        <View style={styles.subSection}>
          <View style={styles.sOption}>
            <Text style={styles.optionsText} onPress={() => Alert.alert("English:US")}>Language</Text>
          </View>
          <View style={styles.sOption}>
            <Text style={styles.optionsText} onPress={() => Alert.alert(`Terms & Conditions
Updated at 2022-05-27

General Terms

By accessing and placing an order with Job Coach, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and Job Coach.

Under no circumstances shall Job Coach team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if Job Coach team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.

Job Coach will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment.`)}>Terms & Conditions</Text>

          </View>
          <View style={styles.sOption}>
            <Text style={styles.optionsText} onPress={() => Alert.alert(`Privacy Policy

You agree not to, and you will not permit others to:

License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the service or make the platform available to any third party

Modify, make derivative works of, disassemble, docrypt, reverse compile or reverse engineer any part of the service.

Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of or its affiliates, partners, suppliers or the licensors of the service.`)}>Privacy Policy</Text>
          </View>
          <View style={styles.sOption}>
            <Text style={styles.optionsText} onPress={() => Alert.alert(`
 Antwi Richard Stephen (Developer)
 
 Baba Yara Jasmine (Developer)
 
Amankwah Dennis Lord (Developer)`)}>Credit</Text>
          </View>
          <View style={styles.sOption}>
            <Text style={styles.optionsText} onPress={() => Alert.alert(`Disclaimer

We are not responsible for any content, code or any other imprecision. We do not provide warranties or guarantees. In no event shall we be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort. arising out of or in connection with the use of the Service or the contents of the Service. We reserve the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.

Our Service and its contents are provided "as is" and "as available" without any warranty or representations of any kind, whether express or implied. We are a distributor and not a publisher of the content supplied by third parties; as such, our exercises no editorial control over such content and makes no warranty or representation as to the accuracy, reliability or currency of any information, content, service or merchandise provided through or accessible via our Service, Without limiting the foregoing. We specifically disclaim all warranties and representations in any content transmitted on or in connection with our Service or on sites that may appear as links on our Service, or in the products provided as a part of, or otherwise in connection with, our Service, including without limitation any warranties of merchantability, fitness for a particular purpose or non-infringement of third party rights. No oral advice or written information given by us or any of its affiliates, employees, officers, directors, agents, or the like will create a warranty. Price and availability information is subject to change without notice. Without limiting the foregoing, we do not warrant that our Service will be uninterrupted, uncorrupted, timely, or error-free.`)}>Disclaimer</Text>
          </View>
          <View style={styles.sOption}>
            <Text style={styles.optionsText} onPress={() => Alert.alert(`Via Email
job-coach@gmail.com`)}>Contact Us</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.logout}>
              <Text style={styles.logoutText}>2022  © Job Coach</Text> 
          </View>
        </View>
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  sContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: "#fff"
  },
  headerC: {
    width: '100%',
    display: 'flex',
    paddingTop: 30,
    paddingBottom: 8,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    alignItems: "center"
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  vheader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10
    // paddingHorizontal: 20
  }
  ,
  sT: {
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 8,
    color: 'dodgerblue'
  },
  profileContainer: {
    display: 'flex',
    flexWrap: "wrap",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
    marginTop: 12,
    alignItems: "center"

  },
  profileTextContainer: {
    alignItems: "center"

  },
  profileText: {
    fontSize: 18,
    fontWeight: "600",
    color: 'black',
    alignItems: "center"

  },
  profilePicture: {
    // backgroundColor: 'black',
    width: 90,
    height: 90,
    borderRadius: 50,
    marginRight: 18,
    borderColor: 'dodgerblue',
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderLeftWidth: 3,
  },
  subSection: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 14,
    backgroundColor: 'white',

  },
  hT: {
    fontWeight: "700",
    fontSize: 20,
    // marginBottom: 8,
    marginLeft: 10,
    color: '#666',
  },
  sOption: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 4,
    height: 56,
  },
  optionsText: {
    fontSize: 20,
    color: 'gray',
    fontWeight: "500",
  },
  logoutText: {
    fontSize: 8,
    color: "grey",
    fontWeight: "bold"
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  }
})

