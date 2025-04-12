import React from 'react'

const DashboardHome = () => {
  return (
    <>
       <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <div className="fs-3">Dashboard</div>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-end">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-primary">
              <div className="inner">
                <h3>150</h3>
                <p>New Orders</p>
              </div>
              <div className="icon">
                <i className="inner-icon ion ion-bag" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>53<sup className="fs-5">%</sup></h3>
                <p>Bounce Rate</p>
              </div>
              <div className="icon">
                <i className="inner-icon ion ion-stats-bars" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>44</h3>
                <p>User Registrations</p>
              </div>
              <div className="icon">
                <i className="inner-icon ion ion-person-add" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>65</h3>
                <p>Unique Visitors</p>
              </div>
              <div className="icon">
                <i className="inner-icon ion ion-pie-graph" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
        </div>
        {/* /.row */}
        {/* Main row */}
        <div className="row">
          {/* Start col */}
          <div className="col-lg-7">
            {/* Custom tabs (Charts with tabs)*/}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-chart-pie me-1" />
                  Sales
                </h3>
                <div className="card-tools">
                  <ul className="nav nav-pills ms-auto">
                    <li className="nav-item">
                      <a className="nav-link active" href="#revenue-chart" data-bs-toggle="tab">Area</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#sales-chart" data-bs-toggle="tab">Donut</a>
                    </li>
                  </ul>
                </div>
              </div>{/* /.card-header */}
              <div className="card-body">
                <div className="tab-content p-0">
                  {/* Morris chart - Sales */}
                  <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
                    <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />
                  </div>
                  <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                    <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />
                  </div>
                </div>
              </div>{/* /.card-body */}
            </div>
            {/* /.card */}
            {/* DIRECT CHAT */}
            <div className="card direct-chat direct-chat-primary">
              <div className="card-header">
                <h3 className="card-title">Direct Chat</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge bg-primary">3</span>
                  <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" title="Contacts" data-lte-toggle="chat-pane">
                    <i className="fas fa-comments" />
                  </button>
                  <button type="button" className="btn btn-tool" data-lte-dismiss="card-remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                {/* Conversations are loaded here */}
                <div className="direct-chat-messages">
                  {/* Message. Default to the start */}
                  <div className="direct-chat-msg">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-start">Alexander Pierce</span>
                      <span className="direct-chat-timestamp float-end">23 Jan 2:00 pm</span>
                    </div>
                    {/* /.direct-chat-infos */}
                    <img className="direct-chat-img" src="./assets/img/user1-128x128.jpg" alt="message user image" />
                    {/* /.direct-chat-img */}
                    <div className="direct-chat-text">
                      Is this template really for free? That's unbelievable!
                    </div>
                    {/* /.direct-chat-text */}
                  </div>
                  {/* /.direct-chat-msg */}
                  {/* Message to the end */}
                  <div className="direct-chat-msg end">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-end">Sarah Bullock</span>
                      <span className="direct-chat-timestamp float-start">23 Jan 2:05 pm</span>
                    </div>
                    {/* /.direct-chat-infos */}
                    <img className="direct-chat-img" src="./assets/img/user3-128x128.jpg" alt="message user image" />
                    {/* /.direct-chat-img */}
                    <div className="direct-chat-text">
                      You better believe it!
                    </div>
                    {/* /.direct-chat-text */}
                  </div>
                  {/* /.direct-chat-msg */}
                  {/* Message. Default to the start */}
                  <div className="direct-chat-msg">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-start">Alexander Pierce</span>
                      <span className="direct-chat-timestamp float-end">23 Jan 5:37 pm</span>
                    </div>
                    {/* /.direct-chat-infos */}
                    <img className="direct-chat-img" src="./assets/img/user1-128x128.jpg" alt="message user image" />
                    {/* /.direct-chat-img */}
                    <div className="direct-chat-text">
                      Working with AdminLTE on a great new app! Wanna join?
                    </div>
                    {/* /.direct-chat-text */}
                  </div>
                  {/* /.direct-chat-msg */}
                  {/* Message to the end */}
                  <div className="direct-chat-msg end">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-end">Sarah Bullock</span>
                      <span className="direct-chat-timestamp float-start">23 Jan 6:10 pm</span>
                    </div>
                    {/* /.direct-chat-infos */}
                    <img className="direct-chat-img" src="./assets/img/user3-128x128.jpg" alt="message user image" />
                    {/* /.direct-chat-img */}
                    <div className="direct-chat-text">
                      I would love to.
                    </div>
                    {/* /.direct-chat-text */}
                  </div>
                  {/* /.direct-chat-msg */}
                </div>
                {/*/.direct-chat-messages*/}
                {/* Contacts are loaded here */}
                <div className="direct-chat-contacts">
                  <ul className="contacts-list">
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="./assets/img/user1-128x128.jpg" alt="User Avatar" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Count Dracula
                            <small className="contacts-list-date float-end">2/28/2015</small>
                          </span>
                          <span className="contacts-list-msg">How have you been? I was...</span>
                        </div>
                        {/* /.contacts-list-info */}
                      </a>
                    </li>
                    {/* End Contact Item */}
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="./assets/img/user7-128x128.jpg" alt="User Avatar" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Sarah Doe
                            <small className="contacts-list-date float-end">2/23/2015</small>
                          </span>
                          <span className="contacts-list-msg">I will be waiting for...</span>
                        </div>
                        {/* /.contacts-list-info */}
                      </a>
                    </li>
                    {/* End Contact Item */}
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="./assets/img/user3-128x128.jpg" alt="User Avatar" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Nadia Jolie
                            <small className="contacts-list-date float-end">2/20/2015</small>
                          </span>
                          <span className="contacts-list-msg">I'll call you back at...</span>
                        </div>
                        {/* /.contacts-list-info */}
                      </a>
                    </li>
                    {/* End Contact Item */}
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="./assets/img/user5-128x128.jpg" alt="User Avatar" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Nora S. Vans
                            <small className="contacts-list-date float-end">2/10/2015</small>
                          </span>
                          <span className="contacts-list-msg">Where is your new...</span>
                        </div>
                        {/* /.contacts-list-info */}
                      </a>
                    </li>
                    {/* End Contact Item */}
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="./assets/img/user6-128x128.jpg" alt="User Avatar" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            John K.
                            <small className="contacts-list-date float-end">1/27/2015</small>
                          </span>
                          <span className="contacts-list-msg">Can I take a look at...</span>
                        </div>
                        {/* /.contacts-list-info */}
                      </a>
                    </li>
                    {/* End Contact Item */}
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="./assets/img/user8-128x128.jpg" alt="User Avatar" />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Kenneth M.
                            <small className="contacts-list-date float-end">1/4/2015</small>
                          </span>
                          <span className="contacts-list-msg">Never mind I found...</span>
                        </div>
                        {/* /.contacts-list-info */}
                      </a>
                    </li>
                    {/* End Contact Item */}
                  </ul>
                  {/* /.contacts-list */}
                </div>
                {/* /.direct-chat-pane */}
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <form action="#" method="post">
                  <div className="input-group">
                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                    <span className="input-group-append">
                      <button type="button" className="btn btn-primary">Send</button>
                    </span>
                  </div>
                </form>
              </div>
              {/* /.card-footer*/}
            </div>
            {/*/.direct-chat */}
          </div>
          {/* /.Start col */}
        </div>
        {/* /.row (main row) */}
      </div>{/* /.container-fluid */}
    </div>
    </>
  )
}

export default DashboardHome