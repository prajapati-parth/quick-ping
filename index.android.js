import React, { Component } from 'react'
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	StatusBar
} from 'react-native'
import AppHeader from './app/components/AppHeader'
import OptionsList from './app/components/OptionsList'

import GlobStyles from './app/config/styles'
import GlobStrings from './app/config/strings'

import SelectOptions from './app/config/options'

export default class quickping extends Component {
	render() {
		return (
			<View>
				<StatusBar
					backgroundColor={GlobStyles.primary_dark5}
					barStyle="light-content"
				/>
				<AppHeader
					titleText={GlobStrings.appName_upperCamel}
				></AppHeader>
				<OptionsList
					selectOptions={SelectOptions}
				></OptionsList>
			</View>
		);
	}
}

AppRegistry.registerComponent('quickping', () => quickping);
