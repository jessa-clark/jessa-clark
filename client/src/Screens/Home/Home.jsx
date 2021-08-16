import React from 'react'
import HomeProjects from '../../Components/HomeProjects/HomeProjects'
import MyLandingPage from '../../Components/Landing/Landing'
import Layout from '../../Components/Layout/Layout'

function Home() {
  return (
  <Layout>
    <MyLandingPage />
    <HomeProjects />
  </Layout>
  )
}

export default Home
