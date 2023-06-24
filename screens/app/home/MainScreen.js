import { View, Text, Image, ScrollView } from "react-native";
import trendup from '../../../assets/image/trendup.png'
import heart from '../../../assets/image/heart.png'
import setting from '../../../assets/image/setting.png'
import notificationbing from '../../../assets/image/notification-bing.png'
import mastercard from '../../../assets/image/mastercard.png'
import CardsectButton from "../../../components/CardsectButton.js";
import React from "react";

const MainScreen = () => {
  return (
    <View className="w-full h-full bg-[#F2F1F6]">
      <View className="pt-[64px] fixed pb-[20px] bg-[#F2F1F6] w-full">
        <View className="w-full mb-[28px] px-[16px] flex flex-row items-center justify-between">
            <View className="flex flex-row space-x-[12px] items-center">
                <View className="bg-[#2C64E3] w-[32px] h-[32px] rounded-full"></View>
                <View><Text className="text-[14px] text-[#2E3A59] leading-[20px] font-[600]">Hello, Ulvin</Text></View>
            </View>
            <View className="flex flex-row items-center space-x-[16px]">
                <View><Image className="w-[24px] h-[24px]" source={trendup}/></View>
                <View><Image className="w-[24px] h-[24px]" source={heart}/></View>
                <View><Image className="w-[24px] h-[24px]" source={notificationbing}/></View>
            </View>
        </View>
        {/* end first row */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="w-full px-[16px] flex flex-row items-center">
                <View className="bg-[#fff] rounded-[20px] w-fit py-[6px] px-[16px]">
                    <Text className="text-[14px] mx-auto text-center text-[#222B45] leading-[20px] font-[600]">Cards</Text>
                </View>
                <View className="bg-[transparent] rounded-[20px] w-fit py-[6px] px-[16px]">
                    <Text className="text-[14px] mx-auto text-center text-[#222B45] leading-[20px] font-[600]">Accounts</Text>
                </View>
                <View className="bg-[transparent] rounded-[20px] w-fit py-[6px] px-[16px]">
                    <Text className="text-[14px] mx-auto text-center text-[#222B45] leading-[20px] font-[600]">Cashback</Text>
                </View>
                <View className="bg-[transparent] rounded-[20px] w-fit py-[6px] px-[16px]">
                    <Text className="text-[14px] mx-auto text-center text-[#222B45] leading-[20px] font-[600]">Savings</Text>
                </View>
            </View>
        </ScrollView>
        {/* end second row */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full rounded-[16px] h-fit pb-[20px] bg-[#fff]">
            <View className="pt-[16px] flex justify-between flex-row items-center px-[32px]">
                <View><Text className="text-[12px] text-[#2E3A59] leading-[16px] font-[400]">Returned balance:</Text></View>
                <View><Text className="text-[12px] text-[#2E3A59] leading-[16px] font-[400]">All cards</Text></View>
            </View>
            <View><Text className="text-[20px] px-[32px] mt-[4px] text-[#2E3A59] leading-[28px] font-[700]">$34 950</Text></View>
            <View className="px-[32px] w-full">
                <View className="mt-[24px] h-[64px] mx-auto rounded-[12px] w-[85%] bg-[#91AEF0]"></View>
                <View className="mt-[-57px] relative h-[64px] mx-auto rounded-[12px] w-[95%] bg-[#5E89EA]"></View>
                <View className="mt-[-57px] flex flex-row items-center justify-between relative py-[26px] px-[16px] mx-auto rounded-[12px] w-[100%] bg-[#2C64E3]">
                    <View className="flex h-fit flex-row space-x-[16px] items-top">
                        <View className="w-[44px] h-[28px]">
                            <Image className="w-full h-full" source={mastercard}/>
                        </View>
                        <View className="h-fit">
                            <Text className="text-[16px] text-[#fff] font-[400]">Mastercard</Text>
                            <Text className="text-[12px] text-[#fff] font-[400]">**** 6098</Text>
                        </View>
                    </View>
                    <View>
                        <Text className="font-[700] text-[#F0FFF5] text-[16px]">$20 750</Text>
                    </View>
                </View>
            </View>
            {/* end card */}
            <CardsectButton/>
            <Text className="mt-[40px] mb-[16px] px-[16px] font-[700]">Transactions</Text>
            <View className="px-[16px] w-full">
                <View className="bg-[#F7F9FC] flex flex-row px-[12px] rounded-[12px] pt-[10px] pb-[26px] w-full">
                    <View className="flex w-[50%] flex-row space-x-[12px]">
                        <View className="w-[44px] bg-[#000] rounded-[44px] h-[44px]"></View>
                        <View className="space-y-[4px]">
                            <View><Text className="text-[14px] text-[#192038] leading-[20px] font-[900]">Starbucks</Text></View>
                            <View><Text className="text-[12px] text-[#8F9BB3] leading-[16px] font-[600]">Coffee and restaurant</Text></View>
                        </View>
                    </View>
                    <View className="w-[50%] space-y-[2px] text-right items-right">
                        <View><Text className="text-[14px] text-right text-[#192038] leading-[20px] font-[900]"> -1.33 USD</Text></View>
                        <View><Text className="text-[12px] text-right text-[#8F9BB3] leading-[16px] font-[600]">21.02.21</Text></View>
                    </View>
                </View>
            </View>
        </View>
        {/* to do list */}
        <Text className="px-[16px] mb-[16px] text-[14px] font-[700] text-[#2E3A59] leading-[20px] mt-[32px]">To do</Text>
        <ScrollView horizontal className="flex mb-[36px] flex-row" showsHorizontalScrollIndicator={false}>
            <View className="flex w-fit pl-[16px] space-x-[8px] flex-row">
                <View className="py-[4px] items-center space-x-[10px] flex w-fit flex-row pl-[4px] rounded-[24px] bg-[#fff] pr-[12px]">
                    <View className="w-[40px] bg-[#F7F9FC] h-[40px] rounded-[20px]"></View>
                    <View><Text className="text-[12px] font-[700] leading-[16px] text-[#2E3A59]">How can we reach you?</Text></View>
                </View>
                {/* 1 */}
                <View className="py-[4px] items-center space-x-[10px] flex w-fit flex-row pl-[4px] rounded-[24px] bg-[#fff] pr-[12px]">
                    <View className="w-[40px] bg-[#F7F9FC] h-[40px] rounded-[20px]"></View>
                    <View><Text className="text-[12px] font-[700] leading-[16px] text-[#2E3A59]">Complete your information?</Text></View>
                </View>
                {/* 2 */}
                <View className="py-[4px] items-center space-x-[10px] flex w-fit flex-row pl-[4px] rounded-[24px] bg-[#fff] pr-[12px]">
                    <View className="w-[40px] bg-[#F7F9FC] h-[40px] rounded-[20px]"></View>
                    <View><Text className="text-[12px] font-[700] leading-[16px] text-[#2E3A59]">Read on how to use our save?</Text></View>
                </View>
                {/* 3 */}
                <View className="py-[4px] items-center space-x-[10px] flex w-fit flex-row pl-[4px] rounded-[24px] bg-[#fff] pr-[12px]">
                    <View className="w-[40px] bg-[#F7F9FC] h-[40px] rounded-[20px]"></View>
                    <View><Text className="text-[12px] font-[700] leading-[16px] text-[#2E3A59]">Cashback on referrals?</Text></View>
                </View>
                {/* 4 */}
            {/* /// */}
            </View>
        </ScrollView>
        {/* end to do list */}
        <Text className="px-[16px] mb-[20px] text-[14px] font-[700] text-[#2E3A59] leading-[20px] mt-[32px]">Suggestions</Text>
        <ScrollView className="mb-[34px]" horizontal showsHorizontalScrollIndicator={false}>
            <View className="pl-[16px] w-fit flex flex-row space-x-[12px]">
                <View className="w-[270px] p-[24px] rounded-[16px] border-[2px] border-[#fff] h-fit bg-[#D8FF6F]">
                    <Text className="w-[174px] mb-[124px] font-[700] leading-[24px] text-[16px] text-[#2E3A59]">Speed up your direct deposits</Text>
                    <View className="w-[30px] bg-[#fff] h-[30px] rounded-full">
                        <Text className="text-center w-fit">{`-->`}</Text>
                    </View>
                </View>
                {/* 2 */}
                <View className="w-[270px] p-[24px] rounded-[16px] border-[2px] border-[#fff] h-fit bg-[#D7E5FF]">
                    <Text className="w-[174px] mb-[124px] font-[700] leading-[24px] text-[16px] text-[#2E3A59]">Speed up your direct deposits</Text>
                    <View className="w-[30px] bg-[#fff] h-[30px] rounded-full">
                        <Text className="text-center w-fit">{`-->`}</Text>
                    </View>
                </View>
                {/* end */}
            </View>
        </ScrollView>
        {/* end suggestions */}
        <View className="mb-[49px] space-x-[12px] flex flex-row items-center w-fit mx-auto">
            <View><Image source={setting} className="w-[20px] h-[20px]"/></View>
            <View><Text className="text-[14px] font-[700] text-[#2E3A59] leading-[20px]">Configure</Text></View>
        </View>
        {/* config */}
      </ScrollView>
    </View>
  );
};

export default MainScreen;
