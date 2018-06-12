import React from 'react'
import Link from 'gatsby-link'
import {slide as Menu} from 'react-burger-menu'
import './menu.css'

const NavBar = () => {
  return (
    <div>
      <div className='is-hidden-desktop'>
        <Menu right>
          <aside className='menu'>
            <p className='menu-label'>
              General</p>
            <ul className='menu-list'>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Customers</a>
              </li>
            </ul>
            <p className='menu-label'>
              Administration
            </p>
            <ul className='menu-list'>
              <li>
                <a>Team Settings</a>
              </li>
              <li>
                <a className='is-active'>Manage Your Team</a>
                <ul>
                  <li>
                    <a>Members</a>
                  </li>
                  <li>
                    <a>Plugins</a>
                  </li>
                  <li>
                    <a>Add a member</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Invitations</a>
              </li>
              <li>
                <a>Cloud Storage Environment Settings</a>
              </li>
              <li>
                <a>Authentication</a>
              </li>
            </ul>
            <p className='menu-label'>
              Transactions
            </p>
            <ul className='menu-list'>
              <li>
                <a>Payments</a>
              </li>
              <li>
                <a>Transfers</a>
              </li>
              <li>
                <a>Balance</a>
              </li>
            </ul>
          </aside>
        </Menu>
      </div>
      <nav className='navbar is-hidden-touch' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            Farmlify
          </Link>
          <button className='button navbar-burger' data-target='navMenu'>
            <span/>
            <span/>
            <span/>
          </button>
        </div>
        <div className='navbar-menu' id='navMenu'>
          <div className='navbar-start'>
            <Link className='navbar-item' to='/howitworks'>
              How it Works
            </Link>
            <Link className='navbar-item' to='/about'>
              About
            </Link>
            <Link className='navbar-item' to='/blog'>
              Blog
            </Link>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link className='button is-primary is-outlined' to='/contact'>
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
