import React from 'react'
import Album from './Album/Album'
import Artist from './Artist/Artist'
import Playlist from './Playlist/Playlist'
import Podcast from './Podcast/Podcast'

import { useRouteMatch,Switch,Route} from 'react-router-dom'

const Library = ()=>{
        const match = useRouteMatch()
    return <>
            <Switch>
                    <Route exact path={`/library/playlist`}>
                            <Playlist/>
                    </Route>
                    <Route exact path={`/library/podcast`}>
                            <Podcast/>
                    </Route>
                    <Route exact path={`/library/artist`}>
                            <Artist/>
                    </Route>
                    <Route exact path={`/library/album`}>
                            <Album/>
                    </Route>
            </Switch>
    </>
}
export default Library