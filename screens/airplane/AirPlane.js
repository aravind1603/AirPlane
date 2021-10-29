import React from 'react';
import { View,Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TextInputComponent } from '../../components/TextInputComponent';

const Airplane = () => {
    const [a1, setA1] = React.useState(undefined);
    const [a2, setA2] = React.useState(undefined);
    const [b1, setB1] = React.useState(undefined);
    const [b2, setB2] = React.useState(undefined);
    const [c1, setC1] = React.useState(undefined);
    const [c2, setC2] = React.useState(undefined);
    const [d1, setD1] = React.useState(undefined);
    const [d2, setD2] = React.useState(undefined);
    const [seatingOrder,setSeatingOrder] = React.useState(undefined);
    const [Passengers, setPassengers] = React.useState(undefined);

    const navigation = useNavigation();

    const AirplaneSeatingArrangement = () => {
        var seatingOrderr = []
        if(a1 && a2 && b1 && b2 && c1 && c2 && d1 && d2){
            let array1 = []
            array1.push(parseInt(a1))
            array1.push(parseInt(a2))
            seatingOrderr.push(array1)
            let array2 = []
            array2.push(parseInt(b1))
            array2.push(parseInt(b2))
            seatingOrderr.push(array2)
            let array3 = []
            array3.push(parseInt(c1))
            array3.push(parseInt(c2))
            seatingOrderr.push(array3)
            let array4 = []
            array4.push(parseInt(d1))
            array4.push(parseInt(d2))
            seatingOrderr.push(array4)
            setSeatingOrder(seatingOrderr)
            // alert(JSON.stringify(seatingOrderr))
        }else{
            setSeatingOrder([])
        }
        
    }

    const onPressSeatAlotment = () =>{
        navigation.navigate('SeatingView', {
            seatOrder: seatingOrder,
            passengerscount: Passengers,
          })
    }

    return(
       <View style={{flex:1}}>
           <View style={{flexDirection:'row',padding:16}}>
               <Text style={{alignSelf:'center',fontSize:18,color:'black',paddingTop:16,marginTop:16}}>Array Element 1</Text>
               <View style={{flexDirection:'column'}}>
               <Text style={{paddingLeft:16,paddingBottom:16}}>Rows</Text>
               <View style={{borderWidth:2,borderColor:'#f23',height:40,width:40,marginLeft:16}}>
                <TextInputComponent
                onChangeText={text => setA1(text)}
                onEndEditing={ AirplaneSeatingArrangement }
                placeholder={'A1'}
                style={{paddingHorizontal: 10}}/>
                </View>
                </View>
                <View style={{flexDirection:'column'}}>
               <Text style={{paddingLeft:16,paddingBottom:16}}>Columns</Text>
                <View style={[{borderWidth:2,borderColor:'#f23',height:40,width:40,marginLeft:16}]}>
                <TextInputComponent
                onChangeText={text => setA2(text)}
                onEndEditing={ AirplaneSeatingArrangement }
                placeholder={'A2'}
                style={{paddingHorizontal: 10}}/>
                </View>
                </View>
           </View>
           <View style={{flexDirection:'row',padding:16}}>
               <Text style={{alignSelf:'center',fontSize:18,color:'black'}}>Array Element 2</Text>
               <View style={{borderWidth:2,borderColor:'#f23',height:40,width:40,marginLeft:16}}>
                <TextInputComponent
                onChangeText={text => setB1(text)}
                placeholder={'B1'}
                onEndEditing={ AirplaneSeatingArrangement }
                style={{paddingHorizontal: 10}}/>
                </View>
                <View style={[{borderWidth:2,borderColor:'#f23',height:40,width:40,marginLeft:16}]}>
                <TextInputComponent
                onChangeText={text => setB2(text)}
                placeholder={'B2'}
                onEndEditing={ AirplaneSeatingArrangement }
                style={{paddingHorizontal: 10}}/>
                </View>
           </View>
           <View style={{flexDirection:'row',padding:16}}>
               <Text style={{alignSelf:'center',fontSize:18,color:'black'}}>Array Element 3</Text>
               <View style={{borderWidth:2,borderColor:'#f23',height:40,width:40,marginLeft:16}}>
                <TextInputComponent
                onChangeText={text => setC1(text)}
                placeholder={'C1'}
                onEndEditing={ AirplaneSeatingArrangement }
                style={{paddingHorizontal: 10}}/>
                </View>
                <View style={[{borderWidth:2,borderColor:'#f23',height:40,width:40,marginLeft:16}]}>
                <TextInputComponent
                onChangeText={text => setC2(text)}
                placeholder={'C2'}
                onEndEditing={ AirplaneSeatingArrangement }
                style={{paddingHorizontal: 10}}/>
                </View>
           </View>
           <View style={{flexDirection:'row',padding:16}}>
               <Text style={{alignSelf:'center',fontSize:18,color:'black'}}>Array Element 4</Text>
               <View style={{borderWidth:2,borderColor:'#f23',height:40,width:40,marginLeft:16}}>
                <TextInputComponent
                onChangeText={text => setD1(text)}
                placeholder={'D1'}
                onEndEditing={ AirplaneSeatingArrangement }
                style={{paddingHorizontal: 10}}/>
                </View>
                <View style={[{borderWidth:2,borderColor:'#f23',height:40,width:40,marginLeft:16}]}>
                <TextInputComponent
                onChangeText={text => setD2(text)}
                placeholder={'D2'}
                onEndEditing={ AirplaneSeatingArrangement }
                style={{paddingHorizontal: 10}}/>
                </View>
           </View>
           <Text style={[{fontSize:18,color:'black',paddingLeft:16},(seatingOrder && seatingOrder.length == 0)? {color:'red'} : {color:'black'}]}>{( seatingOrder && seatingOrder.length == 0 ) ? 'Please enter array with following oder [[3,4],[4,5],[2,3],[3,4]]'  : (seatingOrder && seatingOrder.length > 0) &&'Seating Order : ' +JSON.stringify(seatingOrder)}</Text>
           <View style={{flexDirection:'row',padding:16}}>
               <Text style={{alignSelf:'center',fontSize:18,color:'black'}}>No Of Passengers</Text>
               <View style={{borderWidth:2,borderColor:'#f23',height:40,width:40,marginLeft:16}}>
                <TextInputComponent
                onChangeText={text => setPassengers(text)}
                placeholder={'20'}
                onEndEditing={ AirplaneSeatingArrangement }
                style={{paddingHorizontal: 10}}/>
                </View>
           </View>
           <View style={{margin:16}}>
           <Button
            onPress={onPressSeatAlotment}
            title="Seat Alotment"
            disabled = {!(a1 && a2 && b1 && b2 && c1 && c2 && d1 && d2 && Passengers)}
            />
            </View>
       </View> 
    )
}

export default Airplane