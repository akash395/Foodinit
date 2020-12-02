import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'

export class Ratings extends Component {
    constructor (){
        super ()
        this.state = {
            rating: 0
        }
        this.changeRating = this.changeRating.bind(this)
    }
    changeRating (newRating){
        this.setState ({
            rating: newRating
        })
    }
    render() {
        return (
            <StarRatings 
                rating = {this.state.rating}
                starDimension="20px"
                starSpacing="0px"
                numberOfStars = {5}
                starRatedColor = {'green'}
                starHoverColor = {'red'}
                changeRating  = {this.changeRating}
            />
        );
    }
}

export default Ratings
