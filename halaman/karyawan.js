import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Data Dummy Karyawan
const employees = [
  { id: '1', name: 'John Doe', position: 'Software Engineer', status: 'Active' },
  { id: '2', name: 'Jane Smith', position: 'Project Manager', status: 'Active' },
  { id: '3', name: 'Michael Brown', position: 'UX Designer', status: 'On Leave' },
  { id: '4', name: 'Emily Davis', position: 'QA Tester', status: 'Inactive' },
];

// Komponen Item Karyawan
const EmployeeItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.header}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={[styles.status, styles[item.status.toLowerCase().replace(' ', '')]]}>
        {item.status}
      </Text>
    </View>
    <Text style={styles.position}>{item.position}</Text>
  </View>
);

export default function EmployeeList() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Employee List</Text>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EmployeeItem item={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    color: '#555',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    textTransform: 'capitalize',
  },
  active: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  inactive: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
  onleave: {
    backgroundColor: '#fff3cd',
    color: '#856404',
  },
});
