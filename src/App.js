import React, {Component} from 'react';
import './App.scss';
import CardList from './components/CardList/CardList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        {
          heading: 'Сказочное заморское яство',
          title: 'Нямушка',
          subtitle: '10 порций',
          present: 'мышь в подарок',
          label: 'с фуа-гра',
          price: '0,5',
          descr: 'Чего сидишь? Порадуй котэ, ',
          active: false, 
          ended: false, 
          id: 1
        },
        {
          heading: 'Сказочное заморское яство',
          title: 'Нямушка',
          subtitle: '40 порций',
          present: '2 мыши в подарок',
          label: 'с рыбой', 
          price: '2',        
          descr: 'Чего сидишь? Порадуй котэ, ',
          active: false, 
          ended: false, 
          id: 2
        },
        {
          heading: 'Сказочное заморское яство',
          title: 'Нямушка',
          subtitle: '100 порций',
          present: '5 мышей в подарок заказчик доволен',
          label: 'с курой', 
          price: '5',
          descr: 'Чего сидишь? Порадуй котэ, ',
          active: false, 
          ended: true, 
          id: 3
        }
      ]
    };
    this.onToggleActive = this.onToggleActive.bind(this);
  }

   onToggleActive(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = {...old, active: !old.active};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      
      return {
        data: newArr
      }
    });
  }

  render() {
    const {data} = this.state;
    
    return (
      <div className="app">
      <h1 className="header">Ты сегодня покормил кота?</h1>

        <CardList 
          posts={data}
          onToggleActive={this.onToggleActive}
        />
      </div>
       
    )
  }
}
