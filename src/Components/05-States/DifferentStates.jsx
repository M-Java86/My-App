import {useState} from 'react' //hold the value of a state that we are trying to create. 

const DifferentStates =()=>{

    const [edit, setEdit] = useState(false);

    return(
        <>
            <p>The value of edit is {edit};</p>
            {
               edit?<p>i am True</p> : <p>i am False</p>
            }
            <button onClick={()=> setEdit(c=>!c)}>Update the  value of edit</button>
        </>
    )

}

export default DifferentStates