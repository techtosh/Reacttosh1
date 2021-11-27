import  React from 'react'
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {

  state = { videos : [], selectedVideo : null }

  componentDidMount() {
    this.onTermSubmit('');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params : {
        q : term
      }
    })

    this.setState({ videos : response.data.items, selectedVideo : response.data.items[0] })

    console.log(term);
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo : video })
    //console.log('From the App!', video);
  }

  render() {
    return(
      <div className= "ui container">
        <SearchBar onFormSubmit= {(term) => this.onTermSubmit(term)}/>
        <div className= "ui grid">
          <div className= "ui row">
            <div className= "eleven wide column">
              <VideoDetail video= {this.state.selectedVideo} />
            </div>
            <div className= "five wide column">
              <VideoList onVideoSelect= {(video) => this.onVideoSelect(video)} videos= {this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
