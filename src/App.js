import './App.css';
import { useState } from 'react';
import ProductTableD from './ProductTable';
import Profile from './props/avatar';
import Gallery from './prop-task/prop';
import PackingList from './conditionalRender/list';
import List from './list/app';
import Events from './Events/event'
import StateGallery from './states/states'

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return (
    <div className='App'>
      {/* <h1>{user.name}</h1>
      <img
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      /> */}
      {/* <ProductList />
            <MyBtn count={count} onClick={handleClick} />
            <MyBtn count={count} onClick={handleClick} /> */}
      {/* <ProductTableD />
      <Gallery />
      <Profile />
      <PackingList />
          <List />
          <Events /> */}
          <StateGallery />
    </div>
  );
}

function ProductList() {
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  return <ul>{listItems}</ul>;
}

function MyBtn({ count, onClick }) {
  return <button onClick={onClick}>you have clicked me {count} times</button>;
}

export default App;
