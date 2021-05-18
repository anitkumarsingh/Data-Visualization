import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Layout, Icon } from 'antd';

const { Footer } = Layout;
const date = new Date();
const year = date.getFullYear();

const Footers = () => (
  <Footer className="app-footer bg-white">
    <div className="footer-inner-v2">
      <ul className="footer-social-list">
        <li>
          <a
            href="https://github.com/anitkumarsingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/anit-kumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://anitkumar-portfolio.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="link" />
          </a>
        </li>
        <li>
          <a href="/">
            <Icon type="codepen-circle" />
          </a>
        </li>
      </ul>
      <div className="footer-copyright">
        <span>© {year}, Design & Developed By Anit Kumar </span>
      </div>
    </div>
  </Footer>
);

const Page = () => {
  return (
    <div>
      <QueueAnim type="bottom" className="ui-animate">
        <div key="2">
          <Footers />
        </div>
      </QueueAnim>
    </div>
  );
};

export default Page;
