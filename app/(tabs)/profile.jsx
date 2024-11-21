import { View, Text } from "react-native";
import React from "react";
import UserIntro from "@/components/Profile/UserIntro";
import MenuList from "@/components/Profile/MenuList";

const Profile = () => {
  return (
    <View className="p-5">
      <Text className="text-3xl font-bold">Profile</Text>

      <UserIntro/>

      <MenuList/>
    </View>
  );
};

export default Profile;
