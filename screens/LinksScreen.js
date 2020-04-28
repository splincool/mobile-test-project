import React, {useState, lazy, Suspense} from 'react';
import { 
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TextInput
} from 'react-native';
import Colors from '../constants/Colors';
import { padding } from '../constants/Variables';

import {TopMenu} from '../components/TopMenu/TopMenu'
import MobxExample from '../components/MobxExample'
const LazyComponent = lazy(() => import('../components/LazyComponent'));


export default function LinksScreen(props) {
  const [apiData, setApiData] = useState(['empty'])
  const [loading, setLoading] = useState(false)
  const [showLazy, setShowLazy] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const getDataHandler = () => {
    setLoading(true)
    try {
      fetch('http://hybrid-clientapi-altenar-dev.biahosted.com/Sportsbook/GetTopSports?timezoneOffset=-180&langId=1&skinName=default&configId=1&culture=en&countryCode=RU&deviceType=Desktop&numformat=en&topSportType=upcoming')
      .then((response) => response.json())
      .then((responseJson) => {
        setApiData(responseJson.Result)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  const goTo = () => {
    console.log(inputValue)
    props.navigation.navigate('ExamplePage', {
      value: inputValue
    })
  }

  const handleSportPress = (sportName) => {
    console.log(sportName)
    props.navigation.navigate('ExamplePage', {
      value: sportName
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.btnBlock}>
        <Button
          style={styles.btn}
          title={'Get Top Menu Data'} 
          onPress={() => getDataHandler()}
        />
      </View>
      <View>
        { loading ? <ActivityIndicator size="large"/> 
                  : (apiData && <TopMenu menuDate={apiData} handleSportPress={handleSportPress}/>)}
      </View>


      <View style={styles.lazyComponentBlock}>
        <Button 
          title="Show lazy component"
          onPress={() => setShowLazy(true)}
        />
        {
          showLazy &&  
          <Suspense fallback={<Text>Loading</Text>}>
            <LazyComponent />
          </Suspense>
        }
      </View>

      <View style={styles.routerExampleBlock}>
        <TextInput
          placeholder="Type here"
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />
        <Button title="Go to page" onPress={() => goTo()}/>
      </View>

      <MobxExample style={styles.storeExampleBlock} />


    </ScrollView>
  )
}

LinksScreen.navigationOptions = {
  title: 'Sportsbook'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  menuItem: {
    color: Colors.menuItemColor,
    paddingRight: padding.md
  },
  btnBlock: {
    paddingBottom: padding.md
  },
  lazyComponentBlock: {
    flex: 1,
    alignItems: 'center',
    paddingTop: padding.lg
  },
  routerExampleBlock: {
    paddingTop: padding.lg,
    flex: 1,
    alignItems: 'center',
  }
});
