import { Component } from "react";
import stickers from './components/stickers.json'
import { Choice } from "./components/Choice/Choice";
import { StickerList } from "./components/StickerList/StickerList";
export class App extends Component{
  state = {
      text: ''
  }
  setText = (text) => {
      this.setState({text})
  }
  render() {
    
    const {text} = this.state
    return (
      <div>
        <Choice text={text}/>
        <StickerList stickers={stickers} handleSticker={this.setText}/>
      </div>
    )
  }
}