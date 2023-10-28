import React from 'react'
import Navbar from '../../components/layout-components/Navbar'
import Footer from '../../components/layout-components/footer'
import UserPreference from '../../components/user-components/UserPreference'

function UserProfile() {
  return (
    <>
    <Navbar/>
    <UserPreference/>
    <Footer />
    </>
  )
}

export default UserProfile;