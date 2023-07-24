//This defines a Note function which represnts the various part of a note
import { StyledView, StyledInput } from '../misc/StyledComponents';
import React, { useRef } from 'react';


function Note({title, note, onChangeTitle, onChangeNotes}) {

    const ref_second_input = useRef();

    return (
        <StyledView>
            <StyledInput className='mt-1 px-4 font-extrabold text-3xl text-left' onChangeText={onChangeTitle} 
            value={title} 
            placeholder='Title' 
            numberOfLines={3} 
            autoFocus={true}
            returnKeyType="next"
            onSubmitEditing={() => ref_second_input.current.focus()}/>

            <StyledInput className='mt-1 px-5 font-medium text-lg text-left' 
            onChangeText={onChangeNotes} 
            value={note} 
            multiline={true}   
            placeholder='Type anything here......' 
            ref={ref_second_input}
            
            />
        </StyledView>
     );
}

export default Note;
