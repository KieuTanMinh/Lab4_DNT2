import React,{useState} from "react";
import { View,Text,TextInput,Button } from "react-native";
import {collection,addDoc, doc, updateDoc} from 'firebase/firestore';
import { FIRESTORE_DB } from "./firebaseConfig";
const AppDemo72=()=>{
    const [text, setText]=useState('');
    const [id, setId]=useState('');
     
    const handleUpdate = async (itemId, newText) =>{
        try {
            itemId='uEkiDbsZa22ZtZZhNHJH';
            const itemDoc = doc(FIRESTORE_DB,'SinhViens',itemId);
            await updateDoc(itemDoc,{text:newText});
            console.log("Tai lieu duoc cap nhat voi ID=",itemDoc.id);
            setText('');
        } catch (error) {
            console.error("Loi ghi du lieu: ",error);
        }
    }
    return(
        <View>
            <TextInput placeholder="Nhap id" value={id}
                onChangeText={setId} />
            <TextInput placeholder="Nhap ten sinh vien" value={text}
                onChangeText={setText} />
            <Button title="Them du lieu" onPress={() => handleUpdate(id,text)} />
        </View>
    );
}
export default AppDemo72;