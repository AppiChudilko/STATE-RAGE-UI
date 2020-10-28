// @flow
import React from 'react';
import { isFragment, isElement } from 'react-is';
import { compose, withProps, withContext, getContext } from 'recompose';

import type Slice from './Slice';
import { itemTypes, propTypes, type Context } from './Slice';

/* eslint-disable no-use-before-define */
type Props = {
  className: string,
  slices: Slice[],
  Center: typeof Center,
  attrs: {},
  selected: {}
} & Context;
/* eslint-enable no-use-before-define */


const Item = compose(
  withContext(
    itemTypes,
    ({ startAngle, endAngle, skew }) => ({ startAngle, endAngle, skew }),
  )
)('li');


const getSlices = (child, index) => {
  let slices = [];
  if (isFragment(child)) {
    React.Children.forEach(child.props.children, (slice, i) => {
      slices = [...slices, ...getSlices(slice, index + i)];
    });
  } else if (isElement(child)) {
    return [child];
  }
  return slices;
};

const computeSlices = compose(
  withProps(({ children }) => {
    let slices = [];
    let index = 0;
    React.Children.forEach(children, (child, i) => {
      slices = [
        ...slices,
        ...getSlices(child, index + i),
      ];
      index = Math.max(0, slices.length - 1);
    });
    return { slices };
  }),
  withContext(propTypes, ({
    slices,
    radius = '150px',
    centerRadius = '50px',
  }: Context) => {
    const centralAngle = 360 / slices.length || 360;
    const polar = centralAngle % 180 === 0;
    return { radius, centerRadius, centralAngle, polar };
  }),
  getContext(propTypes),
);

const PieMenu = ({
  className,
  radius,
  centerRadius,
  centralAngle,
  startOffsetAngle = 0,
  polar,
  Center,
  slices,
  centerX,
  centerY,
  attrs = {},
  selected = {}
}: Props) => {
  const deltaAngle = 90 - centralAngle;
  const startAngle = polar ? 45 : startOffsetAngle + deltaAngle + (centralAngle / 2);
  const styles = {
    list: {
      position: 'relative',
      listStyle: 'none',
      padding: 0,
      margin: 0,
      borderRadius: '50%',
      width: `calc(2 *  ${radius})`,
      height: `calc(2 * ${radius})`
    }
  }
  return (
  <div style={{
    display: 'inline-block',
    position: ((centerX || centerY) ? 'absolute' : 'relative'),
    top: `calc(${centerY - radius})`,
    left: `calc(${centerX - radius})`,
    borderRadius: '50%',
    overflow: 'hidden'
  }}>
    <div className={className}>
      <div style={styles.list}>
        {slices.map((slice, i) => (
            <Item
            key={i.toString()}
            startAngle={startAngle}
            endAngle={centralAngle * i}
            skew={polar ? 0 : deltaAngle}
            centralAngle={centralAngle}
            style={{
              width: centralAngle > 90 ? '100%' : '50%',
              height: centralAngle > 90 ? '100%' : '50%',
              bottom: centralAngle > 90 ? '50%' : 'initial',
              right: centralAngle > 90 ? '50%' : 'initial',
              position: 'absolute',
              transform: `rotate(${startAngle + centralAngle * i}deg) skew(${polar ? 0 : deltaAngle}deg)`,
              transformOrigin: 'bottom right',
              overflow: 'hidden'
            }}
          >
            {slice}
          </Item>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '10',
          boxShadow: 'inset 0 0 10px #E2F8FF',
          position: 'absolute',
          borderRadius: '50%',
          background: 'transparent',
          top: `calc(43% - ${centerRadius} - 10px - 3px)`,
          left: `calc(52% - ${centerRadius} - 10px)`,
          width: `calc(2 * ${centerRadius} + 20px)`,
          height: `calc(2 * ${centerRadius} + 20px)`
        }}
      >
          <div className="center-content">
            <div className="center-content-top">
              {attrs[selected].circleInfoTop}
            </div>
            <div className="center-content-middle">
              {attrs[selected].data[attrs[selected].selected] ? attrs[selected].data[attrs[selected].selected].circleInfoMiddle : null}
            </div>
            <div className="center-content-bottom">
              {attrs[selected].data[attrs[selected].selected] ? (
                attrs[selected].data[attrs[selected].selected].circleInfoBottom ?
                <img className="circle-ammo-img" src={require("../img/ammo-b.png")} />
                : null
              ) : <></> }
              <span style={{fontSize: '14px'}}>
                {attrs[selected].data[attrs[selected].selected] ? attrs[selected].data[attrs[selected].selected].circleInfoBottom : null}
                {
                  attrs[selected].data[attrs[selected].selected] ? (
                  attrs[selected].data[attrs[selected].selected].circleInfoBottom.match(/\d/g) ? 
                  <span style={{fontSize: '8px'}}>мм</span>
                  :
                  <></>
                  ) : null
                }
              </span>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
};

export default compose(
  computeSlices
)(PieMenu);
