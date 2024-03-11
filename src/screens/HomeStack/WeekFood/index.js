import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Images from '../../../constants/Images';
import CustomDropDown from '../../../components/CustomDropdown';
import {_doLogout} from '../../../store/auth/auth.actions';

const WeekFood = ({navigation}) => {
  const [days, setDays] = useState();
  const [selectedItem, setselectedItem] = useState();
  const [selectedndex, setselectedndex] = useState();
  const dispatch = useDispatch();

  const _handleButtonClick = (item, routePath) => {
    console.log(item);
    console.log(routePath);
    navigation.navigate(routePath, {item: item});
  };

  const data = [
    {
      title: 'Indian Food',
      subtitle:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      img: Images.food_1,
    },
    {
      title: 'Pakistani Food',
      subtitle:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      img: Images.food_2,
    },
    {
      title: 'China Food',
      subtitle:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      img: Images.food_3,
    },
    {
      title: 'Italy Food',
      subtitle:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      img: Images.food_4,
    },
    {
      title: 'Japan Food',
      subtitle:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      img: Images.food_5,
    },
    {
      title: 'Korea Food',
      subtitle:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      img: Images.food_6,
    },
    {
      title: 'Thailand Food',
      subtitle:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      img: Images.food_7,
    },
  ];

  useEffect(() => {
    var next7DaysArray = getNext7Days();
    setDays(next7DaysArray);
  }, []);

  //  get the next 7 days from the current date

  function getNext7Days() {
    var next7Days = [];
    var currentDate = new Date();

    for (var i = 0; i < 7; i++) {
      var nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      var dayName = nextDate.toLocaleDateString('en-US', {weekday: 'long'});
      var formattedDate =
        ('0' + nextDate.getDate()).slice(-2) +
        '-' +
        ('0' + (nextDate.getMonth() + 1)).slice(-2) +
        '-' +
        nextDate.getFullYear();
      next7Days.push({date: formattedDate, day: dayName});
    }

    return next7Days;
  }

  const renderFoodCard = ({item, index}) => {
    return (
      <View
        style={{
          height: 60,
          backgroundColor: '#f2f1f7',
          margin: 10,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View>
          <Text>{item?.day}</Text>
          <Text style={{fontSize: 12}}>{item?.date}</Text>
        </View>

        <View style={{width: 150, height: 30}}>
          <CustomDropDown
            data={data} // Pass food data for the current day
            selectedItem={selectedItem}
            setSelectedItem={setselectedItem}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF', margin: 10}}>
      <Text style={{fontSize: 20, fontWeight: '700'}}>
        Select your weekly Food
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={days}
        renderItem={renderFoodCard}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#f15b5d',
          alignSelf: 'center',
          height: 40,
          width: 150,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          dispatch(_doLogout());
        }}>
        <Text style={{fontSize: 18, fontWeight: '500', color: '#FFF'}}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WeekFood;
