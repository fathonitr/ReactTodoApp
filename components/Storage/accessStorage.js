/**
 * utilize asyncStorage to store the List
 * Persist and Fetching Data
 * Save after adding new item in list, or resave after one data in list got deleted
 * get the data app page get reloaded
 */
import React, {useState, useContext} from 'react'
import {AsyncStorage} from 'react-native'
import {ListContext} from '../Context/listContext'

export const addToStorage=(item)=>{
    
    let storageKey=item.id
    let storageItem=JSON.stringify(item)
    
    const storeData= async ()=>{
        try{
            await AsyncStorage.setItem(
                storageKey, storageItem
            )
            console.log("setItem to AsyncStorage")
        }catch(error){
            //Error in saving
        }
    }
    storeData()
    console.log("end of saving to storage")
 //testCall(item)
}

export const getFromStorage= async(item)=>{
        try{
            let test = await AsyncStorage.getItem(item.id)
            return JSON.parse(test)
        }catch(error){
            //error
        }
}
const testCall=(item)=>{
    let test2= getFromStorage(item)
     test2.then((result)=>{
      //  console.log(result)
    }) 
}