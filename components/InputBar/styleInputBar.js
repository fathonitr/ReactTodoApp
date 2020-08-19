import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    containerInput:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"rgb(210, 180, 140)",
        padding:7
    },
    addIcon:{
        flex:1,
        backgroundColor:"rgb(245,245,245)",
        justifyContent:"center", 
        alignItems:"center", 
        margin: 4
    },
    inputText:{
        flex:4,
        margin: 4,
        backgroundColor:"rgb(245,245,245)",
        borderRadius:15,
        paddingLeft:6,
        
        
    },
    buttonContainer: {
        flex:1,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "white",
        margin: 4,
      },
      button:{
          height:40,
          width:40
      }
})
export default styles