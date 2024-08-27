import { Text, View, ScrollView } from "react-native";
import Header from "../components/header";
import Constants from 'expo-constants'
import { Search } from "../components/search";
import { Banner } from "../components/banner";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { StoreList } from "../components/stores";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1}}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8}}>
        <Header />
        <Banner />
        <Search />

        <Section
          name="Comidas em alta"
          label="Veja todas"
          action={ () => console.log("Clicou no veja todas")}
          size="text-2xl"
        >
        </Section>
        <TrendingFoods/>

        <Section
          name="Famosos no DevFood"
          label="Veja mais..."
          action={ () => console.log("Clicou no veja mais...")}
          size="text-2xl"
        >
        </Section>
        <Restaurants></Restaurants>

        <Section
          name="Restaurantes"
          label="Veja mais rest..."
          action={ () => console.log("Clicou no mais rest...")}
          size="text-2xl"
        >
        </Section>
        <StoreList />

      </View>
    </ScrollView>
  );
}
