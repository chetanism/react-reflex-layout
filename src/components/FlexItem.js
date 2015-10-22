/**
 * Created by chetanv on 07/10/15.
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classNames';

class FlexItem extends Component {

    static propTypes = {

        flexItemClass: PropTypes.string,

        children: PropTypes.node.isRequired,

        order: PropTypes.number,
        flexGrow: PropTypes.number,
        flexShrink: PropTypes.number,
        flexBasis: function flexBasis(props, propName, componentName) {
            const val = props[propName];

            if (val === undefined || val === 'auto') {
                return null;
            }

            const intVal = parseInt(val, 10);

            if (isNaN(intVal) || intVal < 0) {
                return new Error(`Invalid flexBasis given: ${val} for component: ${componentName}`);
            }

            return null;
        },
    };

    static defaultProps = {
        flexItemClass: '',

        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 'auto',
    };

    buildStyle() {
        const style = {
            position: 'relative',
        };

        if (this.props.order) {
            style.order = this.props.order;
        }

        if (this.props.flexGrow && this.props.flexGrow >= 0) {
            style.flexGrow = this.props.flexGrow;
        }

        if (this.props.flexShrink && this.props.flexShrink >= 0) {
            style.flexShrink = this.props.flexShrink;
        }

        if (this.props.flexBasis) {
            let val = this.props.flexBasis;

            if (val !== 'auto') {
                const intVal = parseInt(val, 10);

                if (val.indexOf('%') > -1) {
                    val = `${intVal}%`;
                } else {
                    val = `${intVal}px`;
                }

                style.flexBasis = val;
            }
        }

        return style;
    }

    render() {
        const style = this.buildStyle();
        return (
            <div className={ classNames('FlexItem', this.props.flexItemClass) } style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default FlexItem;
