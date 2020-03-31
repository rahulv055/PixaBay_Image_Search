import React, { Component } from 'react'
import { TextField, Select, MenuItem, InputLabel } from "@material-ui/core";
import axios from 'axios';
import ImageResults from '../Image-results/ImageResults'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            amount: 15,
            apiURL: 'https://pixabay.com/api/',
            apiKey: '15767725-cd59947c496d34ab05f266b03',
            images: []
        }
    }

    onTextChange = e => {
        const val = e.target.value;

        this.setState({ [e.target.name]: val }, () => {
            if (val === '') {
                this.setState({ images: [] })
            } else {
                axios.get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                    .then(res => this.setState({ images: res.data.hits }))
                    .catch(err => console.log(err));
            }
        })

    }

    onAmountChange = (e) => {
        this.setState({ amount: e.target.value });
    }
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    label="Search For Images"
                    fullWidth={true}
                    variant="standard"
                />
                <br />
                <InputLabel id="Amount-label">Amount</InputLabel>
                <Select
                    name="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
                <br />
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
            </div>
        )
    }
}

export default Search;