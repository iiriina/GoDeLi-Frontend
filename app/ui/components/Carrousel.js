import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import index from '../assets/icons/index';

const images = [
    index.CHEF,
    index.CHEF,
    index.CHEF,
    index.CHEF,
    index.CHEF,
];

const Carrousel = () => {
    const width = Dimensions.get('window').width;
    const carouselHeight = width / 2;

    return (
        
            <Carousel
                loop
                width={width}
                height={carouselHeight}
                autoPlay={true}
                data={images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => index}
                renderItem={({ item, index }) => (
                    <View style={styles.imageContainer}>
                        <Image
                            source={item}
                            style={styles.image}
                        />
                    </View>
                )}
            />
        
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        zIndex: 1,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default Carrousel;
