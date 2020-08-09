import React from 'react';
import styles from './styles';
import {View, Image, Text, ImageBackground} from 'react-native';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import bgImage from '../../assets/images/give-classes-background.png';
import heartIcon from '../../assets/images/icons/heart.png';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

const Landing = () => {
  const {navigate} = useNavigation();

  function handleNavigateToGiveClassesPAge() {
    navigate('GiveClasses')
  }

  function handleNavigateToStudyPage() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" source={bgImage} style={styles.content} >
        <Image source={landingImg} style={styles.banner} />


      <Text style={styles.title}>
          Seja bem-vindo(a), {'\n'}
          <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer} >
        <RectButton 
          style={[styles.button, styles.buttonPrimary]} 
          onPress={handleNavigateToStudyPage}
        >
          <Image source={studyIcon}/>

          <Text style={styles.buttonText}  >Estudar</Text>
        </RectButton>

        <RectButton 
          onPress={handleNavigateToGiveClassesPAge} 
          style={[styles.button, styles.buttonSecondary]}
        >

          <Image source={giveClassesIcon}/>

          <Text style={styles.buttonText} >Dar Aula</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnectios}>
        Total de 285 conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </ImageBackground>
  </View>
  );
};

export default Landing;
