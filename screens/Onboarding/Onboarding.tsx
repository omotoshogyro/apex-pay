import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  StatusBar,
} from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { OnboardingScreenNavigationProps } from "../../types";
import { Onboardingstage } from "../../components";
import styles from "./Onboarding.styles";
import onboardingdatas from "../../helpers/onboardingdatas";

const { Arrowright } = icons;

const LaststageData = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: COLORS.green1,
          paddingVertical: 38,
          paddingHorizontal: 42,
        }}
      >
        <Text>Create an account</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>I have one.</Text>
        <Text>Log me in</Text>
      </View>
    </View>
  );
};

const Onboarding = ({ navigation }: OnboardingScreenNavigationProps) => {
  const scrollX = useRef<any>(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  // const current = Math.ceil(Number(scrollX._value / SIZES.width));

  const [viewIndex, setViewIndex] = useState<number>(0);

  // i removed changed from the params passed to this useRef below
  const onViewChangeRef = useRef<
    ({ viewableItems, changed }: { viewableItems: any; changed: any }) => void
  >(({ viewableItems, changed }) => {
    setViewIndex(viewableItems[0]?.index);
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: 30,
        paddingBottom: 35,
      }}
    >
      <StatusBar />
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          marginBottom: 32,
          marginRight: 20,
          alignItems: "flex-end",
        }}
        onPress={() => navigation.navigate("Onboardingend")}
      >
        <Text style={{ ...FONTS.regular, color: COLORS.grey3 }}>Skip</Text>
      </TouchableOpacity>

      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewChangeRef.current}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        bounces={false}
        keyExtractor={(item) => item.header}
        data={onboardingdatas}
        renderItem={({ item, index }) => <Onboardingstage item={item} />}
      />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            backgroundColor: COLORS.green1,
            height: 95,
            width: 95,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 95,
          }}
          onPress={() => {
            let currentIndex = Math.ceil(Number(scrollX._value / SIZES.width));
            if (currentIndex < onboardingdatas.length - 1) {
              // Scroll to the next item
              flatListRef?.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
              });
              // console.log("Right index", currentIndex);
            } else {
              navigation.replace("Onboardingend");
            }
          }}
        >
          <Arrowright />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
