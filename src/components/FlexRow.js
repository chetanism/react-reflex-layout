/**
 * Created by chetanv on 07/10/15.
 */

import React, { PropTypes, Component } from 'react';
import FlexBox from './FlexBox.js';

import classNames from 'classNames';

class FlexRow extends Component {
    static propTypes = {
        flexBoxClass: PropTypes.string,

        reverse: PropTypes.bool,
        children: React.PropTypes.node.isRequired,
    };

    static defaultProps = {
        flexBoxClass: '',
        reverse: false,
    };

    render() {
        const { reverse, flexBoxClass, ...otherProps } = this.props;
        return (
            <FlexBox flexBoxClass={ classNames('FlexRow', flexBoxClass) } flexDirection={ reverse ? 'row-reverse' : 'row'} {...otherProps} >
                {this.props.children}
            </FlexBox>
        );
    }
}

export default FlexRow;
