<script setup>
//get env variables
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function registerUser() {
    const form = document.querySelector('form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    if (data.password !== data.confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    fetch(`${SERVER_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.success) {
            alert('Registration successful');
            location.href = '/login';
        } else {
            alert(data.message);
        }
    })
    .catch((err) => {
        console.log(err);
        alert('An error occurred');
    });
}
</script>

<template>
    <div>
        <form class="card card-body" onSubmit="registerUser">
            <div class="mb-3">
                <label for="name" class="form-label">
                    Full name<span class="text-danger">*</span>
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="name" name="name" 
                    placeholder="Surname Name"
                required>
            </div>

            <div class="row">
                <div class="col-6 mb-3">
                    <label for="email" class="form-label">
                        Email address<span class="text-danger">*</span>
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="email" name="email"
                        placeholder="user@example.com"
                    required>
                </div>
                <div class="col-6 mb-3">
                    <label for="phone" class="form-label">
                        Mobile Number<span class="text-danger">*</span>
                    </label>
                    <input
                        type="tel"
                        class="form-control"
                        id="phone" name="phone"
                        pattern="[0-9]{11}"
                        maxlength="11"
                        placeholder="36102345678"
                    required>
                </div>
            </div>

            <div class="row">
                <div class="col-6 mb-3">
                    <label for="password" class="form-label">
                        Password<span class="text-danger">*</span>
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="password" name="password"
                        placeholder="• • • •"
                    required>
                </div>
                <div class="col-6 mb-3">
                    <label for="confirmPassword" class="form-label">
                        Confirm Password<span class="text-danger">*</span>
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="confirmPassword" name="confirmPassword"
                        placeholder="• • • •"
                    required>
                </div>
            </div>

            <p>
                Have an account? <RouterLink to="/login">Login</RouterLink>
            </p>

            <button style="background-color: #77249E; border-color: blueviolet;" type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</template>