import 'react-native'
import React from 'react'
import OptionsList from '../app/components/OptionsList'
import SelectOptions from '../app/config/options'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
    const tree = renderer.create(
        <OptionsList
            selectOptions={SelectOptions}
        />
    ).toJSON()
    expect(tree).toMatchSnapshot()
})