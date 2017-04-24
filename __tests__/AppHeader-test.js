import 'react-native'
import React from 'react'
import AppHeader from '../app/components/AppHeader'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
    const tree = renderer.create(
        <AppHeader />
    ).toJSON()
    expect(tree).toMatchSnapshot()
})