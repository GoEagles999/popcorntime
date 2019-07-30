import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    state = {
        movies: []
    }
    async componentDidMount() {
        try {
            const movies = await axios.get('http://localhost:3000/movies')
            this.setState({movies:movies.data.movies})
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        const {
            movies
        } = this.state
        console.log(movies)
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
                            return (<div style={{width:'20%',height:'10%'}}>
                                <img src={'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwih-bXx2d3jAhWvx4UKHRiEBMQQjRx6BAgBEAQ&url=https%3A%2F%2Fburn-28.myshopify.com%2Fproducts%2Flimited-edition-burn-movie-poster&psig=AOvVaw0dj0zXlwZ2bUDccsX3kxih&ust=1564612487536324'} />
                            </div>)
                        })
                    }
                </main>
            </div>
        );
    }
}

export default App;
