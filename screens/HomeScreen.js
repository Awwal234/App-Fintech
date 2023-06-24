import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import splashbg from '../assets/image/splashbg.png'
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
        <View className="bg-[#3366FF] w-full h-full">
            <ScrollView>
              <View className="mx-auto mt-[140px] w-full h-fit">
                <Image source={splashbg} className="w-[263px] mx-auto h-[263px]" />
              </View>
              <View className="mt-[24px] text-left pl-[24px]">
                <Text className="font-[400] leading-[32px] text-[#fff] text-[32px]">Onboarding text will be here</Text>
              </View>
              <View className="mt-[197px] px-[16px] w-full flex flex-row items-center">
                <TouchableOpacity className="w-[50%] ml-[-5px]" onPress={()=>navigation.navigate('Login')}>
                    <View className="rounded-[24px] w-fit py-[14px] bg-[#fff]">
                        <Text className="text-[16px] text-center mx-auto  text-[#2C64E3] leading-[20px] font-[600]">Log In</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className="w-[50%] ml-[5px]" onPress={()=>navigation.navigate('SignupScreen')}>
                    <View className="rounded-[24px] w-fit py-[14px] bg-[#1B1C3C]">
                        <Text className="text-[16px] mx-auto text-center text-[#fff] leading-[20px] font-[600]">Sign Up</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
        </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
