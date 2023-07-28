import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigationbar from './Navigationbar'
import { Provider } from 'react-redux'
import store from '../Store/store'

const Rootlayout = () => {
  return (
    <Provider store={store}>
      <Navigationbar />
      <main>
        <Outlet />
      </main>
    </Provider>
  )
}

export default Rootlayout
