import React from "react"
import { useForm } from "react-hook-form"

function Form() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='petName' placeholder='petName' maxLength='20' ref={register({ required: true})}/>
            {errors.petName && <span>This field is required</span>}

            <input name='weight' type="number" placeholder='petWeightLb' max="20000" ref={register({ required: true})}/>
            {errors.weight && <span>This field is required</span>}
            
            <input name='favoriteFood' maxLength='20' placeholder='favoriteFood' ref={register({required: true})}/>
            {errors.favoriteFood && <span>This field is required</span>}

            <input type='submit'/>
        </form>
    )
}
export default Form;