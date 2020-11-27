// import logo from './logo.svg';
import styles from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';

//main component consisting of all components 
function App() {
  return (
    <div className={styles.App}>
       <div className={styles.designHeader}></div>
       <div className={styles.SearchBar}>
        <SearchBar/>
       </div>
    </div>
  );
}

export default App;
