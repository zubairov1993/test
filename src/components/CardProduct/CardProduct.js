import React, {Component} from 'react';

import './Cardproduct.scss';
import Description from '../Description/Description';

export default class CardProduct extends Component{
  render() {
    const {price, present, subtitle, heading, title, label, active, ended, onToggleActive} = this.props;
    const {...itemProduct} = this.props;

    let classNames = 'card';
    let classNames2 = 'circle';
    if(active) {
      classNames += ' active';
      classNames2 += ' circleActive';
    }
    if(ended) {
      classNames += ' ended';
      classNames2 += ' circleEnded';
    };
    return (
      <div className="card-item">
        <div 
          className={classNames}
          onClick={onToggleActive}
          >
          <p className='heading'>{heading}</p>
          <h1 className='title'>{title}</h1>
          <h2 className='label'>{label}</h2>
          <p className='subtitle'>{subtitle}</p>
          <p className='present'>{present}</p>
          <div className={classNames2}>
            <p className="price">{price}<span>кг</span></p>
          </div>
        </div>
        <Description
          {...itemProduct}
        />
      </div>
    )
  } 
}