import {StyleSheet} from 'react-native'
import GlobStyles from '../../config/styles'

const CompStyles = StyleSheet.create({
    optionCard: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        elevation: GlobStyles.elevationForShadow,
        paddingTop: GlobStyles.boundaryPadding*1.5,
        paddingBottom: GlobStyles.boundaryPadding*1.5,
        paddingLeft: GlobStyles.boundaryPadding,
        paddingRight: GlobStyles.boundaryPadding,
        borderRadius: 3
    }
})

export default CompStyles