import {StyleSheet} from 'react-native'
import GlobStyles from '../../config/styles'

const CompStyles = StyleSheet.create({
    optionCard: {
        backgroundColor: '#FFFFFF',
        elevation: GlobStyles.elevationForShadow,
        paddingTop: GlobStyles.boundaryPadding*2,
        paddingBottom: GlobStyles.boundaryPadding*2,
        paddingLeft: GlobStyles.boundaryPadding*2,
        paddingRight: GlobStyles.boundaryPadding*2
    }
})

export default CompStyles