import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import arrowleft from '../../assets/image/arrow-left.png'
import React from "react";

const TandC = ({navigation}) => {
  return (
    <SafeAreaView>
        <View className="bg-[#fff] px-[16px] w-full h-full">
          <ScrollView>
          <View className="pt-[10px] w-fit h-fit">
                <TouchableOpacity onPress={()=>navigation.navigate('SignupScreen')}>
                    <Image source={arrowleft} className="w-[24px] h-[24px]"/>
                </TouchableOpacity>
            </View>
            <Text className="font-[600] text-[#222B45] text-[24px] leading-[32px] mt-[16px]">
                Terms and Conditions
            </Text>
            <Text className="font-[400] text-justify text-[#2E3A59] text-[16px] leading-[28px] mt-[24px]">
                Feugiat mattis pellentesque elit nulla. Laoreet massa ultrices tempor magna quis 
                ultrices commodo a, sed. Eu pharetra amet enim aliquam libero posuere in vitae. Id at 
                nulla ut quis pellentesque pulvinar turpis urna. Ut amet risus enim massa, cursus enim 
                dictum. Aliquam quam eleifend nunc diam. Viverra viverra tristique felis tempus aliquet 
                ornare erat scelerisque. Vitae aenean elementum malesuada mattis convallis volutpat. Pharetra 
                vel nibh nulla mauris aliquet ultrices proin tempor amet. Neque placerat nisl ac neque. Eget 
                ridiculus sagittis duis pellentesque scelerisque in platea mus in.
            </Text>
            <Text className="font-[600] text-[#222B45] text-[24px] leading-[32px] mt-[24px]">
                Privacy
            </Text>
            <Text className="font-[400] text-justify text-[#2E3A59] text-[16px] leading-[28px] mt-[24px]">
                Feugiat mattis pellentesque elit nulla. Laoreet massa ultrices tempor magna quis 
                ultrices commodo a, sed. Eu pharetra amet enim aliquam libero posuere in vitae. Id at 
                nulla ut quis pellentesque pulvinar turpis urna. Ut amet risus enim massa, cursus enim 
                dictum. Aliquam quam eleifend nunc diam. Viverra viverra tristique felis tempus aliquet 
                ornare erat scelerisque. Vitae aenean elementum malesuada mattis convallis volutpat. Pharetra 
                vel nibh nulla mauris aliquet ultrices proin tempor amet. Neque placerat nisl ac neque. Eget 
                ridiculus sagittis duis pellentesque scelerisque in platea mus in.
            </Text>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default TandC;
