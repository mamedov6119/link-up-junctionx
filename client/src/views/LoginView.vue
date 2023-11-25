<script setup>
function loginUser(event) {
    event.preventDefault();

    const form = document.querySelector('form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => {
        console.log(response);
        if (response.ok) {
            alert('User logged in successfully');
            window.location.href = '/';
        } else {
            alert('User login failed');
        }
    })
}
</script>

<template>
    <div>
        <form class="card card-body" :onSubmit="loginUser">
            <div class="mb-3">
                <label for="email" class="form-label">
                    Email address<span class="text-danger">*</span>
                </label>
                <input
                    type="email"
                    class="form-control"
                    id="email" name="email"
                required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">
                    Password<span class="text-danger">*</span>
                </label>
                <input
                    type="password"
                    class="form-control"
                    id="password" name="password"
                required>
            </div>
    
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>