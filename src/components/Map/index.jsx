import React, { useState, useEffect } from 'react';
import { Marker, GoogleApiWrapper, Map } from 'google-maps-react';
import { useDispatch, useSelector } from 'react-redux';

import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';

export const Mapcontainer = (props) => {
    const [map, setMap] = useState(null);
    const { google, query, placeId } = props;
    const { restaurants } = useSelector((state) => state.restaurants);
    const dispatch = useDispatch();

    useEffect(() => {
        if (query) {
            searchByQuery(query);
        }
    }, [query]);

    useEffect(() => {
        if (placeId) {
            getRestaurantById(placeId);
        }
    }, [placeId]);

    function getRestaurantById(placeId) {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurant(null));

        const request = {
            placeId,
            fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
        };

        service.getDetails(request, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurant(place));
            }
        });
    }

    function searchByQuery() {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurant([]));

        const request = {
            location: map.center,
            radius: '50000',
            type: ['restaurant'],
        };

        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results));
            }
        });
    }

    function searchNearby(map, center) {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurant([]));

        const request = {
            location: center,
            radius: '100000',
            type: ['restaurant'],
        };

        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results));
            }
        });
    }

    function onMapReady(_, map) {
        setMap(map);
        searchNearby(map, map.center)
    }

    return (
        <Map google={google} 
             centerAroundCurrentLocation 
             onReady={onMapReady} 
             onRecenter={onMapReady} 
             {...props}>
            {restaurants.map((restaurant) => {
                return (
                    <Marker
                        key={restaurant.place_id}
                        name={restaurant.name}
                        position={{
                            lat: restaurant.geometry.location.lat(),
                            lng: restaurant.geometry.location.lng(),
                        }}
                    />
                )
            })}
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API,
    language: 'pt-BR',
})(Mapcontainer);