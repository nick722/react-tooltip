import React, { Component } from 'react';
import {Tooltip} from 'react-lightweight-tooltip';

export default class ReactLightweightTooltip extends Component {


    render () {
        return (
            <table>
                <tbody>
                <tr>
                    <td>ReactLightweightTooltip</td>
                    <td><Tooltip
                        className="tooltip"
                        content="Yes, the default one">Simple black tooltip</Tooltip></td>
                </tr>
                </tbody>

            </table>
        )
    }
}


<Tooltip content="Yes, the default one">Simple black tooltip</Tooltip>