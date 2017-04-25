import React, {Component} from 'react'
import {
	Text,
	View,
    TouchableOpacity
} from 'react-native'
import CompStyles from './comp_styles'

export default class Options extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <TouchableOpacity 
                style={CompStyles.optionCard}
                activeOpacity={0.7}
                onPress={this._onOptionPressed}
            >
                <Text>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }

    _onOptionPressed() {

    }
}