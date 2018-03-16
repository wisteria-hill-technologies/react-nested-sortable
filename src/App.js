import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sortable from 'react-sortablejs'
import uuidv1 from 'uuid/v1'

class App extends Component {

  state={
    items: [
      {name: "item1", subItems:[ "subItem1", "subItem2", "subItem3", "subItem4", "subItem5" ]},
      {name: "item2", subItems:[ "subItem1", "subItem2", "subItem3", "subItem4", "subItem5" ]},
      {name: "item3", subItems:[ "subItem1", "subItem2", "subItem3", "subItem4", "subItem5" ]},
      {name: "item4", subItems:[ "subItem1", "subItem2", "subItem3", "subItem4", "subItem5" ]}
    ],
  }

  handleDnD=(items, sortable, evt)=>{
    evt.stopPropagation()
    console.log("items>>>", items)
    const updatedItems = items.map(item=>this.state.items.filter(itemObj=>itemObj.name===item)[0])
    console.log("updatedItems>>>>", updatedItems)
    this.setState({ items: updatedItems })
  }

  handleSubDnD=(parentItemName, items, sortable, evt)=>{
    evt.stopPropagation()
    const updateItems = this.state.items.map(item=>{
      if(item.name===parentItemName) {
        item.subItems = items
        return item
      } else {
        return item
      }
    })

    this.setState({
      items: updateItems
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <Sortable
            tag="ul"
            onChange={(items, sortable, evt)=>this.handleDnD(items, sortable, evt)}
          >
            {
              this.state.items.map((item)=>{
                console.log("item>>>>>>>>>", item)
                return (
                  <li
                    style={{color: "white", width:"100px", backgroundColor:"purple", padding: "10px", listStyle: "none"}}
                    data-id={item.name}
                    key={uuidv1()}
                  >
                    {item.name}
                    <div>
                      <Sortable
                        tag="ul"
                        onChange={ (items, sortable, evt)=>this.handleSubDnD(item.name, items, sortable, evt)}
                      >
                        {
                          item.subItems.map(subItem=>{
                            return (
                              <li
                                style={{color: "white", width:"100%", height:"50px", backgroundColor:"green", padding: "10px", listStyle: "none"}}
                                data-id={subItem}
                                key={uuidv1()}
                              >
                                {subItem}
                              </li>
                            )
                          })
                        }
                      </Sortable>
                    </div>
                  </li>
                )})
            }
          </Sortable>
        </div>
      </div>
    );
  }
}

export default App;
