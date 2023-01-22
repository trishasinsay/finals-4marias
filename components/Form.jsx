<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Graduate&family=Inter:wght@300;600&display=swap" rel="stylesheet"></link>
</link>

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Form.module.css"


const schema = yup.object().shape({
  firstName: yup.string().max(255).required('First name is required'),
  lastName: yup.string().max(255).required('Last name is required'),
  email: yup.string().email().required(),
  mobile: yup.number().required("A phone number is required"),
  address: yup.string().max(255).required('Address is required'),
  old_tupStudent: yup.string().max(255).required('This is required'),
  reason: yup.string().max(255).required('This is required'),
  
});


const App = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  const selectedElement = (data) => {
    console.log({ data });
    reset();
  };
  const handleChange = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <div className={styles.main}>
        <div className={styles.form}>
            <div className={styles.header}>
            <form onSubmit={handleSubmit(onSubmitHandler, selectedElement, handleChange)}>
            <h2>Registration Form</h2>
            <br />
            </form>
            </div>

      <form>
        <div className={styles.firstName}>
        <input {...register("firstName")} className={styles.name} placeholder="First Name" type="text" required />
        <p>{errors.firstName?.message}</p>
        <br/>
        </div>
        
        <div className={styles.lastName}>
        <input {...register("lastName")} className={styles.name} placeholder="Last Name" type="text" required />
        <p>{errors.lastName?.message}</p>
        <br />
        </div>
       
        
        <div className={styles.email}>
        <input {...register("email")} className={styles.name} placeholder="Email" type="email" required />
        <p>{errors.email?.message}</p>
        <br />
        </div>

        <div className={styles.mobile}>
        <input {...register("mobile")} className={styles.name} placeholder="Mobile Number" type="int" required />
        <p>{errors.mobile?.message}</p>
        <br />
        </div>

        <div className={styles.old_tupStudent}> 
        <select className={styles.name} placeholder="Are you old TUP Student?" required>
        <option value="" disabled selected>Are you old TUP Student?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        </select>
        <p>{errors.old_tupStudent?.message}</p>
        <br />
        </div>

        <div className={styles.address}>
        <input {...register("address")} className={styles.name} placeholder="Address" type="text" required />
        <p>{errors.address?.message}</p>
        <br />
        </div>

        <div className={styles.reason}>
        <input {...register("reason")} className={styles.name} placeholder="Why do you want to study here?" type="text" required />
        <p>{errors.reason?.message}</p>
        <br />
        </div>

      <div className={styles.submit}>
      <button type="submit">Submit</button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default App;

