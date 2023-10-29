import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeIcon from "../components/HomeIcon";
import HomeSearch from "../components/HomeSearch";
import HomeBanner from "../components/HomeBanner";
import ProductsTitle from "../components/ProductsTitle";
import ProductsCarousel from "../components/ProductsCarousel";
import { fruits } from "../utils/Data";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{flex: 1, paddingHorizontal: 20, paddingTop: 10,}} >
        <View style={{gap: 20, paddingBottom: 20}}>
          <HomeIcon />
          <HomeSearch />
          <HomeBanner />
          <ProductsTitle title='Exclusive offer' />
          <ProductsCarousel data={fruits} />
          <ProductsTitle title='Best Selling' />
          <ProductsCarousel data={fruits} />
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default Home;
