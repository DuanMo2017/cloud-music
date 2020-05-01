import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Top, TabItem } from './style';
import {NavLink} from 'react-router-dom';

function Home(props) {
    const { route } = props;
    return (
        <div>
            <Top>
                <span className="iconfont menu">&#xe65c;</span>
                <span className="title">WebApp</span>
                <span className="iconfont search">&#xe62b;</span>
            </Top>
            <TabItem>
                <NavLink to="/recommend" activeClassName="selected"><span>推荐</span></NavLink>
                <NavLink to="/singers" activeClassName="selected"><span>歌手</span></NavLink>
                <NavLink to="/rank" activeClassName="selected"><span>排行榜</span></NavLink>
            </TabItem>
            {renderRoutes(route.routes)}
        </div>
    )
}

export default React.memo(Home);