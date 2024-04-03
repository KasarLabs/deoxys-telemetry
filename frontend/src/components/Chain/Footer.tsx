import * as React from 'react';
import './Footer.css';
import kasarLogo from '../../assets/kasarLogo.png';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

export class Footer extends React.Component {
  public render() {
    return (
      <div className="main-footer">
        <div className="col-footer">
          <img className="img-footer" src={kasarLogo} />
          <p>©2023 KasarLabs. All Rights Reserved.</p>
        </div>
        <div className="col-footer">
          <p className="text-bold text-footer">Products</p>
          <p
            className="text-footer"
            onClick={() => window.open('https://starkcet.com/')}
          >
            Starkcet
          </p>
          <p
            className="text-footer"
            onClick={() => window.open('https://kasar.io/')}
          >
            Starknode
          </p>
        </div>
        <div className="col-footer">
          <p className="text-bold text-footer">Contact us</p>
          <div className="icons-row-footer">
            <FaTwitter
              onClick={() => window.open('https://twitter.com/kasarLabs')}
              className="icon-footer"
            />
            <FaTelegram
              onClick={() =>
                window.open('https://web.telegram.org/k/#@kasarlabs')
              }
              className="icon-footer"
            />
            <FaGithub
              onClick={() => window.open('https://github.com/KasarLabs')}
              className="icon-footer"
            />
          </div>
        </div>
      </div>
    );
  }
}
