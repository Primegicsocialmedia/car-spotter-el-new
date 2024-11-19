import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import CategoryItem from "./CategoryItem";
import { useRouter } from "expo-router";

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setCategoryList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <View className="p-5 flex justify-between flex-row mt-2">
        <Text className="text-lg  pt-5 font-bold">Category</Text>
        <Text className="text-black">View All</Text>
      </View>

      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="ml-4"
        renderItem={({ item, index }) => (
          <CategoryItem
            category={item}
            key={index}
            onCategoryPress={(category) =>
              router.push("/businesslist/" + item.name)
            }
          />
        )}
      />
    </View>
  );
};

export default Category;
