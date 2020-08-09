import React from 'react';
import { Text,View, ImageBackground } from 'react-native';
import styles from './styles';
import bgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const GiveClasses = () => {
    const {goBack} = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={bgImage} style={styles.content} >

            <Text style={styles.title}> Quer ser um Proffy? </Text>
            <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>

            <RectButton onPress={handleNavigateBack} style={styles.okButton} >
                <Text style={styles.okButtonText} >Tudo Bem</Text>
            </RectButton>
            </ImageBackground>
        </View>
    )
}

export default GiveClasses;