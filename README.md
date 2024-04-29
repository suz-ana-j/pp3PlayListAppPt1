# pp3PlayListAppPt1
Third Portfolio Project ᓚᘏᗢ

## Jammming
I've build a React Web Application. This website allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account. 

## Features
* Users can search for songs by Song Title.
* Users can see information about each song like title, artist, and album for songs they queried.
* Users can export their custom playlist to their personal Spotify account

## Project Prerequisites
* HTML
* CSS
* JavaScript
* React
* HTTP Requests and Responses
* Authentication

## How it Works
* The Jammming web app allows users to add songs from the search results to their custom playlist. To achieve this, I have created an "add" button displayed next to each track in the search results list.
* Similar to the "add" button, there is a "remove" button to remove songs from their custom playlist.
* One essential feature of a music application is customization. Users are able to change the name of their custom playlist by clicking on the title of the playlist.
* Jammming’s main feature is allowing users to export their created playlist and save it to their personal Spotify account. I implemented a feature that allows user’s to save their custom playlist to their Spotify account and reset the existing playlist on the web app.
* To use the Spotify API with Jammming, I needed to get a user’s Spotify access token to make Spotify API requests. Using the <u>Implicit Grant Flow</u>, I created a Javascript module that will handle the logic for getting an access token and using it to make requests.
* Finally, I styled the app to have a design similar to Spotify, with a black background, white bold letters, and a green accent color. Each playlist will be displayed in a box with a unique background color.

## Technologies Used
* Visual Studio Code
* Terminal npx create-react-app jammming
* Spotify Web API Endpoint reference
* POST methods

## Copyright
Copyright (c) 2024 suz-ana-j MIT License




