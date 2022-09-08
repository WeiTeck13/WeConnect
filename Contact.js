import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Alert,
    TextInput,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

import { styles } from "./stylesheet Folder/style";

import AsyncStorage from '@react-native-async-storage/async-storage';

import call from 'react-native-phone-call';

//Storage Key for Async Storage
const STORAGE_KEY_FNAME = '@save_fname';
const STORAGE_KEY_ADD = '@save_add';
const STORAGE_KEY_FPHONE = '@save_fphone';
const STORAGE_KEY_DNAME = '@save_dname';
const STORAGE_KEY_DPHONE = '@save_dphone';

const Contact = ({ navigation }) => {

    //==========================================================================================
    // Async Storage
    //==========================================================================================

    //Set State for Async Storage
    const [fname, setFname] = useState('');
    const [add, setAdd] = useState('');
    const [fphone, setFphone] = useState('');
    const [dname, setDname] = useState('');
    const [dphone, setDphone] = useState('');

    /* Save data into Async Storage */
    const saveData = async () => {
        if (!fname.trim()) {

            alert('Будь ласка, напишіть щось.\nPlease write something.');

        } else {

            try {
                await AsyncStorage.setItem(STORAGE_KEY_FNAME, fname);
                await AsyncStorage.setItem(STORAGE_KEY_ADD, add);
                await AsyncStorage.setItem(STORAGE_KEY_FPHONE, fphone);
                await AsyncStorage.setItem(STORAGE_KEY_DNAME, dname);
                await AsyncStorage.setItem(STORAGE_KEY_DPHONE, dphone);

                alert('Дані успішно збережено\nData successfully saved');

            } catch (e) {
                alert('Не вдалося зберегти дані в сховище\nFailed to save the data to the storage');
            }
        }
    };

    /* Read data from Async Storage */
    const readData = async () => {
        try {
            const userFname = await AsyncStorage.getItem(STORAGE_KEY_FNAME);
            const userAdd = await AsyncStorage.getItem(STORAGE_KEY_ADD);
            const userFphone = await AsyncStorage.getItem(STORAGE_KEY_FPHONE);
            const userDname = await AsyncStorage.getItem(STORAGE_KEY_DNAME);
            const userDphone = await AsyncStorage.getItem(STORAGE_KEY_DPHONE);

            if (userFname !== null) {
                setFname(userFname);
            }

            if (userAdd !== null) {
                setAdd(userAdd);
            }

            if (userFphone !== null) {
                setFphone(userFphone);
            }

            if (userDname !== null) {
                setDname(userDname);
            }

            if (userDphone !== null) {
                setDphone(userDphone);
            }

        } catch (e) {
            alert('Failed to fetch the data from storage');
        }
    };

    useEffect(() => {
        readData();
    }, []);

    // Clear data warning
    const clearWarning = () =>
        Alert.alert(
            "Попередження Alert",
            "Ви впевнені, що хочете видалити всі свої дані?\nAre you sure you want to delete all your data?",
            [
                {
                    text: "Скасувати Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "Скасувати cancel"
                },
                { text: "Видалити DELETE", onPress: clearStorage }
            ]
        );

    /* Clear data from Async Storage */
    const clearStorage = async () => {
        try {
            //await AsyncStorage.clear();
            await AsyncStorage.removeItem('@save_fname');
            await AsyncStorage.removeItem('@save_add');
            await AsyncStorage.removeItem('@save_fphone');
            await AsyncStorage.removeItem('@save_dname');
            await AsyncStorage.removeItem('@save_dphone');

            setFname('');
            setAdd('');
            setFphone('');
            setDname('');
            setDphone('');

            alert('Сховище успішно очищено!\nStorage successfully cleared!');
        } catch (e) {
            alert('Не вдалося очистити асинхронне сховище.\nFailed to clear the async storage.');
        }
    };

    const onChangeFname = (userFname) => setFname(userFname);
    const onChangeAdd = (userAdd) => setAdd(userAdd);
    const onChangeFphone = (userFphone) => setFphone(userFphone);
    const onChangeDname = (userDname) => setDname(userDname);
    const onChangeDphone = (userDphone) => setDphone(userDphone);

    const onSubmitEditing = () => {
        if (
            !fname &&
            !add &&
            !fphone &&
            !dname &&
            !dphone
        )
            return;

        saveData(des, date, note, hotel, room);

        setFname('');
        setAdd('');
        setFphone('');
        setDname('');
        setDphone('');
    };

    //==========================================================================================
    // Call
    //==========================================================================================

    const args1 = {
        number: fphone, // String value with the number to call
        prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
        skipCanOpen: true // Skip the canOpenURL check
    }

    // Family doctor
    const args2 = {
        number: dphone, // String value with the number to call
        prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
        skipCanOpen: true // Skip the canOpenURL check
    }

    //==========================================================================================
    // Return
    //==========================================================================================

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>

                {/* ======================================================================================
                    Family emergency contact
                ====================================================================================== */}

                <Text style={styles.h1}>Сімейний екстрений контакт \ Family emergency contact</Text>

                <Text style={styles.textStyle}>
                Ім'я \ Name
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    keyboardType="text"
                    value={fname}
                    onChangeText={onChangeFname}
                    onSubmitEditing={onSubmitEditing}
                />

                <Text style={styles.textStyle}>
                Адреса \ Address
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Address of your family"
                    keyboardType="text"
                    value={add}
                    onChangeText={onChangeAdd}
                    onSubmitEditing={onSubmitEditing}
                />

                <Text style={styles.textStyle}>
                Телефон \ Phone
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    keyboardType="numeric"
                    value={fphone}
                    onChangeText={onChangeFphone}
                    onSubmitEditing={onSubmitEditing}
                />

                <TouchableOpacity
                    onPress={() => call(args1).catch(console.error)}
                    style={styles.callButton}>

                    <Text style={styles.h1Btn}>CALL</Text>

                </TouchableOpacity>

                <View
                    style={{
                        padding: 20,
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />

                {/* ======================================================================================
                    Family doctor
                ====================================================================================== */}

                <Text style={styles.h1}>сімейний лікар \ Family doctor</Text>

                <Text style={styles.textStyle}>
                Ім'я \ Name
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    keyboardType="text"
                    value={dname}
                    onChangeText={onChangeDname}
                    onSubmitEditing={onSubmitEditing}
                />

                <Text style={styles.textStyle}>
                Телефон \ Phone
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    keyboardType="numeric"
                    value={dphone}
                    onChangeText={onChangeDphone}
                    onSubmitEditing={onSubmitEditing}
                />

                <TouchableOpacity
                    onPress={() => call(args2).catch(console.error)}
                    style={styles.callButton}>

                    <Text style={styles.h1Btn}>CALL</Text>

                </TouchableOpacity>

                <View
                    style={{
                        padding: 20,
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />

                <TouchableOpacity
                    onPress={saveData}
                    style={styles.startButton3}>

                    <Text style={styles.h1Btn}>ЗБЕРЕГТИ \ SAVE</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={clearWarning}
                    style={styles.startButton4}>

                    <Text style={styles.h1Btn}>ЯСНО \ CLEAR</Text>

                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView >
    );
};

export default Contact;