import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function LazyComponent() {
  return (
    <View style={styles.lazyContainer}>
      <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            Lazy Component
          </Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  lazyContainer: {

  }
})