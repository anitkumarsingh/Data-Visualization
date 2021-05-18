import React from 'react';
import Table from '../../Component/data-tables/';
import LineChart from '../../Component/chart/line';
import showStatus from '../../Utility/index';

const Home = () => {
  return (
    <div className="network-status">
      {showStatus ? (
        <React.Fragment>
          <LineChart />
          <Table />
        </React.Fragment>
      ) : (
        ''
      )}
    </div>
  );
};
export default Home;
