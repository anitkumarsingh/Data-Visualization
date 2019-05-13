import React from 'react';
import QueueAnim from 'rc-queue-anim';
import SortingSelecting from './SortingSelecting';

const Page = () => (
  <div className="container container-mw-xl chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1" className="article__section"><SortingSelecting /></div>
    </QueueAnim>
  </div>
);

export default Page;
