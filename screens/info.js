import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import { useEffect } from "react";
import sun from '../assets/sun.png';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontDisplay } from "expo-font";

export default function info({navigation}){

    const [weatherData, setWeatherData] = useState();
    

    async function getWeather(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=accra&appid=1148ce4d03924cda309c56d7aaf08039")
        .then((response) => response.json())
        .then((response) => {
            setWeatherData(response);
            console.log(response);
        })
        .catch((e) => {
            console.log(e);
        }); 
    }

    useEffect (()=>{
        getWeather();
    }, []);

    function FTD(temp){
        return (
            (temp - 273.15) 
        );

    }


    return (
        <View style={{flex:1, marginTop:50, backgroundColor:"rgb(2, 7, 61)",}}>
            <View 
                style={{ 
                            alignItems:"center", 
                             
                            flexDirection:"row", 
                            
                        }}
            >   
                <AntDesign name="menuunfold" size={24} color="white" style={{marginLeft:5}} />
                <Text style={{fontSize:20, color:"white", marginLeft:70}}> Weather Forecast</Text>
            </View>
            

           
            <View 
                style={{ marginTop:30,
                        borderRadius:25,
                        marginHorizontal:10,
                        backgroundColor:"#151859",
                        padding:20,
                        height:230 ,
                        
                                    

                    }} 
            >
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={{fontSize:20, color:"white", }}>Today</Text>
                    <Text style={{color:"white", fontSize:19}}>{new Date().toDateString()}</Text>
                </View>
                <View style={{flexDirection:"row",}}>
                    <Text style={{fontSize:70, color:"white", }}>{FTD(weatherData.main.temp).toFixed(1)}</Text>
                    <Text style={{fontSize:20, color:"gold"}}>o <Text style={{fontSize:40, color:"gold"}} >c</Text> </Text>
                    <Image source={sun} style={{marginLeft:40, width:120, height:120}} />
                </View>

                <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:15}}>
                    <SimpleLineIcons name="location-pin" size={24} color="gold" />
                    <Text style={{color: "#c5c3e8", fontSize:20, marginRight:140}}>{weatherData.name}</Text>
                    <Text style={{color: "#c5c3e8", fontSize:20, marginRight:20 }}>{weatherData.weather[0].description}</Text>
                </View>
            </View>
            
            <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:10}}>
                <TouchableOpacity>
                    <Text style={styles.dateSelection}>Today</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={styles.dateSelection}>Tomorrow</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={styles.dateSelection}>Next 7 days</Text>
                </TouchableOpacity>
                

            </View>

        </View>


        
                
        

    );
        
}

const styles = StyleSheet.create({
    dateSelection:{
        color: "gold",
        fontSize:15

    }

})