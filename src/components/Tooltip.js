import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Tooltip} from 'reactstrap';

export default class MyTooltip extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render () {
        return (
                        <Tooltip
                            placement="right"
                            isOpen={this.state.tooltipOpen}
                            target="TooltipExample"
                            toggle={this.toggle}
                        >
                            Reactstrap tooltip
                        </Tooltip>
        )
    }
}
