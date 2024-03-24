import React, { useState } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

function Show(){
    const[open,setOpen] = useState(true)

    return (
        <>
            <TouchableOpacity style = {{backgroundColor:"springgreen", padding: 20, margin: 20}} onPress={()=>setOpen(prev=>!prev)}>
                {open && <Text>Hide</Text>}
                {open || <Text>Show</Text>}
            </TouchableOpacity>
            
            {open && <Image style = {{height: 100, width: 100}} uri = "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>}
        </>
  )
}

export default Show