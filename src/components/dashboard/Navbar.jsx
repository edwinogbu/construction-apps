import React from 'react'

const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-light">
    <div className="container-fluid">
      {/* Start navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-lte-toggle="sidebar-full" href="#" role="button"><i className="fas fa-bars" /></a>
        </li>
        <li className="nav-item d-none d-md-block">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item d-none d-md-block">
          <a href="#" className="nav-link">Contact</a>
        </li>
      </ul>
      {/* End navbar links */}
      <ul className="navbar-nav ms-auto">
        {/* Navbar Search */}
        <li className="nav-item">
          <a className="nav-link" data-widget="navbar-search" href="#" role="button">
            <i className="fas fa-search" />
          </a>
        </li>
        {/* Messages Dropdown Menu */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-bs-toggle="dropdown" href="#">
            <i className="far fa-comments" />
            <span className="navbar-badge badge bg-danger">3</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
            <a href="#" className="dropdown-item">
              {/* Message Start */}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img src="./assets/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle me-3" />
                </div>
                <div className="flex-grow-1">
                  <h3 className="dropdown-item-title">
                    Brad Diesel
                    <span className="float-end fs-7 text-danger"><i className="fas fa-star" /></span>
                  </h3>
                  <p className="fs-7">Call me whenever you can...</p>
                  <p className="fs-7 text-muted"><i className="far fa-clock me-1" /> 4 Hours Ago</p>
                </div>
              </div>
              {/* Message End */}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              {/* Message Start */}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img src="./assets/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle me-3" />
                </div>
                <div className="flex-grow-1">
                  <h3 className="dropdown-item-title">
                    John Pierce
                    <span className="float-end fs-7 text-muted"><i className="fas fa-star" /></span>
                  </h3>
                  <p className="fs-7">I got your message bro</p>
                  <p className="fs-7 text-muted"><i className="far fa-clock me-1" /> 4 Hours Ago</p>
                </div>
              </div>
              {/* Message End */}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              {/* Message Start */}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img src="./assets/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle me-3" />
                </div>
                <div className="flex-grow-1">
                  <h3 className="dropdown-item-title">
                    Nora Silvester
                    <span className="float-end fs-7 text-warning"><i className="fas fa-star" /></span>
                  </h3>
                  <p className="fs-7">The subject goes here</p>
                  <p className="fs-7 text-muted"><i className="far fa-clock me-1" /> 4 Hours Ago</p>
                </div>
              </div>
              {/* Message End */}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
          </div>
        </li>
        {/* Notifications Dropdown Menu */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-bs-toggle="dropdown" href="#">
            <i className="far fa-bell" />
            <span className="navbar-badge badge bg-warning">15</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
            <span className="dropdown-item dropdown-header">15 Notifications</span>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-envelope me-2" /> 4 new messages
              <span className="float-end text-muted fs-7">3 mins</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-users me-2" /> 8 friend requests
              <span className="float-end text-muted fs-7">12 hours</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-file me-2" /> 3 new reports
              <span className="float-end text-muted fs-7">2 days</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
          </div>
        </li>
        <li className="nav-item dropdown user-menu">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <img src="./assets/img/user2-160x160.jpg" className="user-image img-circle shadow" alt="User Image" />
            <span className="d-none d-md-inline">Alexander Pierce</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
            {/* User image */}
            <li className="user-header bg-primary">
              <img src="./assets/img/user2-160x160.jpg" className="img-circle shadow" alt="User Image" />
              <p>
                Alexander Pierce - Web Developer
                <small>Member since Nov. 2012</small>
              </p>
            </li>
            {/* Menu Body */}
            <li className="user-body">
              <div className="row">
                <div className="col-4 text-center">
                  <a href="#">Followers</a>
                </div>
                <div className="col-4 text-center">
                  <a href="#">Sales</a>
                </div>
                <div className="col-4 text-center">
                  <a href="#">Friends</a>
                </div>
              </div>
              {/* /.row */}
            </li>
            {/* Menu Footer*/}
            <li className="user-footer">
              <a href="#" className="btn btn-default btn-flat">Profile</a>
              <a href="#" className="btn btn-default btn-flat float-end">Sign out</a>
            </li>
          </ul>
        </li>
        {/* TODO tackel in v4.1 */}
        {/* <li class="nav-item">
<a class="nav-link" data-widget="fullscreen" href="#" role="button">
  <i class="fas fa-expand-arrows-alt"></i>
</a>
    </li>
    <li class="nav-item">
<a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
  <i class="fas fa-th-large"></i>
</a>
    </li> */}
      </ul>
    </div>
  </nav>
  )
}

export default Navbar