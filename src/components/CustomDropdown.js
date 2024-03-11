import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {normalize, vh, vw} from '../util/dimenstions';
import Images from '../constants/Images';

const CustomDropDown = ({data, selectedItem, setSelectedItem}) => {
  const [isDropDownOpen, setisDropDownOpen] = useState(false);

  const onSelect = (selectedItem, index) => {
    setSelectedItem(selectedItem);
  };
  console.log('si', selectedItem);
  return (
    <View style={styles.container}>
      {/* <Text style={styles.label}>Selected Item: {selectedItem}</Text> */}
      <SelectDropdown
        // defaultValueByIndex={data?.length > 0 ? 0 : null}
        defaultValue={selectedItem}
        selectedRowStyle={{backgroundColor: 'lightgray'}}
        data={data}
        searchPlaceHolder={'hello'}
        onSelect={(selectedItem, index) => onSelect(selectedItem, index)}
        defaultButtonText="Select food"
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem?.title;
        }}
        rowTextForSelection={(item, index) => {
          return item?.title;
        }}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownButtonText}
        // searchInputStyle={{width:150,height:40}}
        renderDropdownIcon={() => {
          return (
            <View
              style={[
                styles.dropdownIcon,
                {transform: [{rotate: isDropDownOpen ? '180deg' : '0deg'}]},
              ]}>
              <Image source={Images.down_Arrow} />
            </View>
          );
        }}
        onFocus={() => setisDropDownOpen(true)}
        onBlur={() => setisDropDownOpen(false)}
        dropdownStyle={styles.dropdown}
        dropdownTextStyle={styles.dropdownText}
        rowStyle={{height: vh(40)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: vh(40),
  },
  label: {
    fontSize: 12,
    marginBottom: 10,
  },
  dropdownButton: {
    borderColor: '#D7D9DA',
    borderRadius: 5,
    width: '100%',
    flex: 1,
  },
  dropdownButtonText: {
    fontSize: normalize(14),
    color: '#333',
  },
  dropdownIcon: {
    alignSelf: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  dropdownIconText: {
    fontSize: normalize(18),
    color: '#555',
  },
  dropdown: {
    // position: 'absolute',
    // left: 15,
    // minWidth: vw(400),
    borderRadius: 5,
  },

  dropdownText: {
    fontSize: normalize(16),
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

export default CustomDropDown;
