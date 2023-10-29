import React from 'react';
import logo_light from "./../assets/so_logo.png";
import { useForm, ValidationError } from '@formspree/react';

function Form() {
    const [state, handleSubmit] = useForm("xnqkwypr");
    if (state.succeeded) {
        return <p className='text-white'>Thanks for your interest, our team will revert you soon!</p>;
    }
    return (
        <form onSubmit={handleSubmit} class="mb-5 p-3 ms-4">
            {/* <form action="https://formspree.io/f/xnqkwypr" method="POST" class="mb-5 p-3 ms-4"> */}
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" name='contact_email' class="form-control" id="exampleFormControlInput1"
                    placeholder="john.doe@mail.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" name='contact_message' id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-light"> Submit </button>
        </form>
    );
}

export default Form;