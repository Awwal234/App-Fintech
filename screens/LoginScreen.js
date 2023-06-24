import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import arrowleft from '../assets/image/arrow-left.png'
import closecircle from '../assets/image/close-circle.png'
import React, {useState} from "react";

const LoginScreen = ({navigation}) => {
  const[phone, setPhone] = useState('')
  const dataChange=(inputText)=>{
    setPhone(inputText)
  }
  const clearInput=()=>{
    setPhone('')
  }
  const saveLocal=()=>{
    navigation.push('OTP')
  }
  return (
    <SafeAreaView>
        <View className="bg-[#fff] px-[16px] w-full h-full">
        <ScrollView>
            <View className="pt-[10px] w-fit h-fit">
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Image source={arrowleft} className="w-[24px] h-[24px]"/>
                </TouchableOpacity>
            </View>
            <View className="mt-[16px]">
                <Text className="text-[24px] mb-[8px] text-[#222B45] leading-[32px] font-[600]">Welcome back</Text>
                <Text className="font-[400] text-[#8F9BB3] text-[14px] leading-[20px]">
                    Insert your phone number to continue
                </Text>
            </View>
            <View className="mt-[52px] flex flex-row w-full items-center">
                <View className="w-[90%]">
                    <TextInput keyboardType="numeric" onChangeText={dataChange} value={phone} placeholder="+994" className="w-full font-[400] text-[16px] border-b border-[#8F9BB3] pb-[20px]" />
                </View>
                <View className="w-[10%]">
                    <TouchableOpacity onPress={clearInput}>
                        <Image source={closecircle} className="w-[20px] mx-auto h-[20px]"/>
                    </TouchableOpacity>
                </View>
            </View>
            <Text className="mt-[48px] font-[400] text-[#222B45] text-[14px] leading-[20px]">
                If you have no account <Text className="text-[#2C64E3] font-[600]">Sign up</Text>
            </Text>
            <TouchableOpacity disabled={phone.length!=11} onPress={saveLocal} className="mt-[140px]">
                <View className={`${phone.length!=11?'bg-[#8F9BB3]': 'bg-[#2C64E3]'} py-[14px] text-center w-full rounded-[12px]`}>
                    <Text className="font-[600] text-[#fff] text-[16px] leading-[20px] mx-auto text-center">Log in</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
