import {StyleSheet} from 'react-native'
import GlobStyles from '../../config/styles'

const CompStyles = StyleSheet.create({
    optionContainer: {
        flexDirection: 'row'
    },
    optionStyle: {
        flex: 1,
        margin: GlobStyles.boundaryPadding/2
    }
})

export default CompStyles