import { Platform, StyleSheet, Dimensions } from 'react-native';

// var {height, screenWidth} = Dimensions.get('window');
var screenWidth = Dimensions.get('window').width

const theme = {
    darkGrey: "#34495e",
    background: "#ecf0f1",
    hightlight: "#3498db",
}

export default StyleSheet.create({
    container: {
        backgroundColor: theme.background,
        padding: 20,
        paddingBottom: 5,
        width: screenWidth,
        justifyContent: 'center',
    },
    h1: {
        marginTop: 20,
        marginBottom: 5,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.darkGrey,
    },
    h2: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15,
        textAlign: 'justify',
        color: theme.darkGrey,
    },
    h3: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15,
        textAlign: 'center',
        color: theme.darkGrey,
    },
    title: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 40,
        textAlign: 'center',
        color: theme.background,
        backgroundColor: theme.hightlight,
        marginTop: 30,
        marginBottom: 30,
    },
    circle: {
        width: 200,
        height: 200,
        lineHeight: 200,
        borderRadius: 100,
        overflow: 'hidden',
    },
    square: {
        padding: 10,
    },
    input: {
        margin: 15,
        height: 40,
        padding: 10,
        borderColor: theme.darkGrey,
        ...Platform.select({
            ios: {
                borderBottomWidth: 1,
            },
        }),
    },
    button: {
        alignItems: 'center',
        backgroundColor: theme.hightlight,
        margin: 20,
        marginTop: 10,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: theme.background,
        fontSize: 24,
        padding: 10,
    },
});
