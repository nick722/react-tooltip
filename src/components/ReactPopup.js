import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Popup from 'react-popup';

/**
 * https://www.npmjs.com/package/react-popup
 */

export default class ReactPopup extends Component {


    render () {
        return (
            <table>
                <tbody>
                <tr>
                    <td>ReactPopup</td>
                    <Popup />
                </tr>
                </tbody>

            </table>
        )
    }
}

Popup.alert('Hello');