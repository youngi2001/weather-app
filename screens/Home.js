import React from "react";
import { View, Text, Button, TouchableOpacity, Image,} from "react-native";
import cloudy from '../assets/cloudy.png';




export default function Home({navigation}){

    


    
    return(


        
        <View style={{ flex: 1, 
                        marginTop: 50, 
                        justifyContent: "center", 
                        alignItems: "center" , 
                        backgroundColor: "rgb(2, 8, 77)"
                    }}>
            <Image
                style={{width:256}}
                source={cloudy}    
            />
            <Text style={{ fontSize: 40, color:"white", }}>Weather News</Text>
            <Text style={{ fontSize: 30, color:"gold", }}> & Feeds</Text>

            <Text style={{ fontSize:20, 
                            color: "white", 
                            marginHorizontal:60, 
                            textAlign:"center", 
                            marginTop:70}}
            >Weather News and Feeds give you more information about every weather in Ghana.</Text>

            <TouchableOpacity 
                style={{
                    backgroundColor:"gold",
                    borderRadius:15,
                    marginTop: 50,
                    paddingHorizontal:30
                }}
                onPress = {()=> {navigation.navigate("info")}}
            >
                <Text style={{color:"black", fontSize:40}}>Get Started</Text>
            </TouchableOpacity>


        </View>

    );   
    
        
}



