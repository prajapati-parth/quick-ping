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
            dataSource: ds.cloneWithRows(this.props.selectOptions),
        };
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={
                        (rowData) => <Options
                                        name={rowData.name}
                                    />
                    }
                />
            </View>
        )
    }
}