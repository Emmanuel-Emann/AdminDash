import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Main from './layout/component/Head/Header';
import Administration from './module/page/admin/Administration';



function App() {
  return (
    // <BrowserRouter>
    //   <Routess/>
    // </BrowserRouter>
    <Main>
      <Administration/>
    </Main>
  )
}

export default App
