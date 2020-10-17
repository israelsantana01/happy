import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

export default function Header({ title, showCancel = true }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBackToAppHomepage() {
    navigation.navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Text style={styles.back}>Voltar</Text>
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      { showCancel ? (
        <BorderlessButton onPress={handleGoBackToAppHomepage}>
          <Text style={styles.cancel}>Cancelar</Text>
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 44,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: '#8fa7b3',
    fontSize: 16,
  },

  back: {
    fontSize: 16,
    color: '#15b6d6',
  },

  cancel: {
    fontSize: 16,
    color: '#ff669d',
  }
});