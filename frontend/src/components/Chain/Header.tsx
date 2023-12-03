// Source code for the Substrate Telemetry Server.
// Copyright (C) 2023 Parity Technologies (UK) Ltd.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

import * as React from 'react';
import { Types, Maybe } from '../../common';
import { formatNumber, secondsWithPrecision } from '../../utils';
import { Tab, ChainDisplay } from './';
import { Tile, Ago } from '../';

import blockIcon from '../../icons/blockchain-icon.svg';
import finalizedIcon from '../../icons/distribute-icon.svg';
import blockTimeIcon from '../../icons/stopwatch-icon.svg';
import lastTimeIcon from '../../icons/timer.svg';
import deoxysImg from '../../assets/deoxys.png'


import './Header.css';

interface HeaderProps {
  best: Types.BlockNumber;
  finalized: Types.BlockNumber;
  blockTimestamp: Types.Timestamp;
  blockAverage: Maybe<Types.Milliseconds>;
  currentTab: ChainDisplay;
  setDisplay: (display: ChainDisplay) => void;
}

type ButtonId = 'nodes' | 'map' | 'stats' | 'params';

export class Header extends React.Component<HeaderProps, { pressedButton: ButtonId | null }> {
  public shouldComponentUpdate(nextProps: HeaderProps, nextState: any) {
    return (
      this.props.best !== nextProps.best ||
      this.props.finalized !== nextProps.finalized ||
      this.props.blockTimestamp !== nextProps.blockTimestamp ||
      this.props.blockAverage !== nextProps.blockAverage ||
      this.props.currentTab !== nextProps.currentTab ||
      this.state.pressedButton !== nextState.pressedButton // Add this line
    );
  }

  state = {
    pressedButton: 'nodes' as ButtonId, // Tracks the button currently pressed
  };

  // Event handler for button clicks
  handleButtonClick = (buttonId: ButtonId) => {
    this.setState({ pressedButton: buttonId });
  };
  public render() {
    const { best, finalized, blockTimestamp, blockAverage } = this.props;
    const { currentTab, setDisplay } = this.props;

    return (
      <div className="Header">
        <div className="Header-top-row">
          <div className="Image-row">
            <img
              src={deoxysImg}
              alt="Deoxys"
              className="ImageIcon"
            />
            <div className="Column-image">
              <p className='text-bold'>Deoxis</p>
              <p className='text-gray'>v0.1.0-alpha</p>
            </div>
          </div>
          <div className="Row-icons">
            <button className="button-outline" onClick={() => window.open('https://github.com/KasarLabs/deoxys')}>
              Github
            </button>
            <button className="button-outline" onClick={() => window.open('https://twitter.com/kasarlabs')}>
              Twitter
            </button>
            <button className="button-outline" onClick={() => window.open('https://deoxys-docs.kasar.io')}>
              Docs
            </button>
            <button className="button-outline" onClick={() => window.open('https://t.me/kasarlabs')}>
              Support
            </button>
          </div>
        </div>
        <div className="Header-row-first">

          <div className="Row-tiles">
            <Tile icon={blockIcon} title="Best Block">
              #{formatNumber(best)}
            </Tile>
            <Tile icon={finalizedIcon} title="Finalized Block">
              #{formatNumber(finalized)}
            </Tile>
            <Tile icon={lastTimeIcon} title="Average Time">
              {blockAverage == null
                ? '-'
                : secondsWithPrecision(blockAverage / 1000)}
            </Tile>
            <Tile icon={blockTimeIcon} title="Last Block">
              <Ago when={blockTimestamp} />
            </Tile>
          </div>

        </div>
        <div className="Header-row-second">

          <Tab
            text="Nodes"
            label="node"
            display="list"
            tab="node"
            current={currentTab}
            setDisplay={setDisplay}
          />
          <Tab
            text="Map"
            label="Map"
            display="map"
            tab="map"
            current={currentTab}
            setDisplay={setDisplay}
          />
          <Tab
            text="Stats"
            label="Stats"
            display="stats"
            tab="stats"
            current={currentTab}
            setDisplay={setDisplay}
          />
          <Tab
            text="Settings"
            label="Settings"
            display="settings"
            tab="settings"
            current={currentTab}
            setDisplay={setDisplay}
          />
        </div>
      </div>
    );
  }
}
