import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet, Linking, Pressable
} from "react-native";


// image imports
import navLogo from "../assets/img/job-coach-logo.png";
import java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import flutter from "../assets/img/Flutter-logo.png";
import javascript from "../assets/img/javascript.png";
import c from "../assets/img/c.png";
import ruby from "../assets/img/ruby.png";

import Carousel from "react-native-snap-carousel";

import settingIcon from "../assets/img/settingIcon.png";

export default function HomeScreen() {
  const sliderWidth = Dimensions.get("window").width;
  let carousel;
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    {
      logo: java,
      title: "Java",
      url: "https://www.youtube.com/embed/eIrMbAQSU34"
    },
    {
      logo: python,
      title: "Python",
      url: "https://www.youtube.com/embed/_uQrJ0TkZlc"
    },
    {
      logo: flutter,
      title: "Flutter",
      url: "https://www.youtube.com/embed/pTJJsmejUOQ"
    },
    {
      logo: javascript,
      title: "Javascript",
      url: "https://www.youtube.com/embed/PkZNo7MFNFg"
    },
    {
      logo: c,
      url: "https://www.youtube.com/embed/KJgsSFOSQv0"
    },
    {
      logo: ruby,
      title: "Ruby",
      url: "https://www.youtube.com/embed/t_ispmWmdjY"
    },
  ]);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <ScrollView nestedScrollEnabled={true}>
        <StatusBar hidden={true} />
        <View style={styles.navSection}>
          <Text style={styles.greetingMessage}>Hello,</Text>
          <Text style={styles.username}>Welcome Back!</Text>
          <View style={styles.courseHeaderContainer}>
            <Text style={styles.courseHeader}>FREE COURSES</Text>
          </View>
        </View>
        <View>
          <Carousel
            layout={"default"}
            ref={(ref) => (carousel = ref)}
            data={carouselItems}
            sliderWidth={sliderWidth}
            sliderHeight={40}
            itemWidth={300}
            renderItem={_renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
          />
        </View>
        <View style={styles.accordionContainer}>
          <Text style={styles.accordionHeader}>IMMEDIATE OFFERS</Text>
          <View style={styles.accordionContentWrapper}>
            <Text
              style={styles.accordionContent}
              onPress={() => Linking.openURL("https://gh.linkedin.com/jobs/view/back-end-developer-at-rixrod-company-limited-2801692170?refId=uGSkC7y55EserScST7%2FL9Q%3D%3D&trackingId=tdFFv6WNQ%2Bswz3GMF0LMwQ%3D%3D&position=5&pageNum=0&trk=public_jobs_jserp-result_search-card")}
            >
              Backend Developer
            </Text>
            <Text
              style={styles.accordionContent}
              onPress={() => Linking.openURL("https://gh.linkedin.com/jobs/view/intermediate-senior-react-developer-at-reverside-2737558071?refId=uGSkC7y55EserScST7%2FL9Q%3D%3D&trackingId=m6SPZneLTbcvvHtdVsOOag%3D%3D&position=15&pageNum=0&trk=public_jobs_jserp-result_search-card")}
            >
              Senior React Developer
            </Text>
            <Text
              style={styles.accordionContent}
              onPress={() => Linking.openURL("https://gh.linkedin.com/jobs/view/senior-application-developer-full-stack-at-zentech-i-t-solutions-limited-2782017716?refId=uGSkC7y55EserScST7%2FL9Q%3D%3D&trackingId=PuXZARbhLQRta6ZKnyzqNA%3D%3D&position=16&pageNum=0&trk=public_jobs_jserp-result_search-card")}
            >
              Senior Application Developer
            </Text>
            <Text
              style={styles.accordionContent}
              onPress={() => Linking.openURL("https://gh.linkedin.com/jobs/view/frontend-developer-react-react-native-developer-100%25-remote-m-f-d-at-earlynode-gmbh-2803042988?refId=uGSkC7y55EserScST7%2FL9Q%3D%3D&trackingId=V9u3XTeznnMilBVShlm9IQ%3D%3D&position=11&pageNum=0&trk=public_jobs_jserp-result_search-card")}
            >
              React & React Native Developer
            </Text>
            <Text
              style={styles.accordionContent}
              onPress={() => Linking.openURL("https://gh.linkedin.com/jobs/view/senior-mobile-engineer-at-farmerline-2774464387?refId=qhOGFJzCM4Vfm15qs8KZeg%3D%3D&trackingId=Ok0hOl30dIrUJQTdkITbgQ%3D%3D&position=1&pageNum=0&trk=public_jobs_jserp-result_search-card")}
            >
              Senior Mobile Engineer{" "}
            </Text>
            <Text
              style={styles.accordionContent}
              onPress={() => Linking.openURL("https://gh.linkedin.com/jobs/view/mobile-application-developer-flutter-dart-at-the-hr-bic-ltd-the-human-resource-business-invesment-centre-ltd-2808033207?refId=CfXRgcaEcbPlSXT06MJCkg%3D%3D&trackingId=5atb17AGerLI4j1mihnJrg%3D%3D&position=7&pageNum=0&trk=public_jobs_jserp-result_search-card")}
            >
              Mobile Application Developer(Flutter)
            </Text>
            <Text
              style={styles.accordionContent}
              onPress={() => Linking.openURL("https://gh.linkedin.com/jobs/view/database-technology-instructor-at-ipmc-ghana-at-ipmc-ghana-2809797192?refId=%2BvHCKwRFk%2BJG3WljeUTIIQ%3D%3D&trackingId=FanM2NrOD6Ur3BGMOupWMA%3D%3D&position=22&pageNum=0&trk=public_jobs_jserp-result_search-card")}
            >
              Database Technology Instructor
            </Text>
            <Text
              style={styles.accordionContent}
              onPress={() => Linking.openURL("https://gh.linkedin.com/jobs/view/senior-it-assistant-at-ghana-institute-of-languages-at-ghana-institute-of-languages-2807350341?refId=%2BvHCKwRFk%2BJG3WljeUTIIQ%3D%3D&trackingId=6Nz9fL8AtDatTzZQ%2BXjARw%3D%3D&position=20&pageNum=0&trk=public_jobs_jserp-result_search-card")}
            >
              Senior IT Assistant
            </Text>
            <Text
              style={styles.accordionContent}
              onPress={() => Linking.openURL("https://www.google.com/search?q=linkedin+developer+jobs+in+ghana&client=safari&hl=en-gh&ei=vfunYd3KLoLIaPzotNAE&oq=linkedin+developer+jobs+in+gha&gs_lcp=ChNtb2JpbGUtZ3dzLXdpei1zZXJwEAEYADIHCCEQChCgATIHCCEQChCgATIICCEQFhAdEB46AggpOgUIIRCgAVDDBVjxE2CHGmgAcAB4AIABjwSIAeAWkgEJMi00LjMuMS4xmAEAoAEBwAEB&sclient=mobile-gws-wiz-serp#fpstate=tldetail&htidocid=fEJeI5fcLzrF3LNLAAAAAA%3D%3D&htiq=linkedin%20developer%20jobs%20in%20ghana&htivrt=jobs")}
            >
              Senior Java Developer
            </Text>
            <Text
              style={styles.accordionContent}
              onPress={() => Linking.openURL("https://www.google.com/search?q=linkedin+developer+jobs+in+ghana&client=safari&hl=en-gh&ei=vfunYd3KLoLIaPzotNAE&oq=linkedin+developer+jobs+in+gha&gs_lcp=ChNtb2JpbGUtZ3dzLXdpei1zZXJwEAEYADIHCCEQChCgATIHCCEQChCgATIICCEQFhAdEB46AggpOgUIIRCgAVDDBVjxE2CHGmgAcAB4AIABjwSIAeAWkgEJMi00LjMuMS4xmAEAoAEBwAEB&sclient=mobile-gws-wiz-serp#fpstate=tldetail&htidocid=mX3rCwqXJTmI2N-HAAAAAA%3D%3D&htiq=linkedin%20developer%20jobs%20in%20ghana&htivrt=jobs")}
            >
              Android Developer
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const _renderItem = ({ item, index }) => {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 20,
        height: 100,
        width: 300,
        marginVertical: 25,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        justifyContent: "center",
        alignItems: "center", 
      }}
      onPress={() => Linking.openURL( item.url)}
    >
      <Image
        style={{ width: 70, height: 70 }}
        source={item.logo}
        width={70}
        height={70}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginLeft: 10,
          color: "rgb(70, 68, 68)",
        }}
      >
        {item.title}
      </Text>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  navWrapper: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 94,
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  navTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "rgb(53, 143, 228)",
  },
  settingsettingsIcon: {},
  navLogo: {
    flexDirection: "row",
  },
  greetingMessage: {
    fontSize: 18,
    paddingTop: 24,
    fontWeight: "bold",
    letterSpacing: 0.8,
    color: "rgb(133, 133, 133)",
    paddingLeft: 10,
    marginBottom:8,
  },
  username: {
    // backgroundColor: "red",
    // width: "70%",
    fontSize: 26,
    fontWeight: "bold",
    color: "rgb(53, 143, 228)",
    paddingLeft: 10,
    // marginBottom: 24,
    marginRight: 10,
    letterSpacing: 0.8,
  },
  courseHeaderContainer: {
    alignItems: "flex-end",
    marginRight: -15,
  },
  courseHeader: {
    borderTopColor: "rgb(53, 152, 245)",
    borderTopWidth: 5,
    borderBottomColor: "rgb(53, 152, 245)",
    borderBottomWidth: 5,
    borderLeftColor: "rgb(53, 152, 245)",
    borderLeftWidth: 5,
    borderRadius: 20,
    width: 180,
    color: "rgb(106, 111, 117)",
    fontSize: 16,
    paddingLeft: 25,
    paddingTop: 10,
    paddingTop: 10,
    alignItems: "center",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  chatBtnContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  chatBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    width: "80%",
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  accordionContainer: {
    // height: 50,
    width: "100%",
    padding: 20,
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  accordionHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "rgb(94, 93, 93)",
  },
  accordionContentWrapper: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  accordionContent: {
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    margin: 3,
    paddingLeft: 10,
    width: "100%",
    paddingVertical: 10,
  },
});