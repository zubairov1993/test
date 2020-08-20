import React, {Component} from 'react';

import './Description.scss';

export default class Description extends Component {
  render() {
    const {label, descr, active, ended, onToggleActive} = this.props;
    if(ended) {
      switch (label) {
        case 'с рыбой':
          return (
            <div className="descr end">Печалька, с рыбой закончился.</div>
          );
        case 'с курой':
          return (
            <div className="descr end">Печалька, с курой закончился.</div>
          );
        default:
          return (
            <div className="descr end">
              Печалька, с фуа-гра закончился.
            </div>
          );
        }
    }

   if(!active) {
    return (
      <p className='descr'>
        {descr}
        <span 
        className='link'
        onClick={onToggleActive}
        >
            купи
        </span>
      </p>
    )
   } else {
    switch (label) {
      case 'с рыбой':
        return (
          <div className='descr'>
            Головы щучьи с чесноком да свежайшая сёмгушка.
          </div>
        );
      case 'с курой':
        return (
          <div className='descr'>
            Филе из цыплят с трюфелями в бульоне.
          </div>
        );
      default:
        return (
          <div className='descr'>
            Печень утки разварная с артишоками.
          </div>
        );
      }
    }
  }
}