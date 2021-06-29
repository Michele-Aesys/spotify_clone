import React, { useEffect, useReducer } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import Home_page from './Home_page/Home_page'
import Search from './Search_page/Search'
import Library from './Library/Library'
import Playlist_page from './Playlist_page/Playlist_page'
import { BrowserRouter as Router,Switch,Route, Redirect } from 'react-router-dom'
import {home_container} from './Home.module.css'
import Playlist from './Home_page/Playlist/Playlist'
const initState = {search:false,library:false}

function reducer(state,action){
        switch (action.type) {
            case "home":
                return initState
            case "search":
                return {search:true}
            case "library":
                return {library:true}
                break;
            default:
                throw new Error("Action Error")
                break;
        }
}
const Home = ()=>{
    const [state,dispatch] = useReducer(reducer,initState)

    useEffect(()=>{        
        let url = window.location.pathname.split("/")[1] 
        switch (url) {
              case "search":
                  dispatch({type:"search"})
                  break;
                  case "library":
                    dispatch({type:"library"})
                    break;
              default:
                  console.log("default")
                  break;
          }
    },[])
    return(
    <Router>
        <Sidebar dispatch={dispatch}/>
        <Navbar search={state.search} library={state.library}/>
        <div className={home_container}>
            <Switch>
                <Route exact path="/"><Home_page/></Route>
                <Route  path="/search"><Search/></Route>
                <Route  path="/library"><Library/></Route>
                <Route path="/playlist/:id"><Playlist_page/></Route>
            </Switch>
        </div>
    </Router>
    )
}

export default Home