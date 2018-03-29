import React, {Component} from 'react';

import './App.css';
import Table from './components/Table';
import Table2 from './components/Table2';
import TablePopper from './components/TablePopper';
import ReactLightweightTooltip from './components/ReactLightweightTooltip';
import PopperExample from './components/PopperExample';
import ReactHintExample from './components/ReactHintExample';
import ReactPopup from './components/ReactPopup';


class App extends Component {
    render() {
        return (
            <div className="App">
                <ReactPopup />
                <ReactHintExample />
                <Table/>
                <Table2/>
                <TablePopper/>
                <PopperExample/>
                <ReactLightweightTooltip/>

            </div>
        );
    }
}

export default App;
