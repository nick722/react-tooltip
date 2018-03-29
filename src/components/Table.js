import React, { Component } from 'react';

import MyTooltip from './Tooltip';

/**
 * https://reactstrap.github.io/components/tooltips/
 */

export default class Table extends Component {


    render () {
        return (
            <table>
                <tbody>
                <tr>
                    <td id="TooltipExample">
                        Reactstrap tooltip</td>
                    <td>2</td>
                </tr>
                </tbody>

            </table>
        )
    }
}


