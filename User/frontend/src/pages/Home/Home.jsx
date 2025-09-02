import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import DisplayMenu from '../../components/DisplayMenu/DisplayMenu'

const Home = () => {

  const [category,setCategory] = useState('all')
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <DisplayMenu category={category}/>
    </div>
  )
}

export default Home