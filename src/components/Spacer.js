/**
 * Created by chetanv on 07/10/15.
 */

import React, { Component } from 'react';
import FlexItem from './FlexItem.js';

class Spacer extends Component {
    render() {
        return (
            <FlexItem {...this.props}>
                <div className="Spacer"></div>
            </FlexItem>
        );
    }
}

export default Spacer;
