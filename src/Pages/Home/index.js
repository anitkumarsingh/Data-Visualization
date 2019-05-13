import React from 'react';
import Table from '../../Component/data-tables/';
import LineChart from '../../Component/chart/line';
// import Echart from '../Chart';
// import ApiChart from '../ApiChart';

const Home  = ()=>{
    return(
        <React.Fragment>
         <LineChart/>
         <Table/>
         {/* <Echart/>
         <ApiChart/> */}
        </React.Fragment>
       
    )
}
export default Home;