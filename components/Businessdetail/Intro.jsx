import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const Intro = ({business}) => {
    const router = useRouter()
  return (
    <View>
          <View className="absolute z-10 flex flex-row justify-between w-[100%] p-5">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={40} color="white"  />
        </TouchableOpacity>

        <Ionicons name="heart-outline" size={40} color="#fff" />
      </View>
      <Image source={{uri: business?.imageUrl}}
      className="w-[100%] h-[340]"/>
    

        <View>
        <View className="p-5 -mt-5 bg-white rounded-t-3xl">
          <Text
            className="text-3xl font-extrabold"
          >
            {business?.name}
          </Text>
          <Text
            className="text-xl font-medium"
          >
            {business?.address}
          </Text>
        </View>
        </View>
    </View>
  );
};

export default Intro;
