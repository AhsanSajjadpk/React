import logo from './logo.svg';
import car from './Assets/car.jpeg'
import car2 from './Assets/car2.png'
import car3 from './Assets/car3.webp'
import './App.css';
import home from './Components/home/home/'

function App() {
  // let arr = ["csas", "fas", "dsfsd"]


  // Array of Object
  let books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', pic: car },
    { id: 2, title: '1984', author: 'George Orwell', pic: car2 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pic: car3 }
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pic: car3 }

  ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* How to Display Image */}
        {/* <img src={car} alt="" style={{width:'800px'}} /> */}
        {/* <img src={require('./Assets/car.jpeg')} alt="" /> */}


        {/* How to Display Object */}
        {
          // arr.map((v) => {
          //   return <li>{v.name}</li>

          // })
        }

        {/* How to Display Array of Object ----------------------------------------------------*/}

        {/* <div> */}
        {/* <h1>Book List</h1> */}
        {/* <ul> */}
        {/* Map through the array of book objects and render each book */}
        {/* {books.map(book => (
              <li >
                <strong>Title:</strong> {book.title} <br /> - <strong>Author:</strong> {book.author} <br />
                <img src={book.pic} alt="" style={{ width: '100px' }} />

              </li>
            ))} */}
        {/* </ul> */}
        {/* </div> */}
        {/* How to Display Array of Object ----------------------------------------------------*/}

       

      </header>
    </div>
  );
}

export default App;

