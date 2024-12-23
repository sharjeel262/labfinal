import AsyncStorage from '@react-native-async-storage/async-storage';

export function useLocalStorage() {
  const setItem = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  const getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
      return null;
    }
  };

  const removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data from AsyncStorage:', error);
    }
  };

  return { setItem, getItem, removeItem };
}
