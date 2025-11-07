import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: '#E50914',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home'; // default

          if (route.name === 'index') iconName = 'home';
          else if (route.name === 'favorites') iconName = 'heart';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Home', headerTitle: 'Movie Hub' }}
      />
      <Tabs.Screen
        name="favorites"
        options={{ title: 'Favorites', headerTitle: 'My Favorites' }}
      />
    </Tabs>
  );
}
