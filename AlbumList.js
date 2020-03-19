import React from 'react';
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';
import AlbumData from "./object.json";
const AlbumList = () => {
  return (
    <ScrollView>
        <View style={styles.cardcontainer}>
            <View style={styles.cardstyle}>
                <Image
                    source={{uri:AlbumData[0].image}}
                    style={styles.imageStyle}/>
            </View> 
            <View style={styles.singer}>
                <Image source={{uri:AlbumData[0].thumbnail_image}} 
                style={styles.singerimg}
                />
            </View>
            
        </View>
        <View style={styles.cardcontainer1}>
            <View style={styles.cardstyle}>
                <Image
                    source={{uri:AlbumData[1].image}}
                    style={styles.imageStyle}/>
            </View> 
            <View style={styles.singer}>
                <Image source={{uri:AlbumData[1].thumbnail_image}}
                style={styles.singerimg}
                />
            </View>
            
        </View>
        <View style={styles.cardcontainer1}>
            <View style={styles.cardstyle}>
                <Image
                    source={{uri:AlbumData[2].image}}
                    style={styles.imageStyle}/>
            </View> 
            <View style={styles.singer}>
                <Image source={{uri:AlbumData[2].thumbnail_image}}
                style={styles.singerimg}
                />
            </View>
            
        </View>
        <View style={styles.cardcontainer1}> 
            <View style={styles.cardstyle}>
                    <Image
                        source={{uri:AlbumData[3].image}}
                        style={styles.imageStyle}/>
                </View>
            <View style={styles.singer}>
                <Image source={{uri:AlbumData[3].thumbnail_image}}
                style={styles.singerimg}
                />
            </View>
            
        </View>
        <View style={styles.cardcontainer2}> 
            <View style={styles.cardstyle}>
                <Image
                    source={{uri:AlbumData[4].image}}
                    style={styles.imageStyle}/>
            </View>
            <View style={styles.singer}>
                <Image source={{uri:AlbumData[4].thumbnail_image}}
                style={styles.singerimg}
                />
            </View>
            
        </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    cardcontainer: {
      height: 54,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
    },
    cardcontainer1: {
        height: 54,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 280,
      },
      cardcontainer2: {
        height: 54,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 280,
        marginBottom:400,
      },
    singer: {
        width:84,
        height:83,
        borderRadius:80,
        borderColor:null, 
        shadowColor:"#000",
        shadowOffset:{width: 0,height: 1},
        shadowOpacity:0.2,
        shadowRadius:2,
        elevation:2,
        marginTop:-90,
        marginLeft:10
    },
    singerimg:{
      width: 80,
      height: 83,
      borderWidth: 1,
      borderRadius: 60,
      borderColor:null,    
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerContent: {
      flexDirection: "column",
      justifyContent: "space-around",
      marginLeft:7,
    },
    cardstyle:{
      margin:20,
      padding:10,
      borderColor:"black",
      borderBottomWidth: 2,
    },
    imageStyle: {
      height:260,
      width:null,
      borderWidth:8,
      borderRadius:20,
      borderColor:"#5E86C1",
    },
  });
export default AlbumList;