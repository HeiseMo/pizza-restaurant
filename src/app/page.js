import styles from './page.module.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Map from '../../components/Map';

export default function Home() {
  const pizzas = [
    { name: 'Margherita', description: 'Tomato, mozzarella, basil', price: '$10' },
    { name: 'Pepperoni', description: 'Tomato, mozzarella, pepperoni', price: '$12' },
    { name: 'Hawaiian', description: 'Tomato, mozzarella, ham, pineapple', price: '$13' },
    { name: 'Veggie', description: 'Tomato, mozzarella, bell peppers, olives, onions', price: '$11' },
    // Add more pizzas here...
    { name: 'Margherita', description: 'Tomato, mozzarella, basil', price: '$10' },
    { name: 'Pepperoni', description: 'Tomato, mozzarella, pepperoni', price: '$12' },
    { name: 'Hawaiian', description: 'Tomato, mozzarella, ham, pineapple', price: '$13' },
    { name: 'Veggie', description: 'Tomato, mozzarella, bell peppers, olives, onions', price: '$11' },
    { name: 'Margherita', description: 'Tomato, mozzarella, basil', price: '$10' },
    { name: 'Pepperoni', description: 'Tomato, mozzarella, pepperoni', price: '$12' },
    { name: 'Hawaiian', description: 'Tomato, mozzarella, ham, pineapple', price: '$13' },
    { name: 'Veggie', description: 'Tomato, mozzarella, bell peppers, olives, onions', price: '$11' },
  ];

  return (
    <div className="site-content">
      <Header />
      <div className='main-box'>      
        <div className='main'>
        {pizzas.map((pizza, index) => (
          <Card key={index} pizza={pizza} />
        ))}
      </div>
      <Map className="map-box" address="12343 San Pablo Ave, Richmond, CA 94805" />
      </div>

      <Footer />
    </div>
  );
}