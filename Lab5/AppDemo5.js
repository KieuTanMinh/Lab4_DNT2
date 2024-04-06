import React from "react";
import { Text,View,Button } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import Dem from "./Dem";
const AppDemo5=()=>{
    return(
        <Provider store={store}>
            <Dem/>
        </Provider>
    );
}
export default AppDemo5;