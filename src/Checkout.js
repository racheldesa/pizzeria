/**
 * Order payment information form
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";

function Checkout () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [dataF,setDataF] = useState({});
    const [viewer,setViewer] = useState(0);

    const onSubmit = data => {
        setDataF(data);
        setViewer(1);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="container mt-5">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputFname">First Name</label>
                        <input {...register("fname", { required: true })} class="form-control" id="inputFname" placeholder="First Name" />
                        {errors.fname && <p>First Name is required.</p>}
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputLname">Last Name</label>
                        <input {...register("lname", { required: true })} class="form-control" id="inputLname" placeholder="Last Name" />
                        {errors.lname && <p>Last Name is required.</p>}
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputCard">Credit Card</label>
                    <input {...register("creditCard", { required: true })} class="form-control" id="inputCard" placeholder="################" />
                    {errors.creditCard && <p>Credit Card Number is required.</p>}
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail">Email</label>
                        <input {...register("email", { required: true })} class="form-control" id="inputEmail" placeholder="Email" />
                        {errors.email && <p>Email is required.</p>}
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPhone">Phone</label>
                        <input {...register("phone", { required: true })} class="form-control" id="inputPhone" placeholder="###-###-####" />
                        {errors.phone && <p>Phone Number is required.</p>}
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputAddress">Address</label>
                    <input {...register("address", { required: true })} class="form-control" id="inputAddress" placeholder="Address" />
                    {errors.address && <p>Address is required.</p>}
                </div>
                <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input {...register("city", { required: true })} class="form-control" id="inputCity" placeholder="City" />
                    {errors.city && <p>City is required.</p>}
                </div>
                <div class="form-group col-md-6">
                    <label for="inputState">State</label>
                    <input {...register("state", { required: true })} class="form-control" id="inputState" placeholder="State" />
                    {errors.state && <p>State is required.</p>}
                </div>
                <div class="form-group col-md-6">
                    <label for="inputZip">Zip</label>
                    <input {...register("zip", { required: true })} class="form-control" id="inputZip" placeholder="#####" />
                    {errors.zip && <p>Zip Code is required.</p>}
                </div>
            </form>
        </div>
    )
}

export default Checkout;