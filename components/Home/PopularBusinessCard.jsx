import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router, useRouter } from "expo-router";

const PopularBusinessCard = ({ business }) => {
  return (
    <TouchableOpacity
      className="ml-5 p-5 bg-white rounded-2xl"
      onPress={() => router.push("/businessdetail/" + business?.id)}
    >
      <Image
        source={{ uri: business.imageUrl }}s
        className="h-[130px] w-[200px] rounded-2xl"
        resizeMode="contain"
      />

      <View className="mt-2 gap-1">
        <Text className="text-lg font-bold">{business.name}</Text>
        <Text className="text-xs text-gray font-semibold">
          {business.address}
        </Text>

        <View className="flex flex-row justify-between">
         
          <Text className="bg-secondary font-extralight p-1 rounded-md text-[12px]">
            {business.category}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularBusinessCard;