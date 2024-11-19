import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const BusinessListCard = ({ business }) => {
    const router = useRouter()
  return (
    <TouchableOpacity 
    className="p-2 m-2 rounded-2xl bg-white flex-row gap-3 items-center"
    onPress={()=>router.push('/businessdetail/'+ business.id)}
    >
        <Image
        source={{uri: business.imageUrl }}
        className="w-[120] h-[120] rounded-2xl"
        resizeMode="contain"
        />
        <View className="flex-1 gap-2">
      <Text className="font-bold text-xl">{business.name}</Text>
      <Text className="font-medium text-gray-600">{business.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessListCard;
