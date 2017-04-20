import React, {Component} from 'react'
import {
	Text,
	View,
    StyleSheet,
    ToolbarAndroid
} from 'react-native'
import GlobStyles from '../../config/styles'
import GlobStrings from '../../config/strings'

export default class AppHeader extends Component {
    render() {
        return (
            <View>
                <ToolbarAndroid
                    title="quickping"
                    style={styles.headerStyle} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        height: 50,
        backgroundColor: '#F44336'
    }
})