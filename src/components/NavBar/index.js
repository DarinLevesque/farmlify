import React from 'react'
import Link from 'gatsby-link'
import {slide as Menu} from 'react-burger-menu'
import './menu.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  // This keeps state in sync with the opening/closing of the menu via the default
  // means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({menuOpen: state.isOpen});
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({menuOpen: false});
  }

  // This can be used to toggle the menu, e.g. when using a custom icon Tip: You
  // probably want to hide either/both default icons if using a custom icon See
  // https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    return (
      <div>
        <div className='is-hidden-desktop'>
          <Menu
            right
            isOpen={this.state.menuOpen}
            onStateChange={state => this.handleStateChange(state)}>
            <aside className='menu'>
              <p className='menu-label'>
                General</p>
              <ul className='menu-list'>
                <li>
                  <Link to='/' onClick={() => this.closeMenu()}>Home</Link>
                </li>
                <li>
                  <Link to='howitworks' onClick={() => this.closeMenu()}>How it Works</Link>
                </li>
              </ul>
              <p className='menu-label'>
                Administration
              </p>
              <ul className='menu-list'>
                <li>
                  <Link>Team Settings</Link>
                </li>
                <li>
                  <Link className='is-active'>Manage Your Team</Link>
                  <ul>
                    <li>
                      <Link>Members</Link>
                    </li>
                    <li>
                      <Link>Plugins</Link>
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
}

export default Navbar;
