import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Box } from '@mui/material'

import ChannelDetail from './components/ChannelDetail.jsx'
import Feed from './components/Feed.jsx'
import Navbar from './components/Navbar.jsx'
import SearchFeed from './components/SearchFeed.jsx'
import VideoDetail from './components/VideoDetail.jsx'

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Feed/>}/>
                <Route path='video/:id' element={<VideoDetail/>}/>
                <Route path='channel/:id' element={<ChannelDetail/>}/>
                <Route path='search/:searchTerm' element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
)


export default App