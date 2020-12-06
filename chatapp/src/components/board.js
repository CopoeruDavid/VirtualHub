import React from 'react'
import Board from 'react-trello'
 
export default class Kanban extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    const data = {
        lanes: [
            
          {
            id: 'lane1',
            title: 'Planned Tasks',
            label: '2/2',
            editable: true,
            style: {"width": 500},
            cards: [{id: 'Card1', title: 'Deploy the application', description: 'heroku issues', label: '15 mins'}]             

          },
          {
            id: 'lane2',
            title: 'Doing',
            label: '0/0',
            style: {"width": 500},
            cards: [{id: 'Card2', title: 'Giving the presentation', description: 'hello', label: '5 mins'}]
          },
          {
            id: 'lane3',
            title: 'Stucked',
            label: '0/0',
            style: {"width": 500},
            cards: []
          },
          {
            id: 'lane4',
            title: 'Finished',
            label: '0/0',
            style: {"width": 500},
            cards: []
          }

        ],        
      }

    return <Board data={data} draggable canAddLanes/>
  }
}