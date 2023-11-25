<script setup>

</script>

<template>
    <form>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" required>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" required>
        </div>
        <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required>
        </div>
        <div class="mb-3">
            <label for="mobileNumber" class="form-label">Mobile Number (11 digits):</label>
            <input type="tel" class="form-control" id="mobileNumber" name="mobileNumber" pattern="[0-9]{11}" maxlength="11"
                required>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <RouterLink to="/login">Login</RouterLink>
</template>