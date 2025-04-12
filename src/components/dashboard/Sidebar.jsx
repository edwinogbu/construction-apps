import React from 'react'

const Sidebar = () => {
  return (
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
  )
}

export default Sidebar