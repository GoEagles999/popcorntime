import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = {
        movies: []
    }
    async componentDidMount() {
        try {
            const movies = await axios.get('http://localhost:3000/movies')
            console.log(movies)
            this.setState({movies})
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        const {
            movies
        } = this.state
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        Movies
                    </div>
                    <div>
                        TV Shows
                    </div>
                </header>
                <main>
                    {
                        movies && movies.map(movie => {
                            return (<div>
                                <img src={} style={{height:'20%', width:'10%'}}/>
                            </div>)
                        })
                    }
                </main>
            </div>
        );
    }
}

export default App;
