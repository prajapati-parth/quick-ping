import {StyleSheet} from 'react-native'
import GlobStyles from '../../config/styles'

const CompStyles = StyleSheet.create({
    headerContainer: {
        height: GlobStyles.toolbarHeight,
        backgroundColor: GlobStyles.primary,
        padding: GlobStyles.boundaryPadding,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: GlobStyles.elevationForShadow
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: GlobStyles.titleFontSize
    }
})

export default CompStyles