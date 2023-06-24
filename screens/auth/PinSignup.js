import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import splashbg from '../../assets/image/splashbg.png'
import padcancel from '../../assets/image/padcancel.png'
import metric from '../../assets/image/metric.png'
import React, { useState, useRef } from "react";

const PinSignup = ({navigation}) => {
  //states
  const [firstpin, setfirstPin] = useState('')
  const [secondpin, setsecondPin] = useState('')
  const [thirdpin, setthirdPin] = useState('')
  const [fourthpin, setfourthPin] = useState('')
  
  const [error, setError] = useState(false)
  
  const pinOne = useRef(null)
  const pinTwo = useRef(null)
  const pinThree = useRef(null)
  const pinFour = useRef(null)
  
  const getTarget=(valt)=>{
    if(firstpin.length <= 0){
      pinOne.current.focus()
      setfirstPin(valt)
    }
    if(firstpin.length >= 1){
      pinTwo.current.focus()
      if(secondpin.length <= 0){
        setsecondPin(valt)
      }
    }
    if(secondpin.length >= 1){
      pinThree.current.focus()
      if(thirdpin.length <= 0){
        setthirdPin(valt)
      }
    }
    if(thirdpin.length >= 1){
      pinFour.current.focus()
      if(fourthpin.length <= 0){
        setfourthPin(valt)
        setTimeout(()=>{
          navigation.navigate('Login')
        }, 3000)
      }
    }
  }
  const deleteAll=()=>{
    setfirstPin('')
    setsecondPin('')
    setthirdPin('')
    setfourthPin('')
  }
  return (
    <SafeAreaView>
        <View className="bg-[#fff] px-[16px] w-full h-full">
          <ScrollView>
            <View className="mx-auto mt-[40px] w-full h-fit">
                <Image source={splashbg} className="w-[110px] mx-auto h-[110px]" />
            </View>
            <Text className="text-center mb-[40px] text-[#222B45] leading-[28px] text-[20px] font-[600] mx-auto w-fit mt-[48px]">
                Create PIN
            </Text>
            <View className="flex mb-[24px] space-x-[24px] flex-row mx-auto w-fit">
                <View ref={pinOne} className={`${firstpin.length <= 0 ? 'bg-[#fff]': 'bg-[#2C64E3]'} rounded-full text-center border border-[#C5CEE0] w-[16px] h-[16px]`}><Text className={`${firstpin.length <= 0 ? 'text-[#fff]': 'text-[#2C64E3]'} mx-auto`}>{firstpin}</Text></View>
                <View ref={pinTwo} className={`${secondpin.length <= 0 ? 'bg-[#fff]': 'bg-[#2C64E3]'} rounded-full text-center border border-[#C5CEE0] w-[16px] h-[16px]`}><Text className={`${secondpin.length <= 0 ? 'text-[#fff]': 'text-[#2C64E3]'} mx-auto`}>{secondpin}</Text></View>
                <View ref={pinThree} className={`${thirdpin.length <= 0 ? 'bg-[#fff]': 'bg-[#2C64E3]'} rounded-full text-center border border-[#C5CEE0] w-[16px] h-[16px]`}><Text className={`${thirdpin.length <= 0 ? 'text-[#fff]': 'text-[#2C64E3]'} mx-auto`}>{thirdpin}</Text></View>
                <View ref={pinFour} className={`${fourthpin.length <= 0 ? 'bg-[#fff]': 'bg-[#2C64E3]'} rounded-full text-center border border-[#C5CEE0] w-[16px] h-[16px]`}><Text className={`${fourthpin.length <= 0 ? 'text-[#fff]': 'text-[#2C64E3]'} mx-auto`}>{fourthpin}</Text></View>
            </View>
            {/* error signal */}
            <Text className={`${error ? 'block mb-[30px]' : 'hidden mb-[0px]'} text-[#FF3D71] text-[14px] font-[500] leading-[20px] mx-auto w-fit text-center`}>Incorrect Pin</Text>
            {/* keyboard */}
            <View className={`${error ? 'mt-[0px]' : 'mt-[56px]'} px-[71px]`}>
                <View className="flex items-center mb-[48px] justify-between flex-row">
                    <Text onPress={()=>getTarget('1')} className={`font-[400] px-[8px] py-[6px] text-[24px] text-[#2E4369] leading-[32px]`}>1</Text>
                    <Text onPress={()=>getTarget('2')} className="font-[400] text-[24px] px-[8px] py-[6px] text-[#2E4369] leading-[32px]">2</Text>
                    <Text onPress={()=>getTarget('3')} className="font-[400] text-[24px] px-[8px] py-[6px] text-[#2E4369] leading-[32px]">3</Text>
                </View>
                <View className="flex items-center mb-[48px] justify-between flex-row">
                    <Text onPress={()=>getTarget('4')} className="font-[400] px-[8px] py-[6px] text-[24px] text-[#2E4369] leading-[32px]">4</Text>
                    <Text onPress={()=>getTarget('5')} className="font-[400] px-[8px] py-[6px] text-[24px] text-[#2E4369] leading-[32px]">5</Text>
                    <Text onPress={()=>getTarget('6')} className="font-[400] px-[8px] py-[6px] text-[24px] text-[#2E4369] leading-[32px]">6</Text>
                </View>
                <View className="flex items-center mb-[48px] justify-between flex-row">
                    <Text onPress={()=>getTarget('7')} className="font-[400] px-[8px] py-[6px] text-[24px] text-[#2E4369] leading-[32px]">7</Text>
                    <Text onPress={()=>getTarget('8')} className="font-[400] px-[8px] py-[6px] text-[24px] text-[#2E4369] leading-[32px]">8</Text>
                    <Text onPress={()=>getTarget('9')} className="font-[400] px-[8px] py-[6px] text-[24px] text-[#2E4369] leading-[32px]">9</Text>
                </View>
                <View className="flex items-center mb-[48px] justify-between flex-row">
                    <Image className="w-[24px] px-[8px] py-[6px] h-[24px]" source={metric}/>
                    <Text onPress={()=>getTarget('0')} className="font-[400] text-[24px] px-[8px] py-[6px] text-[#2E4369] leading-[32px]">0</Text>
                    <TouchableOpacity className="px-[8px] py-[6px]" onPress={deleteAll}>
                      <Image className="w-[24px] h-[24px]" source={padcancel}/>
                    </TouchableOpacity>
                </View>
            </View>
            {/* end keyboard */}
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default PinSignup;
