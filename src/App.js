import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Posts } from './components/posts/Posts';
import { Users } from './components/users/Users';
import { Header } from './components/header/Header';
import './styles/index.css';

const queryClient = new QueryClient();

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
