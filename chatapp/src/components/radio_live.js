import React, { Component } from 'react';
import YTPlayer from 'yt-player';

class Radio_Live extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        
        return (<iframe width="2543" height="800" src="https://www.youtube.com/embed/bmVKaAV_7-A?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>);
        
    }
}
 
export default Radio_Live;