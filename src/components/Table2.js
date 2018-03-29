import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

/**
 * https://react-bootstrap.github.io/components/tooltips/
 * @type {XML}
 */

const tooltip = (
    <Tooltip
        className='react-bootstrap-tooltip'
        id="tooltip">
        <strong>Holy guacamole!</strong> Check this info.
    </Tooltip>
);

export default class Table2 extends Component {


    render () {
        return (
            <table>
                <tbody>
                <tr>
                    <OverlayTrigger placement="left" overlay={tooltip}>
                        <td bsStyle="default">React-bootstrap tooltip</td>
                    </OverlayTrigger>
                    <td>3</td>
                    <td>4</td>
                </tr>
                </tbody>

            </table>
        )
    }
}


