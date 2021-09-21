/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const icons=[{id:'1'},{id:'2'}]
const Data=[
  {id:1,color:'#F25757',
  icon:[
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ],
  text:'Digital Process'
},
{id:1,color:'#F25757',
  icon:[
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ],
  text:'Digital Process'
},
{id:1,color:'#F25757',
  icon:[
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ],
  text:'Digital Process'
},
{id:1,color:'#F25757',
  icon:[
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ],
  text:'Digital Process'
},
  

 
];
const App= ()  => {

  return (
    <View style={styles.sectionContainer}>
       <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://i.ibb.co/zXnDSHj/abc-removebg-preview-1.png',
        }}
      />
        <Image
        style={styles.tinyLogo1}
        source={{
          uri: 'https://i.ibb.co/3vPdwJr/abx-removebg-preview.png',
        }}
      />
      
    <View >
<View style={{ flexDirection:'column' ,justifyContent:'center',alignItems:'center',alignContent:'center'}}>

  <View style={styles.SignInSection}>
    <Text style={{ fontWeight:'600',fontSize:30,marginTop:30}} >SIGN IN</Text>
    <Text style={{ fontSize:14,marginTop:20, marginLeft:20,alignSelf:'flex-start'}} >Please Fill the Following Fields.</Text>

<TextInput placeholder={'Enter Your Email'} style={{ height:30,borderWidth:1,marginTop:20, width:'83%',height:45,borderRadius:20,paddingHorizontal:20, }}></TextInput>
<TextInput placeholder={'Enter Your Password'} style={{ height:30,borderWidth:1,marginTop:20, width:'83%',height:45,borderRadius:20,paddingHorizontal:20, }}></TextInput>

<TouchableOpacity style={{marginTop:30, backgroundColor:'#ef629f',paddingHorizontal:20, borderRadius:15,paddingVertical:10 }}>
  <Text style={{ color:'white',fontWeight:'700',fontSize:16 }}>Sign In</Text>
</TouchableOpacity>
  </View>
  
</View>
    </View>
    
    </View>
  );
};


const styles = StyleSheet.create({
  sectionContainer: {
    color:'#EAF2E3',
    flex: 1,
    justifyContent:'center',alignContent:'center'

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  SignInSection:{
    borderRadius:30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 13,
    alignItems:'center',
height:360,

width:'80%',
backgroundColor:'white',
  },
  tinyLogo: {
    width: 360,
    right:-150,
    top:-80,
    position:'absolute',
    height: 330,
  },
  tinyLogo1: {
    width: 330,

    bottom:-70,
    left:-100,
    position:'absolute',
    height: 330,
  },
  header:{
flexDirection:'row'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    backgroundColor:'red',
  },
  container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
