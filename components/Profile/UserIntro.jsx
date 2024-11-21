import { View, Text, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

const UserIntro = () => {
  const { user } = useUser();
  return (
    <View className="flex justify-center items-center mt-7">
      <Image
        source={{ uri: user?.imageUrl }}
        className="w-[100] h-[100] rounded-full"
      />

      <Text className="text-xl font-bold">{user.fullName}</Text>
      <Text className="font-medium text-lg">
        {user.primaryEmailAddress.emailAddress}
      </Text>
    </View>
  );
};

export default UserIntro;
