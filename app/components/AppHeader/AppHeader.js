import React, {Component} from 'react'
import {
	Text,
	View
} from 'react-native'
import CompStyles from './comp_styles'

export default class AppHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={CompStyles.headerContainer}>
                <Text style={CompStyles.headerText}>{this.props.titleText}</Text>
            </View>
        )
    }
}