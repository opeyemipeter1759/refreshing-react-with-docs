import './App.css';

function App() {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    }

    return (
    <div className="App">
       <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
            />
            <ProductList />
            <MyBtn/>

    </div>
  );
}

function ProductList()
{
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
      ];
    const listItems = products.map(product =>
        <li key={product.id}>
          {product.title}
        </li>
    );
    return (
        
        <ul>{listItems}</ul>
      );
      
}

function MyBtn() {
    const handleClick = () =>
    {
        alert('clicked')
    }
    
    return (
        <button onClick={handleClick}>
            clicked me
        </button>
    )
}

export default App;
