import React, {Component} from 'react'
import {
	Text,
	View
} from 'react-native'

export default class Options extends React {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}