import 'react-native'
import React from 'react'
import Options from '../app/components/Options'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
    const tree = renderer.create(
        <Options />
    ).toJSON()
    expect(tree).toMatchSnapshot()
})