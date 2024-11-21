import { View, Text } from "react-native";
import React from "react";

const AboutBusiness = ({ business }) => {
  return (
    <View className="p-5 bg-white ">
      <Text
      className="font-bold text-2xl"
      >
        About
      </Text>
      <Text
        className="font-medium leading-6"
      >
        {business?.about}
      </Text>
    </View>
  );
};

export default AboutBusiness;
