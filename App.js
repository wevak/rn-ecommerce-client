import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./Main";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <Main />
      </Provider>
    </GestureHandlerRootView>
  );
}
