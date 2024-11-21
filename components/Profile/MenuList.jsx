import { View, Text, FlatList, Image, Share } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const MenuList = () => {
  const { signOut } = useAuth();
  const router = useRouter();
  const onMenuClick = (item) => {
    if (item.path == "logout") {
      signOut();
      return;
    }
    if (item.path == "share") {
      Share.share({
        message: "Download the Prime Business App by Primegic!",
      });
      return;
    }
    router.push(item.path);
  };

  const menuList = [
    {
      id: 1,
      name: "Add Business",
      icon: require("./../../assets/images/add.png"),
      path: "/business/add-business",
    },
    {
      id: 2,
      name: "My Business",
      icon: require("./../../assets/images/business-and-trade.png"),
      path: "/business/my-business",
    },
    {
      id: 3,
      name: "Share App",
      icon: require("./../../assets/images/share_1.png"),
      path: "share",
    },
    {
      id: 4,
      name: "Log Out",
      icon: require("./../../assets/images/logout.png"),
      path: "logout",
    },
  ];
  return (
    <View className="mt-12">
      <FlatList
        data={menuList}
        numColumns={2}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            className="flex flex-row items-center gap-2 flex-1 p-2 border-2 rounded-2xl m-2 bg-white border-PRIMARY"
            onPress={() => onMenuClick(item)}
          >
            <Image
              source={item.icon}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
             className="font-medium text-lg flex-1"
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      <Text
      
        className="text-gray font-bold text-lg text-center mt-20"
      >
        "Developed By Primegic @ 2024"
      </Text>
    </View>
  );
};

export default MenuList;
