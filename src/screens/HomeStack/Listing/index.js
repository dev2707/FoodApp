import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Images from '../../../constants/Images';
import RoutePaths from '../../../Navigations/RoutePaths';

const Listing = ({navigation}) => {
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

  const renderFoodCard = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          height: 80,
          backgroundColor: '#f2f1f7',
          margin: 10,
          borderRadius: 5,
          flexDirection: 'row',
        }}
        onPress={() => navigation.navigate(RoutePaths.WeekFood)}>
        <Image
          source={item.img}
          style={{
            width: 110,
            height: 70,
            margin: 5,
            borderRadius: 5,
            resizeMode: 'contain',
          }}
        />
        <View style={{flex: 1}}>
          <Text>{item.title}</Text>
          <Text>{item.subtitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderFoodCard}
      />
    </View>
  );
};

export default Listing;
