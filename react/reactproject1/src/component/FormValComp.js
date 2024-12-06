import React, { useState } from 'react';

function FormValComp() {
    const courses = ["Java", "Python", "Angular", "HTML"];
    const [user, changeUser] = useState({
        fname: "",
        password: "",
        course: [],
        term: false
    });

    const changeInput = (event) => {
        const { type, name, value, checked, options } = event.target;

        if (type === "checkbox") {
            changeUser({ ...user, [name]: checked });
        } else if (type === "select-multiple") {
            const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);
            changeUser({ ...user, [name]: selectedOptions });
        } else {
            changeUser({ ...user, [name]: value });
        }
    };

    const checkForm = (event) => {
        event.preventDefault();
        const { fname, password, course, term } = user;

        if (fname.trim() === "") {
            window.alert("Name is required");
            return false;
        }
        if (!/^[a-zA-Z ]{2,20}$/.test(fname.trim())) {
            window.alert("Invalid Name");
            return false;
        }

        if (password.trim() === "") {
            window.alert("Password is required");
            return false;
        }
        if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?!.*\s).{8,15}$/.test(password.trim())) {
            window.alert("Invalid Password");
            return false;
        }

        if (course.length === 0) {
            window.alert("Please select at least one course");
            return false;
        }

        if (!term) {
            window.alert("Please accept terms and condition");
            return false;
        }

        window.alert(JSON.stringify(user));
    };

    return (
        <div>
            <form onSubmit={checkForm}>
                <div className='p-3'>
                    <label>Full Name: </label>
                    <input type='text' name="fname" value={user.fname} onChange={changeInput}></input>
                </div>

                <div className='p-3'>
                    <label>Password: </label>
                    <input type='password' name="password" value={user.password} onChange={changeInput}></input>
                </div>

                <div className='p-3'>
                    <label>Course: </label>
                    <select name='course' multiple={true} value={user.course} onChange={changeInput}>
                        <option value="">--select an option--</option>
                        {courses.map((val, index) => (
                            <option value={val} key={index}>{val}</option>
                        ))}
                    </select>
                </div>

                <div className='p-3'>
                    <input type='checkbox' name="term" checked={user.term} onChange={changeInput}></input>{" "}
                    <label>Accept terms and condition</label>
                </div>

                <button type='submit'>Submit form</button>
            </form>
        </div>
    );
}

export default FormValComp;
