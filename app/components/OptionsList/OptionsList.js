import React, {Component} from 'react'
import {
	Text,
	View,
    ListView
} from 'react-native'
import CompStyles from './comp_styles'
import Options from '../Options'

export default class OptionsList extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.splitOptions(this.props.selectOptions))
        };
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderOptions.bind(this)}
                />
            </View>
        )
    }

    splitOptions(data) {
        let returnData = [], tempArrayElement=[]
        for(let i=0, len=data.length; i<len; i++) {
            if ((i+1)%2 != 0) {
                tempArrayElement.push(data[i])
            } else {
                tempArrayElement.push(data[i])
                returnData.push(tempArrayElement)
                tempArrayElement = []
            }
        }
        console.log(returnData)
        return returnData
    }

    renderOptions(data) {
        return (
            <View style={CompStyles.optionContainer}>
                <View style={CompStyles.optionStyle}>
                    <Options
                        name={data[0].name}
                    />
                </View>
                <View style={CompStyles.optionStyle}>
                    <Options
                        name={data[1].name}
                    />
                </View>
            </View>
        )
    }
}