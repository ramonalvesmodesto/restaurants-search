import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './style'
import restaurante from '../../assets/restaurant.jpg'
import { Skeleton } from "..";
const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoaded, seImageLoaded] = useState(false);
    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{ restaurant.name }</Title>
                <ReactStars count={5} isHalf size={22} value={restaurant.rating} edit={false} activeColor="#E7711C"/>
                <Address>{ restaurant.vicinity || restaurant.formatted_address }</Address>
            </RestaurantInfo>

            <RestaurantPhoto src={ restaurant.photos ? restaurant.photos[0].getUrl() : restaurante } alt="Foto do restaurante"
                             onLoad={() => seImageLoaded(true)}
                             imageLoaded={imageLoaded}
            />

            {!imageLoaded && <Skeleton width="100px" height="100px" />}
        </Restaurant>
    )
}

export default RestaurantCard;