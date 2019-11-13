import React from 'react';
import logo from './logo.svg';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Todos from './Todos/Todos';
import LeftComponent from './LeftComponent/LeftComponent';
import RightComponent from './RightComponent/RightComponent';
import Footer from './Footer/Footer';
import restMcIp from './restaurantsMcIp.png';
import brooklynMcIp from './brooklynMcIp.png';
import gameImac from './gameImac.png';
import quoteMc from './quote_mc.png';
import chalets from './chalets_Miphone.png';
import todosIcons from './img/todosIcons.png';
import restIcons from './img/restIcons.png';
import gqIcons from './img/gqIcons.png';
import brookIcons from './img/brookIcons.png';
import wpIcons from './img/wpIcons.png';



class App extends React.Component {
  state = {

      todos:{
        todo: 'The TO-DO app is an application that helps people to manage tasks. It can simplify the file of everyone, from professionals to private users. The user can add new tasks to the list, when the task is done it can be marked as completed or deleted. The app is very easy to use and has a minimalistic design.',
        linkTodo:'https://todos-react-app.000webhostapp.com/',
      },

      rest: {
        restaurants: 'A Google Maps map loaded with the Google Maps API. A list of restaurants on the right side of the page that are within the area displayed on the map. Add a review about an existing restaurant. Add a restaurant by clicking on a specific place on the map.',
        restaurantsTitle:'Restaurants nearby Project',
        restLink: 'https://restreview.000webhostapp.com/',
      },

      brook:{
        brooklynTitle:'Brooklyn film festival Project',
        brooklyn: 'A website that publicizes information about an upcomming Film Festival. Special Films on The Opening Day and Closing Day. Showtimes of selected Films on days of the Festival. Visitors / Users can pre-register through a form to book tickets / seats in advance.',
        brookLink: 'https://frankie9119.github.io/BrooklynFilmFestival/',
      },
      
      gameBoard:{
        gameTitle: 'Turn Based Board Game Project',
        game: 'Randomly generating the game map with obstacles, players and weapons. For each turn, the active player has up to three moves to do (horizontally or vertically) before ending their turn. If a player passes over a box containing a weapon, they leave their current weapon on site and replace it with the new one. If a player passes over the other player a battle begins.',
        gameLink :'https://franvideogame.000webhostapp.com/',
      },

      quote:{
        quoteGen: 'Select the number of quotes generated (between 1 and 5) Choose between 2 types of quote generators (two different sets of sentences) Visit the webpage to see how the generator works!',
        quoteTitle: 'Quotes Generator Project',
        quoteLink: 'https://generatethis.000webhostapp.com/',
      },

      wpChalet:{
        wpTitle: 'Chalets Project',
        wp: 'A website that publicizes chalets to rent and on sale. Chalets in the Aspen area, description, price, location. Choosed a clean theam, integrated plugins, implemented CSS.',
        wpLink: 'http://chaletsandcaviar.altervista.org/',
      },
            
            

        }


  render() {
    return (
      <div className="App">
      
        <NavBar/>
        
        <Header/>
        
        <Todos todosIcons={todosIcons} rest={this.state.todos.todo} linkToPass={this.state.todos.linkTodo}/>
    
        
        <LeftComponent icons={restIcons} restMcIp={restMcIp} linkToPass={this.state.rest.restLink} restTitle={this.state.rest.restaurantsTitle} rest={this.state.rest.restaurants}/>
        
        <RightComponent icons={gqIcons} restMcIp={gameImac} linkToPass={this.state.gameBoard.gameLink} restTitle={this.state.gameBoard.gameTitle} rest={this.state.gameBoard.game}/>
        <LeftComponent icons={brookIcons} restMcIp={brooklynMcIp} linkToPass={this.state.brook.brookLink} restTitle={this.state.brook.brooklynTitle} rest={this.state.brook.brooklyn}/>
        <RightComponent icons={gqIcons} restMcIp={quoteMc} linkToPass={this.state.quote.quoteLink} restTitle={this.state.quote.quoteTitle} rest={this.state.quote.quoteGen}/>
        <LeftComponent icons={wpIcons} restMcIp={chalets} linkToPass={this.state.wpChalet.wpLink} restTitle={this.state.wpChalet.wpTitle} rest={this.state.wpChalet.wp}/>
        
        <Fade bottom>
        <Footer/>
        </Fade>
        
      </div>
    );
  }
}

export default App;