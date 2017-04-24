import React, {Component} from 'react'
import {
	Text,
	View
} from 'react-native'
import CompStyles from './comp_styles'

export default class Options extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={CompStyles.optionCard}>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}