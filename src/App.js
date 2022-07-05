import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = 'blue';
const imageProfileGitHub =
  'https://avatars.githubusercontent.com/u/92160378?v=4';
const urlToMyGitHub = 'https://github.com/rhyanndev';

const App = () => {

    const handlePressGoToGitHub = async()=> {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGitHub);
        
        if(res){
            console.log('Link aprovado');
            console.log('Abrindo Link...');
            await Linking.openURL(urlToMyGitHub);
        }
    };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Rhyann com fundo com papel de parede 3D"
          style={style.avatar}
          source={{uri: imageProfileGitHub}}
        />
        <Text 
        accessibilityLabel='Nome: Rhyann Silva'
        style={[style.defaultText, style.name]}>Rhyann Silva</Text>
        <Text accessibilityLabel='Nickname: Rhyann Silva'
         style={[style.defaultText, style.nickname]}>Student</Text>
         <Pressable onPress={handlePressGoToGitHub}>
         <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}> Open in GitHub</Text>
         </View>
         </Pressable>
      </View>
    </SafeAreaView>
  );
};
// A tag style pode receber um array de styles
export default App;

const style = StyleSheet.create({
  container: {
    //Colum
    // estilo do nosso view
    backgroundColor: colorGitHub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
    
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText:{
    color:colorFontGitHub,
  },
  name:{
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  nickname:{
    fontSize: 18,
    color: colorFontGitHub,
  },
  button:{
    marginTop: 20,
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 21,
  }
});
