import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Card, Divider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ListItem } from '@rneui/themed'

import Header from '../../../common/Header';
import BHIM from '../../../../assets/images/bhim.png';
import QR from '../../../../assets/images/qr.png';
import GPAY from '../../../../assets/images/gpay.png';
import PHONEPE from '../../../../assets/images/phonepe.png';
import PAYTM from '../../../../assets/images/paytm.png';
import HDFC from '../../../../assets/images/hdfc.png';
import ICICI from '../../../../assets/images/icici.png';
import YES from '../../../../assets/images/yes_bank.png';

const accordionList = [
  {
    id: 1,
    name: 'Home Loan',
  },
  {
    id: 2,
    name: 'Recommended',
  }, ,
  {
    id: 3,
    name: 'UPI Autopay',
  }, ,
  {
    id: 4,
    name: 'NEFT/IMPS/RTGS',
  }, ,
  {
    id: 5,
    name: 'Debit/Credit Cards',
  },
];

const PaymentOptions = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const [banks] = useState([
    { label: 'HDFC Bank', value: 'hdfc' },
    { label: 'ICICI Bank', value: 'icici' },
    { label: 'Yes Bank', value: 'yes' },
  ]);
  const [accordions, setAccordions] = useState([]);

  useEffect(() => {
    setAccordions(accordionList);
    console.log(accordionList, 'accordionList');
    console.log(accordions, 'accordions');
  }, [accordions]);

  const [accordionState, setAccordionState] = useState({
    loanDetails: true,
    recommended: false,
    upiAutopay: false,
    neft: false,
    debitCredit: false,
  });

  const [expandedLoanType, setExpandedLoanType] = useState(true);
  const [expanded, setExpanded] = useState(true);

  const toggleAccordion = (section) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const headerProps =
  {
    title: 'Pay EMI',
    onPress: () => {
      navigation.goBack();
    },
  };

  return (
    <View style={styles.container}>
      <Header buttonProps={headerProps} />

      <ScrollView style={styles.mainContainer}>
        <View>
          <ListItem.Accordion style={styles.accordionCardLoanType}
            content={
              <ListItem.Content>
                <ListItem.Title style={styles.accordionTitle}>Home Loan</ListItem.Title>
                <Text style={styles.subText}>Your transaction is secured with 256-bit encryption</Text>
              </ListItem.Content>
            }
            isExpanded={expandedLoanType}
            onPress={() => {
              setExpandedLoanType(!expandedLoanType);
            }}
          >
            {/* {loanData.map((l, i) => (
                <ListItem key={l.lanId}>
                  <ListItem.Content>
                    {renderLoanItem(l)}
                  </ListItem.Content>
                </ListItem>
              ))} */}
          </ListItem.Accordion>
        </View>

        <View>
          <ListItem.Accordion style={styles.accordionCard}
            content={
              <ListItem.Content>
                <ListItem.Title style={styles.accordionTitle}>Recommended</ListItem.Title>
              </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            <View style={styles.recommendedSection}>
              <Card style={styles.cardContainer}>
                <View style={styles.paycard}>
                  <View>
                    <Image source={BHIM} style={styles.logos} />
                  </View>
                  <View style={styles.verticalBar} />
                  <View>
                    <Image source={QR} style={styles.logos} />
                    <Text style={styles.qrText}>Scan & Pay with any UPI App</Text>
                  </View>
                </View>
              </Card>
              {/* </View> */}
            </View>
          </ListItem.Accordion>
        </View>

        <View>
          <ListItem.Accordion style={styles.accordionCard}
            content={
              <ListItem.Content>
                <ListItem.Title style={styles.accordionTitle}>UPI Autopay</ListItem.Title>
              </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            <View style={styles.paymentOptions}>
              <View style={styles.iconRow}>
                <Card style={styles.paymentOptionsCards}>
                  <Image source={GPAY} style={{ width: 50, height: 20, margin: 15, bottom: 5 }} />
                </Card>
                <Card style={styles.paymentOptionsCards}>
                  <Image source={GPAY} style={{ width: 50, height: 20, margin: 15, bottom: 5 }} />
                </Card>
                <Card style={styles.paymentOptionsCards}>
                  <Image source={GPAY} style={{ width: 50, height: 20, margin: 15, bottom: 5 }} />
                </Card>
                <Card style={styles.paymentOptionsCards}>
                  <Image source={GPAY} style={{ width: 50, height: 20, margin: 15, bottom: 5 }} />
                </Card>
              </View>
              <TextInput style={styles.input} placeholder="Enter UPI ID" />
            </View>
          </ListItem.Accordion>
        </View>

        <View>
          <ListItem.Accordion style={styles.accordionCard}
            content={
              <ListItem.Content>
                <ListItem.Title style={styles.accordionTitle}>NEFT/IMPS/RTGS</ListItem.Title>
              </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            <View style={styles.neftcard}>
              {banks.map((bank) => (
                <Card key={bank.value} style={styles.bankCard}>
                  <Text>{bank.label}</Text>
                </Card>
              ))}
              <DropDownPicker
                open={open}
                value={selectedBank}
                items={banks}
                setOpen={setOpen}
                setValue={setSelectedBank}
                style={styles.dropdown}
              />
            </View>
          </ListItem.Accordion>
        </View>

        <View>
          <ListItem.Accordion style={styles.accordionCard}
            content={
              <ListItem.Content>
                <ListItem.Title style={styles.accordionTitle}>Debit/Credit Cards</ListItem.Title>
              </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            {/* {loanData.map((l, i) => (
                <ListItem key={l.lanId}>
                  <ListItem.Content>
                    {renderLoanItem(l)}
                  </ListItem.Content>
                </ListItem>
              ))} */}
          </ListItem.Accordion>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}
          style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>
            CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentSuccess')}
          style={styles.proceedButton}>
          <Text style={styles.proceedButtonText}>
            PROCEED</Text>
        </TouchableOpacity>
      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: '#DDDDDD',
  },
  mainContainer: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // borderBottomRightRadius: 0,
    // borderBottomLeftRadius: 0,
    // borderBottomEndRadius: 0
    // height: 850,
    // paddingTop: 15
  },

  accordionCardLoanType: {
    backgroundColor: '#DDDDDD',
    marginTop: 20,
    marginVertical: 1,
    marginHorizontal: 12,
    borderRadius: 10,
    shadowColor: '#999999',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
  },
  accordionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333333',
  },
  subText: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 10,
  },
  accordionCard: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginVertical: 1,
    marginHorizontal: 12,
    borderRadius: 10,
    shadowColor: '#999999',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
  },

  recommendedSection: {
    marginVertical: 10,
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 14,
  },
  cardContainer: {
    // marginHorizontal: 12,
  },
  paycard: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logos: {
    width: 150,
    height: 60,
  },
  verticalBar: {
    marginLeft: 10,
    width: 2,
    height: 100,
    backgroundColor: '#999999',
  },
  neftcard: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  qrText: {
    fontSize: 10,
    color: 'gray',
  },
  paymentOptions: {
    margin: 13,
    backgroundColor: '#DDDDDD',

  },
  paymentOptionsCards: {
    width: 80,
    height: 40,
    // padding: 10,
    marginHorizontal: 8,
  },
  iconRow: {
    flexDirection: 'row',
    marginTop: 10,
    // justifyContent: 'space-between',
    // marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C3D600',
    borderRadius: 5,
    padding: 8,
    margin: 12,
  },
  bankCard: {
    padding: 16,
    marginBottom: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  label: {
    color: '#666666',
    fontSize: 14,
    paddingRight: 50,
  },
  value: {
    color: '#333333',
    fontSize: 16,
    // fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 15,
    // paddingBottom: 10,
    backgroundColor: '#F5F0EB',
  },
  cancelButton: {
    // flex: 1,
    width: 180,
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
    width: 180,
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

export default PaymentOptions;
