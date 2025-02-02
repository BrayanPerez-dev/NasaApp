import { SafeAreaView, StyleSheet,  } from 'react-native';
import Home from './src/views/Home';
import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});
