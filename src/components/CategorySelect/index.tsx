import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';

import { categories } from '../../utils/categories';
import { Category } from '../Category';

type CategorySelectProps = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckbox?: boolean;
};

export function CategorySelect({ categorySelected, setCategory, hasCheckbox = false }: CategorySelectProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category
            key={category.id}
            icon={category.icon}
            title={category.title}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
            hasCheckbox={hasCheckbox}
          />
        ))
      }
    </ScrollView>
  );
}
