import React, { Component } from 'react'
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native'
import AppHeader from './app/components/AppHeader'

export default class quickping extends Component {
	render() {
		return (
			<View>
				<AppHeader></AppHeader>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('quickping', () => quickping);
