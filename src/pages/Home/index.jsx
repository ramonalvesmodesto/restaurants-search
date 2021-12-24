import React, { useState } from "react";
import { Container, Logo, Search, Wrapper, CarrouselTitle, Carousel, ModalTitle, ModalContent } from "./style";

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.png';
import restaurante from '../../assets/restaurant.jpg';
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from "../../components";

import { useSelector } from 'react-redux';

const Home = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const [placeId, setPlaceId] = useState(null);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo"></Logo>

                    <TextField
                        label='Pesquisar'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    ><Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress} />
                    </TextField>

                    {restaurants.length > 0 ? (
                        <>
                            <CarrouselTitle>Na sua área</CarrouselTitle>
                            <Carousel {...settings}>
                                {restaurants.map((restaurant) => {
                                    return (
                                        <Card photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name} />
                                    )
                                })}
                            </Carousel>
                        </>
                    ) : <Loader />}
                </Search>

                {restaurants.map((restaurant) => {
                    return (
                        <RestaurantCard onClick={() => handleOpenModal(restaurant.place_id)} restaurant={restaurant} />
                    )
                })}
            </Container>

            <Map query={query} placeId={placeId}></Map>

            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                {restaurantSelected ? (
                    <>
                        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                        <ModalContent>{restaurantSelected?.opening_hours?.isOpen ? 'Aberto Agora' : 'Fechado Agora'}</ModalContent>
                    </>
                ) : (
                    <>
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                    </>
                )}
            </Modal>
        </Wrapper>

    );
};

export default Home;