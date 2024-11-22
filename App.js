import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import main from "./halaman/main";
import karyawan from "./halaman/karyawan";
import project from "./halaman/project";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={main} options={{headerShown: false}}/>
        <Stack.Screen name="karyawan" component={karyawan} />
        <Stack.Screen name="project" component={project} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;