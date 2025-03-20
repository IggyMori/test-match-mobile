import { StatusBar } from 'expo-status-bar';
import { Button,  Pressable,  StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Layout } from './components/Layout';
import { Content } from './components/Content';

export default function App() {
  return (
    <Layout>
    <Content />
    </Layout>
  );
}

