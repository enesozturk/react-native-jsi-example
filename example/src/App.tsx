import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { multiplyA } from 'react-native-jsi-example';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  const handleGetResult = React.useCallback(() => {
    setResult(multiplyA());
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={handleGetResult}
      >
        <Text style={styles.buttonText}>Get Result</Text>
      </TouchableOpacity>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: 'rgb(0,64,221)',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
