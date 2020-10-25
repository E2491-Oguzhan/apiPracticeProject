import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import {Button, RestaurantCard} from './components';

const Main = (props) => {
  // PROMISE STRUCTURE
  {
    /**
      const fetchDataThen = () => {
      let myData = [];

      console.log('starting then fetch..');

      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          console.log(response);
          myData = response.data;
        });

      console.log(myData);
      console.log('ending then fetch..');
    };
 
  */
  }
  {
    /**   
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  */
  }
  {
    /**
    const fetchDataAwait = async () => {
    console.log('Starting await fetch..');

    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );

    console.log(response);
    console.log('ending await fetch');
  };

*/
  }
  {
    /**
     const [userData, setUserData] = useState([]);

  const fetchData_Then = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => {
      setUserData(data);
    });
  };

  const fetchData_Await = async () => {
    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    setUserData(data);
  };
*/
  }

  {
    /** PROMISE EXAMPLE
    function promiseFunction(number) {
    return new Promise((resolve, reject) => {
      if (number > 5) {
        resolve('Sayı beşten büyük.');
      } else {
        reject('Sayı beşten küçük..');
      }
    });
  }

  const checkNumber = () => {
    promiseFunction(6)
      .then((response) => {
        console.log('response ');
        console.log(response);
      })
      .catch((error) => {
        console.log('error: ');
        console.log(error);
      });
  };
*/
  }
  const [isLoading, setLoading] = useState(false);

  const [restaurantData, setRestaurantData] = useState([]);

  // ASYNC - AWAIT
  const fetchRestaurant = async () => {
    setLoading(true);

    const response = await axios.get(
      'https://random-data-api.com/api/restaurant/random_restaurant',
    );

    setRestaurantData(response.data);
    setLoading(false);
  };

  {
    /** THEN-CATCH
      const fetchRestaurant = () => {
    setLoading(true);
    axios
      .get('https://random-data-api.com/api/restaurant/random_restaurant')
      .then((response) => {
        setRestaurantData(response.data);
        setLoading(false);
      });
    alert('Veriler Yükleniyor');
  }; 
  */
  }

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <View style={{flex: 1}}>
      {/* <Button title="Fetch Data With Then" onPress={fetchData_Then} /> */}

      {/* <Button title="Fetch Data With Await" onPress={fetchData_Await} /> */}

      {/* <Button title="Check Number" onPress={checkNumber} /> */}

      {/* <FlatList
        data={userData}
        renderItem={({item}) => <Text>{item.name}</Text>}
      /> */}
      <ScrollView>
        {isLoading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <RestaurantCard item={restaurantData} />
        )}

        <Button
          title="Suggets new restruant"
          onNewRequest={() => fetchRestaurant()}
        />
      </ScrollView>
    </View>
  );
};

export default Main;
