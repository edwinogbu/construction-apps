import React from 'react'
import { Outlet, Navigate, NavLink, Link } from 'react-router-dom'


const DashboardLayout = () => {
  return (
<div className="wrapper">
  {/* Navbar */}
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
  {/* /.navbar */}
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-bg-dark sidebar-color-primary shadow">
    <div className="brand-container">
      <a href="javascript:;" className="brand-link">
        <img src="./assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image opacity-80 shadow" />
        <span className="brand-text fw-light">AdminLTE 4</span>
      </a>
      <a className="pushmenu mx-1" data-lte-toggle="sidebar-mini" href="javascript:;" role="button"><i className="fas fa-angle-double-left" /></a>
    </div>
    {/* Sidebar */}
    <div className="sidebar">
      <nav className="mt-2">
        {/* Sidebar Menu */}
        <ul className="nav nav-pills nav-sidebar flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
          <li className="nav-item menu-open">
            <a href="javascript:;" className="nav-link active">
              <i className="nav-icon fas fa-circle" />
              <p>
                Dashboard
                <i className="end fas fa-angle-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./index.html" className="nav-link active">
                  <i className="nav-icon far fa-circle" />
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index2.html" className="nav-link ">
                  <i className="nav-icon far fa-circle" />
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index3.html" className="nav-link ">
                  <i className="nav-icon far fa-circle" />
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item ">
            <a href="javascript:;" className="nav-link ">
              <i className="nav-icon fas fa-circle" />
              <p>
                Widgets
                <i className="end fas fa-angle-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./pages/widgets/small-box.html" className="nav-link ">
                  <i className="nav-icon far fa-circle" />
                  <p>Small Box</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./pages/widgets/info-box.html" className="nav-link ">
                  <i className="nav-icon far fa-circle" />
                  <p>info Box</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./pages/widgets/cards.html" className="nav-link ">
                  <i className="nav-icon far fa-circle" />
                  <p>Cards</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item ">
            <a href="javascript:;" className="nav-link ">
              <i className="nav-icon fas fa-circle" />
              <p>
                Layout Options
                <span className="badge bg-info float-end me-3">6</span>
                <i className="end fas fa-angle-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./pages/layout/fixed-sidebar.html" className="nav-link ">
                  <i className="nav-icon far fa-circle" />
                  <p>Fixed Sidebar</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item ">
            <a href="javascript:;" className="nav-link ">
              <i className="nav-icon fas fa-circle" />
              <p>
                Forms
                <i className="end fas fa-angle-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./pages/forms/general.html" className="nav-link ">
                  <i className="nav-icon far fa-circle" />
                  <p>General Elements</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item ">
            <a href="javascript:;" className="nav-link ">
              <i className="nav-icon fas fa-circle" />
              <p>
                Tables
                <i className="end fas fa-angle-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./pages/tables/simple.html" className="nav-link ">
                  <i className="nav-icon far fa-circle" />
                  <p>Simple Tables</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">MULTI LEVEL EXAMPLE</li>
          <li className="nav-item">
            <a href="javascript:;" className="nav-link">
              <i className="nav-icon fas fa-circle" />
              <p>Level 1</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="javascript:;" className="nav-link">
              <i className="nav-icon fas fa-circle" />
              <p>
                Level 1
                <i className="end fas fa-angle-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="javascript:;" className="nav-link">
                  <i className="nav-icon far fa-circle" />
                  <p>Level 2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="javascript:;" className="nav-link">
                  <i className="nav-icon far fa-circle" />
                  <p>
                    Level 2
                    <i className="end fas fa-angle-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="javascript:;" className="nav-link">
                      <i className="nav-icon far fa-dot-circle" />
                      <p>Level 3</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:;" className="nav-link">
                      <i className="nav-icon far fa-dot-circle" />
                      <p>Level 3</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:;" className="nav-link">
                      <i className="nav-icon far fa-dot-circle" />
                      <p>Level 3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="javascript:;" className="nav-link">
                  <i className="nav-icon far fa-circle" />
                  <p>Level 2</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="javascript:;" className="nav-link">
              <i className="nav-icon fas fa-circle" />
              <p>Level 1</p>
            </a>
          </li>
          <li className="nav-header">LABELS</li>
          <li className="nav-item">
            <a href="javascript:;" className="nav-link">
              <i className="nav-icon far fa-circle text-danger" />
              <p className="text">Important</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="javascript:;" className="nav-link">
              <i className="nav-icon far fa-circle text-warning" />
              <p>Warning</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="javascript:;" className="nav-link">
              <i className="nav-icon far fa-circle text-info" />
              <p>Informational</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    {/* /.sidebar */}
  </aside>
  {/* Main content */}
  <main className="content-wrapper">
     <Outlet />
  </main>
  {/* /.content-wrapper */}
  {/* Main Footer */}
  <footer className="main-footer">
    {/* To the end */}
    <div className="float-end d-none d-sm-inline">
      Anything you want
    </div>
    {/* Default to the start */}
    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  </footer>
</div>


  )
}

export default DashboardLayout