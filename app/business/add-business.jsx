import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import RNPickerSelect from "react-native-picker-select";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { db, storage } from "../../configs/FirebaseConfig"
import { useUser } from "@clerk/clerk-expo";

const Addbusiness = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [catogeryList, setCatogeryList] = useState([]);
  const [category, setCategory] = useState();
  const { user } = useUser();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [website, setWebsite] = useState();
  const [about, setAbout] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Add New Business",
      headerShown: true,
    });
    getCategoryList()
  }, []);

  const onImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });
    setImage(result?.assets[0].uri);
    console.log(result);
  };

  const getCategoryList = async () => {
    setCatogeryList([]);
    const q = query(collection(db, "Category"));
    const snapShot = await getDocs(q);

    snapShot.forEach((doc) => {
      console.log(doc.data());
      setCatogeryList((prev) => [
        ...prev,
        {
          label: doc.data().name,
          value: doc.data().name,
        },
      ]);
    });
  };
  return (
    <View className="p-5">
      <Text className="text-2xl font-bold">Add New Business</Text>
      <Text className="font-medium text-gray-900">
        Fill all details in order to add new business
      </Text>
      <TouchableOpacity className="mt-5" onPress={() => onImagePick()}>
        {!image ? (
          <Image
            source={require("./../../assets/images/placeholder.png")}
            style={{
              width: 100,
              height: 100,
            }}
          />
        ) : (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 15,
            }}
          />
        )}
      </TouchableOpacity>
      <View>
        <TextInput
          placeholder="Name"
          onChangeText={(v) => setName(v)}
          className="
        p-2 border-2 rounded-md text-lg bg-white mt-2 font-medium border-red-800"
        />
        <TextInput
          placeholder="Adress"
          onChangeText={(v) => setAddress(v)}
          className="
        p-2 border-2 rounded-md text-lg bg-white mt-2 font-medium border-red-800"
        />
        <TextInput
          placeholder="Contact"
          onChangeText={(v) => setContact(v)}
          className="
        p-2 border-2 rounded-md text-lg bg-white mt-2 font-medium border-red-800"
        />
        <TextInput
          placeholder="Website"
          onChangeText={(v) => setWebsite(v)}
          className="
        p-2 border-2 rounded-md text-lg bg-white mt-2 font-medium border-red-800"
        />
        <TextInput
          multiline
          onChangeText={(v) => setAbout(v)}
          numberOfLines={5}
          placeholder="About"
          className="
        p-2 border-2 rounded-md text-lg bg-white mt-2 font-medium border-red-800 h-[100]"
        />
          </View>
        <View className=" border-2 rounded-md text-base bg-white mt-3 border-red-800">
          <RNPickerSelect
            onValueChange={(value) => setCategory(value)}
            items={catogeryList}
          />
      
      </View>
      <TouchableOpacity
        disabled={loading}
        className="p-4 bg-PRIMARY rounded-md mt-5"
        onPress={() => onAddNewBusiness()}
      >
        {loading ? (
          <ActivityIndicator size={"large"} color={"#fff"} />
        ) : (
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "outfit-medium",
            }}
          >
            Add New Business
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Addbusiness;
