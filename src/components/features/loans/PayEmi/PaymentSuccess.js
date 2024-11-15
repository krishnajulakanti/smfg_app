import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../../common/Header';

const PaymentSuccess = ({ navigation }) => {

  const headerProps =
  {
    title: 'Pay EMI Confirmation',
    onPress: () => {
      navigation.goBack();
    },
  };
  return (
    <View style={styles.container}>

      <Header buttonProps={headerProps} />

      <View style={styles.mainContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.successCircle}>
            <Icon name="check" size={60} color="#fff" />
          </View>
        </View>

        <View style={{paddingLeft: 100}}>
          <Text style={styles.successText}>Payment Successful!</Text>
          <Text style={styles.referenceText}>Reference No: 234567890</Text>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Payment Type</Text>
            <Text style={styles.detailValue}>Home Loan</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>LAN ID</Text>
            <Text style={styles.detailValue}>400899XXXXXXXXXXX9879</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Payment Mode</Text>
            <Text style={styles.detailValue}>QR Scan</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>EMI Amount (₹)</Text>
            <Text style={styles.detailValue}>20,000.00</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Mobile No.</Text>
            <Text style={styles.detailValue}>99XXXX8966</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}
            style={styles.shareButton}>
            <Text style={styles.shareText}>
              SHARE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PaymentSuccess')}
            style={styles.doneButton}>
            <Text style={styles.doneText}>
              DONE</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    // alignItems: 'center',
    // padding: 20,
  },
  mainContainer: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // borderBottomRightRadius: 0,
    // borderBottomLeftRadius: 0,
    // borderBottomEndRadius: 0
    height: 800,
    // paddingTop: 15
  },
  iconContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  successCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 10,
  },
  referenceText: {
    fontSize: 16,
    color: '#9E9E9E',
    marginBottom: 20,
    paddingLeft: 20
  },
  detailsContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#F9F9F9',
    height: 470,
    borderRadius: 10,
    // marginBottom: 30,
  },
  detailRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailTitle: {
    fontSize: 14,
    color: '#9E9E9E',
  },
  detailValue: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
  },
  buttonContainer: {
    // marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 15,
    backgroundColor: '#F5F0EB',
  },
  shareButton: {
    // flex: 1,
    width: 180,
    borderWidth: 1,
    borderColor: '#2E6C50',
    borderRadius: 25,
    paddingVertical: 15,
    // marginRight: 10,
    alignItems: 'center',
  },
  shareText: {
    color: '#2E6C50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  doneButton: {
    // flex: 1,
    width: 180,
    backgroundColor: '#2E6C50',
    borderRadius: 25,
    paddingVertical: 15,
    marginLeft: 10,
    alignItems: 'center',
  },
  doneText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentSuccess;
