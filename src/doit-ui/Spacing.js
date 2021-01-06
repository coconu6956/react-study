import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from './withStyles';
import { unit } from './Theme';

export const propTypes = {
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    vertical: PropTypes.number,
    horizontal: PropTypes.number,
};

class Spacing extends PureComponent {
    render() {
        const { children, top, left, right, bottom, vertical, horizontal } = this.props;

        const computedTop = top ? top : vertical;
        const computedBottom = bottom ? bottom : vertical;
        const computedLeft = left ? left : horizontal;
        const computedRight = right ? right : horizontal;

        const computedStyles = {
            flex: 1, //크기를 일정한 비율로 늘리는 데 도움을 줍니다.
            ...(computedTop && { marginTop: computedTop * unit }),
            ...(computedBottom && { marginBottom: computedBottom * unit }),
            ...(computedLeft && { marginLeft: computedLeft * unit }),
            ...(computedRight && { marginRight: computedRight * unit }),
        };
        
        return (
            <div {...css(computedStyles)}>
                {children}
            </div>
        );
    }
}

export default Spacing;