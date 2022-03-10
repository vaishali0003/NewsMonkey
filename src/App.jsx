import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {Route,Routes} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

function App() {

  const apiKey=process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(10)

  let pageSize=9;
  return (
    <>
     <Navbar/>
     <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
     <Routes>
      <Route path='/' element={<News country='in' setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category='general' key='general'/>}></Route>
      <Route path='/business' element={<News country='in' setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category='business' key='business'/>}></Route>
      <Route path='/entertainment' element={<News country='in' setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category='entertainment' key='entertainment'/>}></Route>
      <Route path='/general' element={<News country='in' setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category='general' key='general'/>}></Route>
      <Route path='/health' element={<News country='in' setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category='health' key='health'/>}></Route>
      <Route path='/science' element={<News country='in' setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category='science' key='science'/>}></Route>
      <Route path='/sports' element={<News country='in' setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category='sports' key='sports'/>}></Route>
      <Route path='/technology' element={<News country='in' setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category='technology' key='technology'/>}></Route>
     </Routes>
    </>
  )
}

export default App;