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
          <p className="text-footer">Starkcet</p>
          <p className="text-footer">Starknode</p>
        </div>
        <div className="col-footer">
          <p className="text-bold text-footer">Contact us</p>
          <div className="icons-row-footer">
            <FaTwitter className="icon-footer" />
            <FaTelegram className="icon-footer" />
            <FaGithub className="icon-footer" />
          </div>
        </div>
      </div>
    );
  }
}
