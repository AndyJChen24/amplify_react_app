import React from "react"
import { useForm } from "react-hook-form"

function Form() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='petName' placeholder='petName' ref={register({ required: true })}/>
            <input name='weight' placeholder='petWeightLb' ref={register({ required: true })}/>
            <input name='favoriteFood' placeholder='favoriteFood' ref={register({required: true})}/>
            {errors.petName && errors.weight && errors.favoriteFood && <span>This field is required</span>}
            <input type='submit'/>
        </form>
    )
}
export default Form;