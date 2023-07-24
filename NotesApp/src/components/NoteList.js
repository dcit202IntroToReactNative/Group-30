import React from 'react';
import { StyledText } from '../misc/StyledComponents';
import { ToastAndroid, TouchableOpacity } from 'react-native';


function NoteList({ item }) {
    const { titler, noter } = item;
    return (
        <>
            <TouchableOpacity
                style={{ backgroundColor: '#fff', alignItems: 'flex-start', paddingLeft: 11, width: '50%', paddingVertical: 31, margin: '1%', borderRadius: 10 }}>
                <StyledText className='text-left text-md font-bold' numberOfLines={2}>{titler}</StyledText>
                <StyledText className='text-left text-sm font-light' numberOfLines={3}>{noter}</StyledText>
            </TouchableOpacity>
        </>

    );
}

export default NoteList;
