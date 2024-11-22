import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const assignments = [
  { id: "1", title: "Project A", description: "Design UI/UX for the client.", status: "In Progress" },
  { id: "2", title: "Project B", description: "Develop backend API for mobile app.", status: "Completed" },
  { id: "3", title: "Project C", description: "Setup CI/CD pipeline.", status: "Pending" },
  { id: "4", title: "Project D", description: "Create presentation slides.", status: "In Progress" },
];

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Assignment List</Text>
      <FlatList
        data={assignments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={[styles.status, styles[item.status.toLowerCase().replace(" ", "")]]}>
                {item.status}
              </Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("main")} style={styles.navButton}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("karyawan")} style={styles.navButton}>
          <Text style={styles.navText}>Karyawan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("project")} style={styles.navButton}>
          <Text style={styles.navText}>Project</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    textTransform: "capitalize",
  },
  completed: {
    backgroundColor: "#d4edda",
    color: "#155724",
  },
  inprogress: {
    backgroundColor: "#fff3cd",
    color: "#856404",
  },
  pending: {
    backgroundColor: "#f8d7da",
    color: "#721c24",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  navText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
  },
});
