import { FormEvent, useEffect, useState } from 'react';

export default function FormComponent({title} : { title: any}) {

    //const initState = {''};
    const [state, handleChange] = useState('');
    //const [change, handleSubmit] = useState(initState);

/*     useEffect(() => {
        setState({value: event.target.value});
        localStorage.setItem('direction', sortDirection);
        localStorage.setItem('property', sortProperty);
      },[state]);  */

  
    function handleSubmit(e : FormEvent) {//e
        //console.log('A name was submitted: ' + state);
        alert(title + ' was submitted: ' + state);
        e.preventDefault();
    }
  
    return (//on mouse leave? //if user just doesnt press enter?
    <form onSubmit={(e) => handleSubmit(e)} >
        <label>
        {title}
        <input type="text" value={state} onChange={e => handleChange(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
    </form>
    );
  }