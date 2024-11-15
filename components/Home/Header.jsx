import { View, Text,Image,TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Ionicons from "@expo/vector-icons/Ionicons";



const Header = () => {
const {user} = useUser();
  return (
    <View className="p-5 pt-10 bg-[#25292e]">
      <View className=" flex-row  gap-2 items-center">
        <Image source={{uri:user?.imageUrl}} 
        className="w-[45] h-[45] rounded-full"/>
  
      <View>
        <Text className="text-white">Welcome, </Text>
        <Text className="text-bold text-white text-xl font-bold">
            {user?.fullName}
        </Text>
      </View>
    

      </View>
      <View className="flex flex-row gap-3 items-center p-2 my-3 rounded-lg mt-4 bg-white">
      <Ionicons name="search" size={24} color="red" />
      <TextInput placeholder="Search..." className='font-semibold'/>
      </View>
    </View>
  );
};

export default Header;
