import React,{useEffect,useState} from 'react';
import millify from "millify";
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { loadExchanges,loadCoins,loadGlobaldata, loadTrendingcoins } from '../redux/action';

const {Title} = Typography;

const Home = () => {
  const [totalCrypto,setTotalcrypto] = useState([]);
  const [totalExchanges,setTotalexchange] = useState([]);
  const [alldata,setAlldata] = useState([]);

  const {exchanges,cryptos,globaldata,trendcoins }= useSelector(state => state.data);
  // console.log(cryptos);
  try{
  console.log(globaldata.total_volume.inr)
  }catch(err){
    console.log(err);
  }
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(loadExchanges());
    dispatch(loadCoins());
    dispatch(loadGlobaldata());
    dispatch(loadTrendingcoins());
    setTotalcrypto(cryptos);
    setTotalexchange(exchanges);
    setAlldata(globaldata);
  },[],[cryptos])
  return (
    <>
    <Title level={2} className="heading">Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={cryptos.length} /></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={exchanges.length} /></Col>
      {/* <Col span={12}><Statistic title="Total Market Cap" value={millify(globaldata.total_market_cap.inr)} /></Col>
      <Col span={12}><Statistic title="Total Volume" value={millify(globaldata.total_volume.inr)} /></Col> */}
      <Col span={12}><Statistic title="Market" value={millify(globaldata.markets)} /></Col>
    </Row>
    <div className='home-heading-container'>
        <Title level={2} className="home-title">Trdending Cryptocurrencies</Title>
    </div>
    </>
  )
}

export default Home