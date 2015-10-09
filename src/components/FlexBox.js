/**
 * Created by chetanv on 07/10/15.
 */

import React, { PropTypes, Component } from 'react';

import classNames from 'classNames';

class FlexBox extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,

        inline: PropTypes.bool,
        flexBoxClass: PropTypes.string,

        flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']).isRequired,
        flexWrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
        justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
        alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
        alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),
    };

    static defaultProps = {
        inline: false,
        flexBoxClass: '',

        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent: 'space-around',

    };

    buildStyle() {
        const style = {
            flexDirection: this.props.flexDirection,
            flexWrap: this.props.flexWrap,
            justifyContent: this.props.justifyContent,
            alignItems: this.props.alignItems,
            alignContent: this.props.alignContent,
        };

        const { inline } = this.props;

        if (inline) {
            style.display = 'inline-flex';
        } else {
            style.display = 'flex';
        }

        return style;
    }

    render() {
        const style = this.buildStyle();
        return (
            <div
                className={ classNames('FlexBox', this.props.flexBoxClass) }
                style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default FlexBox;
