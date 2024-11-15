import { View, Text, Image } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import PopularBusiness from "../../components/Home/PopularBusiness";

const Home = () => {
  return (
    <View>
      <Header />
      <Slider />
      <Category />
      <PopularBusiness />
    </View>
  );
};

export default Home;