/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DataContext } from '../store/GlobalState'
import Cookies from 'js-cookie'

function NavBar() {
  const router = useRouter()
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const isActive = (r) => {
    if (r === router.pathname) {
      // ↓＿入れないとレイアウトがずれる
      return " active"
    } else {
      return ""
    }
  }

  const handleLogout = () => {
    Cookies.remove('refreshtoken', { path: 'api/auth/accessToken' })
    localStorage.removeItem('firstLogin')
    dispatch({ type: 'AUTH', payload: {} })
    dispatch({ type: 'NOTIFY', payload: { success: 'Logged out' } })
  }

  const loggedRouter = () => {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          <img src={auth.user.avatar} alt={auth.user.avatar}
            style={{
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              transform: 'translateY(-3px)',
              marginRight: '3px'
            }} />
          {auth.user.name}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Profile</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" onClick={handleLogout}>Logout</a>
        </div>
      </li>
    )
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className='navbar-brand'>mernECsite </a>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link href="/cart">
              <a className={"nav-link" + isActive('/cart')}>
                <i className="fas fa-shopping-cart" aria-hidden='true'></i>Cart</a>
            </Link>
          </li>
          {
            Object.keys(auth).length === 0
              ? <li className="nav-item">
                <Link href="/signin">
                  <a className={"nav-link" + isActive('/signup')}>
                    <i className="far fa-user" aria-hidden='true'></i>Sign in</a>
                </Link>
              </li>
              : loggedRouter()
          }

        </ul>
      </div>
    </nav>
  )
}

export default NavBar
