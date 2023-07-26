import React from 'react'
import { Provider } from "react-redux"
import { store } from "./store/store"
import { ReduxCounter } from "./ReduxCounter"

export const ReduxProvider = () => {
	return (
		<Provider store={store}>
			<h1>REDUX</h1>
			<ReduxCounter/>
		</Provider>
	)
}
