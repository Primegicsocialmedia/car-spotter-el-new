import { View, Text, FlatList,ActivityIndicator } from "react-native";
import React, { useEffect,useState } from "react";
import { useNavigation,useLocalSearchParams } from "expo-router";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { db } from "../../configs/FirebaseConfig";
import { collection, getDocs, query,where } from "firebase/firestore";


const BusinessListByCategory = () => {
    const navigation= useNavigation();
    const { category } = useLocalSearchParams();
    const [loading, setLoading] = useState(false)
    const [businessList, setBusinessList] = useState([])



    useEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerTitle: category
          
        
        });
        getBusinessList();
      }, []);

        /**
   * Use to get business list by category
   */
  const getBusinessList = async () => {
    setLoading(true)
    setBusinessList([])
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList(prev=>[...prev,{id:doc?.id, ...doc.data()}])
    });
    setLoading(false)
  };


  return (

    
    <View>
{businessList?.length>0&&loading==false?<FlatList
data={businessList}
renderItem={({item,index})=> (
    <BusinessListCard
    business={item}
    key={index}
    />
)}
/>:loading?
    <ActivityIndicator
    className='mt-[60%]'
    size={'large'}
    color={'#7F57F1'}/>:<Text style={{fontSize:25,fontFamily:'outfit-bold'}}
    className='text-gray-500 text-center mt-[50%]'>No Business found</Text>}
    </View>
  );
};

export default BusinessListByCategory;
