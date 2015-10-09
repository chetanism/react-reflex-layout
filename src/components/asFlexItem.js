/**
 * Created by chetanv on 07/10/15.
 */

import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import FlexItem from './FlexItem.js';

function asFlexItem() {
    return (ComposedComponent) => class extends Component {

        render() {
            const { order, flexGrow, flexShrink, flexBasis, ...others } = this.props;
            return (
                <FlexItem order={order} flexGrow={flexGrow} flexShrink={flexShrink} flexBasis={flexBasis}>
                    <ComposedComponent {...others}>
                        {this.props.children}
                    </ComposedComponent>
                </FlexItem>
            );
        }
    };
}

export default asFlexItem;
