import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Header";
import { Container, Row, Col } from "../components/Grid";
import Form from "../components/Form";
import Result from "../components/Result";

class SearchBooks extends Component {
	state = {
		search: "",
		books: [],
		error: "",
		message: ""
	};

	//Takes value within search bar
	handleInputChange = (event) => {
		this.setState({ search: event.target.value });
	};

	//Handles submit button of the search form
	handleFormSubmit = (event) => {
		event.preventDefault();
		// On click, it connects to the google book api with the search value
		API.getGoogleSearchBooks(this.state.search)
			.then((res) => {
				if (res.data.items === "error") {
					throw new Error(res.data.items);
				} else {
					// Stores response in a array
					let results = res.data.items;
					//Maps through the array
					results = results.map((result) => {
						//Store each book information in a new object
						result = {
							key: result.id,
							id: result.id,
							title: result.volumeInfo.title,
							author: result.volumeInfo.authors,
							description: result.volumeInfo.description,
							image: result.volumeInfo.imageLinks.thumbnail,
							link: result.volumeInfo.infoLink
						};
						return result;
					});
					// Catches error
					this.setState({ books: results, error: "" });
				}
			})
			.catch((err) => this.setState({ error: err.items }));
	};

	handleSavedButton = (event) => {
		event.preventDefault();
		console.log(this.state.books);
		let savedBooks = this.state.books.filter((book) => book.id === event.target.id);
		savedBooks = savedBooks[0];
		API.saveBook(savedBooks)
			.then(this.setState({ message: alert("Your book has been saved!") }))
			.catch((err) => console.log(err));
	};
	render() {
		return (
			<Container fluid>
				<Jumbotron>
					<h1 className="text-white font-weight-bold">Find your favorite books with the GoogleBook API!</h1>
				</Jumbotron>
				<Container>
					<Row>
						<Col size="12">
							<Form
								handleFormSubmit={this.handleFormSubmit}
								handleInputChange={this.handleInputChange}
							/>
						</Col>
					</Row>
				</Container>
				<br />
				<Container>
					<Result books={this.state.books} handleSavedButton={this.handleSavedButton} />
				</Container>
			</Container>
		);
	}
}

export default SearchBooks;
