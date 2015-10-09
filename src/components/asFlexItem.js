/**
 * Created by chetanv on 07/10/15.
 */

import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import FlexItem from './FlexItem.js';

function asFlexItem() {
    return (ComposedComponent) => class extends Component {

        static propTypes = {
            children: PropTypes.node,
        };

        static defaultProps = {
            children: null,
        };

        render() {
            const { order, flexGrow, flexShrink, flexBasis, flexItemClass, ...others } = this.props;
            return (
                <FlexItem order={order} flexGrow={flexGrow} flexShrink={flexShrink} flexBasis={flexBasis} flexItemClass={flexItemClass}>
                    <ComposedComponent {...others}>
                        {this.props.children}
                    </ComposedComponent>
                </FlexItem>
            );
        }
    };
}

export default asFlexItem;
