import React from 'react';
import Table from '../../Component/data-tables/';
import LineChart from '../../Component/chart/line';

const Home  = ()=>{
    return(
        <React.Fragment>
         <LineChart/>
         <Table/>
        </React.Fragment>
    )
}
export default Home;