import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Main from './component/Header';
import Administration from './module/page/admin/Administration';


function App() {
  return (
    <Main>
      <Administration/>
    </Main>
  )
}

export default App
