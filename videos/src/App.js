import  React from 'react'
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';

class App extends React.Component {

  state = { videos : [] }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params : {
        q : term
      }
    })

    this.setState({ videos : response.data.items })

    console.log(term);
  }

  render() {
    return(
      <div className= "ui container">
        <SearchBar onFormSubmit= {(term) => this.onTermSubmit(term)}/>
        <VideoList videos= {this.state.videos}/>
      </div>
    )
  }
}

export default App;
