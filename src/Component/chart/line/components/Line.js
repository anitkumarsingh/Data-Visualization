import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Line1 from './Line1';

const Page = () => (
  <div className="container no-breadcrumb container-mw-lg chapter">
    <article className="article">
      <h2 className="article-title">Graphical Representation</h2>
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1" className="mb-3">
          <Line1 />
        </div>
      </QueueAnim>
    </article>
  </div>
);

export default Page;
