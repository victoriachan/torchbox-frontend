// Vendor Modules
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import TeamListingPage from './standard'

storiesOf('Pages', module).add('Team Listing', () => {
  return <TeamListingPage title="Meet the team, [your swell digital pals]." />
})
