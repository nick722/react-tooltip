import React, {Component} from 'react';

import './App.css';
import Table from './components/Table';
import Table2 from './components/Table2';
import TablePopper from './components/TablePopper';
import ReactLightweightTooltip from './components/ReactLightweightTooltip';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Table/>
                <Table2/>
                <TablePopper/>
                <ReactLightweightTooltip/>
            </div>
        );
    }
}

export default App;
