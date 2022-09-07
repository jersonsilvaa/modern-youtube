import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ChannelDetail, Feed, NavBar, SearchFeed, VideoDetail } from './components/index'

const App = () => (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' exact element={ <Feed /> } />
      <Route path='/video/:id' element={ <VideoDetail /> } />
      <Route path='/channel/:id' element={ <ChannelDetail /> } />
      <Route path='/search/:searchTerm' element={ <SearchFeed /> } />
    </Routes>
  </BrowserRouter>
)

export default App