// @flow
import React from 'react';
import { compose, getContext } from 'recompose';
import PropTypes from 'prop-types';


type Callback = (event: SyntheticEvent<*>) => any;

export type Context = {
  radius: string,
  centerRadius: string,
  centralAngle: number,
  polar: boolean, // eslint-disable-line react/no-unused-prop-types
};

type Props = {
  className: string,
  endAngle: number,
  contentHeight: string,
  onMouseOver: Callback,
  onMouseOut: Callback,
  onSelect: Callback,
  onFocus: Callback,
  onBlur: Callback,
  attrs: {},
  children: any,
} & Context;

export const propTypes = {
  radius: PropTypes.string,
  centerRadius: PropTypes.string,
  centralAngle: PropTypes.number,
  polar: PropTypes.bool,
};

export const itemTypes = {
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
  skew: PropTypes.number,
};





const Slice = ({
  className,
  radius,
  centerRadius,
  contentHeight = '2.4em',
  centralAngle,
  endAngle,
  onMouseOver,
  onMouseOut,
  onSelect,
  onFocus,
  onBlur,
  children,
  skew,
  polar,
  attrs = {},
}: Props) => {
  const styles = {
    ContentContainer: {
      position: 'absolute',
      width: '100%',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: `calc((${centralAngle > 90 ? '50% + ' : ''}${radius} - ${centerRadius}) / 2 - ${contentHeight} / 2)`
    },
    Content: {
      display: 'inline-block',
      transform: `rotate(${-endAngle}deg)`,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    },
    Container: {
      width: '200%',
      height: '200%',
      transformOrigin: '50% 50%',
      borderRadius: '50%',
      transform: `skew(${-skew}deg) rotate(${((polar ? 90 : centralAngle) / 2) - 90}deg)`,
      color: 'black',
      //border: '6px solid rgba(255, 255, 255, 0)',
      background: `radial-gradient(transparent ${centerRadius}, rgba(0, 0, 0, 0.67) ${centerRadius})`,
      outline: 'none'
    },
    ContainerHover: {
      width: '200%',
      height: '200%',
      transformOrigin: '50% 50%',
      borderRadius: '50%',
      transform: `skew(${-skew}deg) rotate(${((polar ? 90 : centralAngle) / 2) - 90}deg)`,
      color: 'white',
      border: '6px solid #ABBABB',
      background: `radial-gradient(transparent ${centerRadius}, #424242 ${centerRadius})`,
      outline: 'none'
    }
  }
  return (
  <div
    role="button"
    className={`${className} circle-slice`}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    onClick={onSelect}
    // onMouseUp
    onFocus={onFocus}
    onBlur={onBlur}
    style={styles.Container}
    tabIndex={-1}
    {...attrs}
  >
    <div
      style={styles.ContentContainer}
    >
      <div
        style={styles.Content}
      >
        {children}
      </div>
    </div>
  </div>
)};




export default compose(
  getContext({ ...propTypes, ...itemTypes })
)(Slice);
