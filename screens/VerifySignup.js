import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import arrowleft from '../assets/image/arrow-left.png'
import React, { useState, useRef, useLayoutEffect } from "react";

const VerifySignup = ({navigation}) => {
  const phone = '+234 916 137 2780';
  const[firstpassword, setFirstpassword] = useState('')
  const[secondpassword, setSecondpassword] = useState('')
  const[thirdpassword, setThirdpassword] = useState('')
  const[fourthpassword, setFourthpassword] = useState('')
  const[fifthpassword, setFifthpassword] = useState('')
  const[lastpassword, setLastpassword] = useState('')
  
  //refs
  const otpOne = useRef(null)
  const otpTwo = useRef(null)
  const otpThree = useRef(null)
  const otpFour = useRef(null)
  const otpFive = useRef(null)
  const otpSix = useRef(null)
  
  useLayoutEffect(()=>{
    if(firstpassword.length == 0){
        otpOne.current.focus()
    }
  })
  
  const dataChangeFirst=(inputTextOne)=>{
    setFirstpassword(inputTextOne)
    if(inputTextOne.length == 1){
        otpTwo.current.focus()
    }
  }
  const dataChangeSecond=(inputTextTwo)=>{
    setSecondpassword(inputTextTwo)
    if(inputTextTwo.length == 1){
        otpThree.current.focus()
    }
  }
  const dataChangeThird=(inputTextThree)=>{
    setThirdpassword(inputTextThree)
    if(inputTextThree.length == 1){
        otpFour.current.focus()
    }
  }
  const dataChangeFourth=(inputTextFour)=>{
    setFourthpassword(inputTextFour)
    if(inputTextFour.length == 1){
        otpFive.current.focus()
    }
  }
  const dataChangeFifth=(inputTextFive)=>{
    setFifthpassword(inputTextFive)
    if(inputTextFive.length == 1){
        otpSix.current.focus()
    }
  }
  const dataChangeLast=(inputTextSix)=>{
    setLastpassword(inputTextSix)
    if(inputTextSix.length == 1){
        navigation.navigate('PinSignup')
    }
  }
  return (
    <SafeAreaView>
        <View className="bg-[#fff] px-[16px] w-full h-full">
        <ScrollView>
            <View className="pt-[10px] w-fit h-fit">
                <TouchableOpacity onPress={()=>navigation.navigate('SignupScreen')}>
                    <Image source={arrowleft} className="w-[24px] h-[24px]"/>
                </TouchableOpacity>
            </View>
            <View className="mt-[16px]">
                <Text className="text-[24px] mb-[8px] text-[#222B45] leading-[32px] font-[600]">Verify OTP</Text>
                <Text className="font-[400] text-[#8F9BB3] text-[14px] leading-[20px]">
                    Code is sent to {phone}
                </Text>
            </View>
            {/* otp input */}
            <View className="flex mt-[61px] space-x-[4px] flex-row items-center mx-auto w-fit">
                <View className="w-[36px] h-[44px]">
                    <TextInput ref={otpOne} onChangeText={dataChangeFirst} value={firstpassword} secureTextEntry={true} keyboardType="numeric" className="text-[400] text-[16px] text-[#2E3A59] w-full text-center h-full rounded-[8px] bg-[#F2F8FF] focus:border focus:border-[#42AAFF]"/>
                </View>
                <View className="w-[36px] h-[44px]">
                    <TextInput ref={otpTwo} onChangeText={dataChangeSecond} value={secondpassword} secureTextEntry={true} keyboardType="numeric" className="text-[400] text-[16px] text-[#2E3A59] w-full text-center h-full rounded-[8px] bg-[#F2F8FF] focus:border focus:border-[#42AAFF]"/>
                </View>
                <View className="w-[36px] h-[44px]">
                    <TextInput ref={otpThree} onChangeText={dataChangeThird} value={thirdpassword} secureTextEntry={true} keyboardType="numeric" className="text-[400] text-[16px] text-[#2E3A59] w-full text-center h-full rounded-[8px] bg-[#F2F8FF] focus:border focus:border-[#42AAFF]"/>
                </View>
                <View className="w-[8px] bg-[#8F9BB3] h-[1px]"></View>
                <View className="w-[36px] h-[44px]">
                    <TextInput ref={otpFour} onChangeText={dataChangeFourth} value={fourthpassword} secureTextEntry={true} keyboardType="numeric" className="text-[400] text-[16px] text-[#2E3A59] w-full text-center h-full rounded-[8px] bg-[#F2F8FF] focus:border focus:border-[#42AAFF]"/>
                </View>
                <View className="w-[36px] h-[44px]">
                    <TextInput ref={otpFive} onChangeText={dataChangeFifth} value={fifthpassword} secureTextEntry={true} keyboardType="numeric" className="text-[400] text-[16px] text-[#2E3A59] w-full text-center h-full rounded-[8px] bg-[#F2F8FF] focus:border focus:border-[#42AAFF]"/>
                </View>
                <View className="w-[36px] h-[44px]">
                    <TextInput ref={otpSix} onChangeText={dataChangeLast} value={lastpassword} secureTextEntry={true} keyboardType="numeric" className="text-[400] text-[16px] text-[#2E3A59] w-full text-center h-full rounded-[8px] bg-[#F2F8FF] focus:border focus:border-[#42AAFF]"/>
                </View>
            </View>
            {/* end otp input */}
            <View className="mt-[48px] mx-auto w-fit">
                <Text className="font-[500] text-[#222B45] text-[14px] leading-[20px]">Didn&apos;t get the code? 
                    <Text className="text-[#2C6AE3] leading-[16px]"> Resend</Text>
                </Text>
            </View>
        </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default VerifySignup;
