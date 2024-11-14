import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Header from '../../../components/common/Header';


const MyProfile = ({ navigation }) => {
    const [isFingerprintEnabled, setIsFingerprintEnabled] = React.useState(true);

    const toggleFingerprint = () => setIsFingerprintEnabled(!isFingerprintEnabled);

    const headerProps =
    {
        title: 'My Profile',
        onPress: () => {
            navigation.goBack();
        },
    };

    return (
        <View style={styles.container}>

            <Header buttonProps={headerProps} />

            <View style={styles.mainContainer}>
                <View style={styles.card}>
                    <FontAwesome name="user-circle-o" size={80} color="#2f4f4f" />
                    <View style={styles.headerContent}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Name</Text>
                        <Text style={styles.name}>John Smith</Text>
                    </View>
                    <MaterialIcons name="edit" size={24} color="#6b8e23" style={styles.icon} />
                </View>

                {/* Menu Items */}
                {[
                    { icon: 'language', label: 'Change Language', edit: true },
                    { icon: 'phone', label: '9944455999', edit: true },
                    { icon: 'email', label: 'johnsmith@domain.com', edit: true },
                    { icon: 'fingerprint', label: 'Disable Fingerprint', isSwitch: true },
                    { icon: 'lock', label: 'Change Password', edit: true },
                    { icon: 'vpn-key', label: 'Reset PIN', edit: true },
                    { icon: 'sync', label: 'Sync your Social Accounts' },
                    { icon: 'feedback', label: 'Feedback' },
                    { icon: 'exit-to-app', label: 'Signout' },
                ].map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.card}
                        onPress={() => {
                            if (!item.isSwitch) {
                                // Handle navigation or action
                                console.log(`${item.label} clicked`);
                            }
                        }}
                    >
                        <MaterialIcons name={item.icon} size={24} color="#2f4f4f" />
                        <Text style={styles.cardText}>{item.label}</Text>
                        {item.isSwitch ? (
                            <Switch
                                value={isFingerprintEnabled}
                                onValueChange={toggleFingerprint}
                                style={styles.switch}
                            />
                        ) : (
                            item.edit && <MaterialIcons name="edit" size={18} color="#6b8e23" style={styles.icon} />
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDDDDD',
    },
    mainContainer: {
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height: 800,
        paddingTop: 15
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 13,
        paddingLeft: 13,
        marginRight: 16,
        marginLeft: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    headerContent: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2f4f4f',
    },
    cardText: {
        flex: 1,
        paddingLeft: 20,
        fontSize: 16,
        color: '#333333',
    },
    icon: {
        width: 20,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: '#CCCCCC',
        paddingBottom: 0
    },
    switch: {
        marginLeft: 'auto',
    },
});
