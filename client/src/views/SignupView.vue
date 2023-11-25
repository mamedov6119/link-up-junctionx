<script setup>
function registerUser(event) {
    event.preventDefault();

    const form = document.querySelector('form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    if (data.password !== data.confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => {
        console.log(response);
        if (response.ok) {
            alert('User created successfully');
            window.location.href = '/login';
        } else {
            alert('User creation failed');
        }
    })
}
</script>

<template>
    <div>
        <form class="card card-body" :onSubmit="registerUser">
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