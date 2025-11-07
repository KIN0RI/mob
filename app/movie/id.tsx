import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function MovieDetails() {
  const { title, year } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Released: {year}</Text>
      <Text style={styles.desc}>
        This is a sample description. You can add movie details here later.
      </Text>
      <Button title="Add to Favorites" onPress={() => alert(`${title} added to favorites!`)} />
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 15 },
  desc: { fontSize: 16, color: '#444', marginBottom: 20 },
});
