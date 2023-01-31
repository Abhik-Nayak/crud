import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar, Exchanges, Home, Cryptocurrencies, News, Cryptodetails } from './components';
import "./App.css";
import { Layout, Space, Typography } from 'antd';

const App = () => {
  return (
    <div>
      <div className='app'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
              <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/exchanges"><Exchanges /></Route>
                <Route exact path="/cryptocurrencies"><Cryptocurrencies /></Route>
                <Route exact path="/crypto/:coinId"><Cryptodetails /></Route>
                <Route exact path="/news"><News /></Route>
              </Switch>
            </div>
          </Layout>
          <div className='footer' >
            <Typography.Title level={5} style={{ color: "white", textAlign: 'center' }}>
              CryptoShine<br /> All Rights Reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>

      {/* <Home/> */}
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/createUser" component={Createuser} />
          <Route path="/updateUser/:id" component={Updateuser} />
          </Switch>
        </Router> */}

    </div>
  )
}

export default App