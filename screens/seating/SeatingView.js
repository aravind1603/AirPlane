import React from 'react';
import { View,Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TextInputComponent } from '../../components/TextInputComponent';

const SeatingView = (props) => {

    const [finalSeating,SetFinalSeating] = React.useState()

    React.useEffect(() => {
        var rowSize=Math.max.apply(Math, props.route.params.seatOrder.map(e=>JSON.stringify(e[0])));
	    var colSize=Math.max.apply(Math, props.route.params.seatOrder.map(e=>JSON.stringify(e[1])));

        // alert(rowSize)

	  var seating=fillWithKeys(props.route.params.seatOrder);
	  
	  //Replace chars with numbers
	  var obj={};
	  obj=keysToNumber("AISLE",1,seating,colSize,rowSize);
	  obj=keysToNumber("WINDOW",obj.counter,obj.seating,colSize,rowSize);
	  obj=keysToNumber("MIDDLE",obj.counter,obj.seating,colSize,rowSize);
	  seating=obj.seating;
	  
	  //print the seating
	  printValues(seating,colSize,rowSize)

    },[])

    const printValues = (seating,colSize,rowSize) => {
        var order=""
        for(var i=0;i<colSize;i++){
              for(var j=0;j<rowSize;j++){
                  if(seating[j]==null||seating[j][i]==null){
                    
                      order+="- "
                      continue;
                  }
                  for(var k=0;k<seating[j][i].length;k++){
                      order+=(seating[j][i][k]+" ");
                  }
                  order+=",";
              }
              order+="\n"
          }
          SetFinalSeating(order)
        // alert(JSON.stringify(order))
    }	
    
    const fillWithKeys = (array) => {
        var seating=[];
        for(var i=0;i<array.length;i++)
              seating.push(Array(array[i][0]).fill().map(()=>Array(array[i][1]).fill("MIDDLE")));
        
        for(var i=0;i<seating.length;i++){
            for(var j=0;j<seating[i].length;j++){  
                  seating[i][j][0]="AISLE";
                seating[i][j][seating[i][j].length-1]="AISLE";
            }
          }
    
          for(var i=0;i<seating[0].length;i++)
              seating[0][i][0]="WINDOW";
          for(var i=0;i<seating[seating.length-1].length;i++)
            seating[seating.length-1][i][(seating[seating.length-1][i].length)-1]="WINDOW";
          
        return seating;
    }
    
    const keysToNumber = (val,counter,seating,colSize,rowSize) => {
        for(var i=0;i<colSize;i++){
            for(var j=0;j<rowSize;j++){
                if(seating[j]==null||seating[j][i]==null)
                    continue;
                for(var k=0;k<seating[j][i].length;k++){
                        if(seating[j]!=null&& seating[j][i]!=null && seating[j][i][k]===val){
                       seating[j][i][k]=counter;
                      counter++;
                    }
                }
            }
    
        }
        return {seating:seating,counter:counter};
    }
    
    return(
        <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{fontSize:18,color:'green',paddingLeft:16}}>
                {finalSeating}
            </Text>
        </View>
    )
}

export default SeatingView