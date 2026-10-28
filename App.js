import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(7);   //this the the state variable and the function to update it. The initial value is 0.
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 28 }}>You pressed {count} times</Text>
      <Button
        title="Press me"
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
}