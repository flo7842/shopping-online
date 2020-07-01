import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import App from './app/views/components'
import { AppContainer } from './app/views/containers/index'
import { store } from './app/lib/store'
import { addToCart } from "./app/lib/actions";

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

//store.dispatch(addToCart({name: 'citron'}, 2))

unsubscribe()

ReactDOM.render(
<Provider store={store}>
    <AppContainer />
</Provider>
, document.getElementById("root")
);