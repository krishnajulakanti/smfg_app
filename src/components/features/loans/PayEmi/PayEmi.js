import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import LoanHeader from '../../common/LoanHeader';
import Footer from '../../../common/Footer';

const PayEmi = ({ navigation }) => {
  const [loanTypeOpen, setLoanTypeOpen] = useState(false);
  const [loanTypeValue, setLoanTypeValue] = useState(null);
  const [loanTypes, setLoanTypes] = useState([
    { label: 'Home Loan', value: 'home-loan' },
    { label: 'Car Loan', value: 'car-loan' },
    { label: 'Personal Loan', value: 'personal-loan' },
  ]);

  const [lanIdOpen, setLanIdOpen] = useState(false);
  const [lanIdValue, setLanIdValue] = useState(null);
  const [lanIds, setLanIds] = useState([
    { label: '400899XXXXXXXXXX9879', value: 'lan-id-1' },
    { label: '500799XXXXXXXXXX1234', value: 'lan-id-2' },
  ]);

  const footerProps = [
    {
      // size: 'default',
      varient: 'secondary',
      title: 'CANCEL',
      onPress: () => {
        navigation.goBack();
      },
    },
    {
      // size: 'default',
      varient: 'primary',
      title: 'PROCEED',
      onPress: () => {
        navigation.navigate('OtpVerificationScreen');
      },
    },
  ];

  return (
    <View style={styles.container}>

      <View>
        <LoanHeader />
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.title}>Pay EMI</Text>

        {/* Loan Type Dropdown */}
        <DropDownPicker
          open={loanTypeOpen}
          value={loanTypeValue}
          items={loanTypes}
          setOpen={setLoanTypeOpen}
          setValue={setLoanTypeValue}
          setItems={setLoanTypes}
          style={styles.dropdown}
          placeholder="Select Loan Type"
        />

        {/* LAN ID Dropdown */}
        <DropDownPicker
          open={lanIdOpen}
          value={lanIdValue}
          items={lanIds}
          setOpen={setLanIdOpen}
          setValue={setLanIdValue}
          setItems={setLanIds}
          style={styles.dropdown}
          placeholder="Select LAN ID"
        />

        {/* Disabled Text Fields */}
        <TextInput
          style={[styles.input, styles.disabledInput]}
          value="20,000.00"
          editable={false}
        />
        <TextInput
          style={[styles.input, styles.disabledInput]}
          value="99XXXX8966"
          editable={false}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}
            style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>
              CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PaymentOptions')}
            style={styles.proceedButton}>
            <Text style={styles.proceedButtonText}>
              CONTINUE</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};

export default PayEmi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#DDDDDD',
  },
  mainContainer: {
    color: 'black',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: 800,
    paddingTop: 15,
    paddingHorizontal: 13
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#004831',
  },
  dropdown: {
    marginBottom: 15,
    borderColor: '#A0C544',
    zIndex: 9
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
  },
  disabledInput: {
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10
  },
  cancelButton: {
    // flex: 1,
    width: 140,
    borderWidth: 1,
    borderColor: '#2E6C50',
    borderRadius: 25,
    paddingVertical: 15,
    // marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#2E6C50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  proceedButton: {
    // flex: 1,
    width: 140,
    backgroundColor: '#2E6C50',
    borderRadius: 25,
    paddingVertical: 15,
    marginLeft: 10,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
