/**
 * Created by chetanv on 07/10/15.
 */

import React, { PropTypes, Component } from 'react';
import classNames from 'classNames';

import DetectElementResize from 'detect-element-resize';

class FlexBox extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,

        inline: PropTypes.bool,
        flexBoxClass: PropTypes.string,

        flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
        flexWrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
        justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
        alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
        alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),

        fillHeight: PropTypes.bool,
    };

    static defaultProps = {
        inline: false,
        flexBoxClass: '',

        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent: 'space-around',

        fillHeight: false,
    };

    state = {
        height: 'auto',
    };

    componentDidMount() {
        this.updateParentResizeListener();
    }

    componentWillReceiveProps() {
        this.updateParentResizeListener();
    }

    componentWillUnmount() {
        this.removeParentResizeListener();
    }

    parentResized() {
        const flexBox = this.refs.flexBox;
        const parent = flexBox.parentNode;
        const parentHeight = parent.clientHeight;
        this.setState({
            height: parentHeight + 'px' || 'auto',
        });
    }

    attachParentResizeListener() {
        const parent = this.refs.flexBox.parentNode;
        if (!this.parentResizeEventAttached) {
            DetectElementResize.addResizeListener(parent, this.parentResized.bind(this));
            this.parentResizeEventAttached = true;
        }
    }

    updateParentResizeListener() {
        if (
            this.props.fillHeight &&
            (
                this.props.flexDirection === 'column' ||
                this.props.flexDirection === 'rev-column'
            )
        ) {
            this.attachParentResizeListener();
        } else {
            this.removeParentResizeListener();
        }
    }

    removeParentResizeListener() {
        const parent = this.refs.flexBox.parentNode;
        if (this.parentResizeEventAttached) {
            DetectElementResize.removeResizeListener(parent, this.parentResized);
            this.parentResizeEventAttached = false;
            this.setState({
                height: 'auto',
            });
        }
    }

    parentResizeEventAttached = false;

    buildStyle() {
        const style = {
            flexDirection: this.props.flexDirection,
            flexWrap: this.props.flexWrap,
            justifyContent: this.props.justifyContent,
            alignItems: this.props.alignItems,
            alignContent: this.props.alignContent,

            height: this.state.height,
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
            <div ref={'flexBox'}
                className={ classNames('FlexBox', this.props.flexBoxClass) }
                style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default FlexBox;
