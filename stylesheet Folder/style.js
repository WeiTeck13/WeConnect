import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 8,
    },
    btnArrangement: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    timeView:{
        backgroundColor:'rgba(52, 52, 52, 0.05)',
  
        alignItems: 'center',
    },
    startButton: {
        height: 120,
        width: 180,
        margin: 5,
        padding: 10,
        backgroundColor: '#0057b7',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,

        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 9,
    },
    startButton2: {
        height: 120,
        width: 180,
        margin: 5,
        padding: 10,
        backgroundColor: '#ffd700',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,

        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 9,
    },
    startButton3: {
        height: 40,
        margin: 5,
        padding: 10,
        backgroundColor: '#0057b7',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,

        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 9,
    },
    startButton4: {
        height: 40,
        margin: 5,
        padding: 10,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,

        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 9,
    },
    callButton: {
        height: 40,
        width: 100,
        margin: 5,
        padding: 10,
        backgroundColor: '#0057b7',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,

        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 9,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        padding: 10,
    },
    buttonText2: {
        color: 'black',
        fontSize: 16,
        padding: 10,
    },
    clockText: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 50,
        color: '#0057b7',
    },
    dateText: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        fontSize: 22,
        color: '#0057b7',
    },
    h1: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 22,
        color: '#0057b7',
    },
    h1Btn: {
        fontSize: 16,
        color: 'white',
    },
    description: {
        fontSize: 16,
        color: 'black',
        textAlign: 'justify',
    },
    input: {
        height: 40,
        margin: 5,
        padding: 10,

        borderRadius: 10,

        borderWidth: 1,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
    },
    input2: {
        height: 120,
        margin: 5,
        padding: 10,

        borderRadius: 10,

        borderWidth: 1,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
    },

});

export { styles }