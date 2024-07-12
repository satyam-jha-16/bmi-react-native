import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BMIGraphProps {
  bmi: number;
}

const BMIGraph: React.FC<BMIGraphProps> = ({ bmi }) => {
  const categories = [
    { name: 'Underweight', max: 18.5, color: '#64B5F6' },
    { name: 'Normal', max: 25, color: '#81C784' },
    { name: 'Overweight', max: 30, color: '#FFD54F' },
    { name: 'Obese', max: 40, color: '#E57373' },
  ];

  const getPosition = (bmi: number) => {
    const totalWidth = 300; // total width of the graph
    const maxBMI = 40; // maximum BMI value on the graph
    return (bmi / maxBMI) * totalWidth;
  };

  return (
    <View style={styles.container}>
      <View style={styles.graph}>
        {categories.map((category, index) => (
          <View
            key={index}
            style={[
              styles.bar,
              { 
                backgroundColor: category.color,
                flex: category.max - (index > 0 ? categories[index - 1].max : 0)
              }
            ]}
          >
            <Text style={styles.categoryText}>{category.name}</Text>
          </View>
        ))}
      </View>
      <View style={[styles.pointer, { left: getPosition(bmi) }]} />
      <View style={styles.labelContainer}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  graph: {
    flexDirection: 'row',
    height: 40,
    width: 300,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  pointer: {
    width: 2,
    height: 50,
    backgroundColor: '#000',
    position: 'absolute',
    top: -5,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginTop: 5,
  },
  label: {
    color: '#fff',
    fontSize: 12,
  },
});

export default BMIGraph;