import { View, Text, Image } from "react-native";
import wallet from '../assets/image/wallet.png'
import arrowright from '../assets/image/arrow-right.png'
import morecircle from '../assets/image/more-circle.png'
import React from "react";

const CardsectButton = () => {
  return (
    <View className="px-[16px]">
      <View className="flex space-x-[7px] mt-[40px] flex-row">
        <View className="bg-[#F7F9FC] space-x-[10px] flex flex-row items-center justify-center rounded-[8px] w-[40%] py-[10px] px-[16px]">
          <View><Image className="w-[20px] h-[20px]" source={wallet}/></View>
          <Text className="text-[14px] leading-[16px] font-[600]">Add money</Text>
        </View>
        <View className="bg-[#F7F9FC] space-x-[10px] flex flex-row items-center justify-center rounded-[8px] w-[40%] py-[10px] px-[16px]">
          <View><Image className="w-[20px] h-[20px]" source={arrowright}/></View>
          <Text className="text-[14px] leading-[16px] font-[600]">Transfer</Text>
        </View>
        <View className="bg-[#F7F9FC] rounded-[8px] w-fit py-[10px] px-[12px]">
          <View className="mx-auto"><Image className="w-[20px] mx-auto h-[20px]" source={morecircle}/></View>
        </View>
      </View>
    </View>
  );
};

export default CardsectButton;
