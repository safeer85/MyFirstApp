import { Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>You pressed</Text>
    </View>
  );
}