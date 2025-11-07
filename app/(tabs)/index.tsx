import { Link } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const movies = [
  { id: '1', title: 'Inception', year: '2010' },
  { id: '2', title: 'Interstellar', year: '2014' },
  { id: '3', title: 'Avengers: Endgame', year: '2019' },
  { id: '4', title: 'The Batman', year: '2022' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎬 Movie Hub</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: '/movie/id', params: { id: item.id, title: item.title, year: item.year } }}
            asChild
          >
            <TouchableOpacity style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.year}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
});
