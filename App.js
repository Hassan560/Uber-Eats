import React from "react";
import RootNavigation from "./Navigation";
import { Platform, Text, View } from "react-native";

export default function App() {
  return (
    <>
      {/* {Platform.OS === "android" ? ( */}
        <>
          <RootNavigation />
        </>
      {/* ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{fontSize: 20,fontWeight: '900'}}>This Application Work Only In Andriod</Text>
        </View>
      )} */}
    </>
  );
}
