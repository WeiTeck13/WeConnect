// import * as React from 'react';

import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Linking,
} from 'react-native';

import { styles } from "./stylesheet Folder/style";

import call from 'react-native-phone-call';

//==========================================================================================
// Contact
//==========================================================================================

const ambulance = {
    number: '103', // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
    skipCanOpen: true // Skip the canOpenURL check
}

const police = {
    number: '102', // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
    skipCanOpen: true // Skip the canOpenURL check
}

const fire = {
    number: '101', // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
    skipCanOpen: true // Skip the canOpenURL check
}

const redCrossUA = {
    number: '0800332656', // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
    skipCanOpen: true // Skip the canOpenURL check
}

const suicidePreventionUA = {
    number: '7333', // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
    skipCanOpen: true // Skip the canOpenURL check
}

const gasUA = {
    number: '104', // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
    skipCanOpen: true // Skip the canOpenURL check
}

//==========================================================================================
// Const
//==========================================================================================

const Home = ({ navigation }) => {

    //==========================================================================================
    // Time
    //==========================================================================================

    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {

        //Time
        const timer = setInterval(() => {

            let time = getCurrentTime();
            setTime(time);

            //Date
            let today = new Date();
            let date = today.getDate() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getFullYear();
            setDate(date);


        }, 1000);

        return () => {
            clearInterval(timer);
        };



    }, []);

    //Time
    const getCurrentTime = () => {
        let today = new Date();
        let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
        return hours + ':' + minutes + ':' + seconds;
    }

    //==========================================================================================
    // return
    //==========================================================================================

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={styles.timeView}><Text style={styles.clockText}>{time}</Text><Text style={styles.dateText}>{date}</Text></View>

                <Text style={styles.h1}>гаряча лінія \ Hotline</Text>

                <View style={{ margin: 12 }}>

                    <View style={styles.btnArrangement}>

                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => call(ambulance).catch(console.error)}
                                style={styles.startButton}>

                                <Text style={styles.buttonText}>Швидка допомога \ Ambulance</Text>

                            </TouchableOpacity>

                        </View>

                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => call(police).catch(console.error)}
                                style={styles.startButton}>

                                <Text style={styles.buttonText}>Поліція \ Police</Text>

                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.btnArrangement}>

                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => call(fire).catch(console.error)}
                                style={styles.startButton}>

                                <Text style={styles.buttonText}>вогонь \ Fire</Text>

                            </TouchableOpacity>

                        </View>

                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => call(redCrossUA).catch(console.error)}
                                style={styles.startButton}>

                                <Text style={styles.buttonText}>Товариство Червоного Хреста України \ Ukraine Red Cross Society</Text>

                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.btnArrangement}>

                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => call(suicidePreventionUA).catch(console.error)}
                                style={styles.startButton}>

                                <Text style={styles.buttonText}>Лінія запобігання самогубствам \ Suicide prevention support</Text>

                            </TouchableOpacity>

                        </View>

                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => call(gasUA).catch(console.error)}
                                style={styles.startButton}>

                                <Text style={styles.buttonText}>газ \ Gas</Text>

                            </TouchableOpacity>

                        </View>
                    </View>

                </View>

                <Text style={styles.h1}>Інформація про новини \ News information</Text>
                <Text style={styles.description}>Уникайте поширення чуток і не довіряйте їм. Щоб отримати інформацію про новини, зверніться до надійних ЗМІ чи офіційного веб-сайту уряду України.{'\n'}Avoid spreading or trusting rumours. Please refer to reliable news media or Ukraine government official website for news information.</Text>

                <View style={{ margin: 12 }}>

                    <View style={styles.btnArrangement}>

                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => { Linking.openURL('https://www.kmu.gov.ua/en'); }} style={styles.startButton2}>

                                <Text style={styles.buttonText2}>Кабінет Міністрів України{'\n'}Cabinet of Ministers</Text>

                            </TouchableOpacity>

                        </View>

                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => { Linking.openURL('https://www.ukrinform.ua/'); }}
                                style={styles.startButton2}>

                                <Text style={styles.buttonText2}>Укрінформ{'\n'}Ukrinform</Text>

                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.btnArrangement}>

                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => { Linking.openURL('https://www.president.gov.ua/news/all'); }} style={styles.startButton2}>

                                <Text style={styles.buttonText2}>ПРЕЗИДЕНТ УКРАЇНИ{'\n'}PRESIDENT OF UKRAINE</Text>

                            </TouchableOpacity>

                        </View>

                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => { Linking.openURL('https://war.ukraine.ua/'); }}
                                style={styles.startButton2}>

                                <Text style={styles.buttonText2}>War in Ukraine</Text>

                            </TouchableOpacity>

                        </View>
                    </View>


                    <View style={styles.btnArrangement}>

                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => { Linking.openURL('https://twitter.com/RedCrossUkraine'); }} style={styles.startButton2}>

                                <Text style={styles.buttonText2}>Ukrainian Red Cross Twitter</Text>

                            </TouchableOpacity>

                        </View>

                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => { Linking.openURL('https://twitter.com/ICRC_ua'); }}
                                style={styles.startButton2}>

                                <Text style={styles.buttonText2}>ICRC Ukraine Twitter</Text>

                            </TouchableOpacity>

                        </View>
                    </View>

                </View>

                <Text style={styles.h1}>здати кров \ Donate blood</Text>
                <Text style={styles.description}>Ваша допомога безцінна, будь ласка, здайте кров, щоб допомогти тим, хто цього потребує.{'\n'}Your help is precious, please donate blood to help those in need.</Text>
                
                <View>

                    <TouchableOpacity
                        onPress={() => { Linking.openURL('https://www.donor.ua/'); }}
                        style={styles.startButton2}>

                        <Text style={styles.buttonText2}>www.donor.ua</Text>

                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView >
    );
};

export default Home;