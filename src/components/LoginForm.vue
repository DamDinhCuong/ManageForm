<template>
    <div>
        <div v-if="!isLogin" class="login-card-container">
            <div class="login-card">
                <div class="login-card-logo">
                    <img src="logo.png" alt="logo" />
                </div>
                <div class="login-card-header">
                    <h1>Login</h1>
                    <div>Please login to use platform</div>
                </div>
                <form action="" class="login-card-form">
                    <div class="form-item">
                        <span class="form-item-icon"><i class="fa-regular fa-envelope"></i></span>
                        <input v-model="user.email" type="text" placeholder="Enter Email" />
                    </div>
                    <div class="form-item">
                        <span class="form-item-icon"><i class="fa-solid fa-lock"></i></span>
                        <input v-model="user.password" type="password" placeholder="Enter Password" />
                    </div>
                    <div class="form-item-other">
                        <div class="checkbox">
                            <input type="checkbox" id="rememberMe" />
                            <label for="rememberMe">Remember me!!!</label>
                        </div>
                        <a href="#">I forgot my password!</a>
                    </div>
                    <button @click.prevent.stop="loginForm()" class="glow-on-hover" type="submit">
                        Login
                    </button>
                </form>
                <div class="login-card-footer">
                    Don't have an account? <a href="#">Create a free acount</a>
                </div>
            </div>
            <div class="login-card-social"></div>
        </div>
        <div v-if="isLogin">
            <router-view></router-view>
        </div>
    </div>
</template>
<script src="../js/login.js"></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");

.login-card-container {
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    background: linear-gradient(to right, #333399, #ff00cc);
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-card {
    width: 550px;
    background: rgba(255, 255, 255, 0.5);
    padding: 4rem;
    position: relative;
}

.login-card::before {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.15);
    inset: 0;
    transform: rotate(-5deg);
    z-index: -1;
}

.login-card-logo {
    margin-bottom: 2rem;
}

.login-card-logo img {
    width: 60px;
}

.login-card-logo,
.login-card-header,
.login-card-footer {
    text-align: center;
}

.login-card a {
    text-decoration: none;
    color: #35399a;
}

.login-card a:hover {
    text-decoration: underline;
}

.login-card-header {
    margin-bottom: 2rem;
}

.login-card-header h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.login-card-header h1+div {
    font-size: calc(1rem * 0.8);
    opacity: 0.8;
}

.login-card-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.login-card-form .form-item {
    position: relative;
}

.login-card-form .form-item .form-item-icon {
    position: absolute;
    top: 50%;
    left: 4%;
    transform: translateY(-50%);
    font-size: 1.3rem;
    opacity: 0.4;
}

.login-card-form .checkbox {
    display: flex;
    align-items: center;
    gap: 7px;
}

.login-card-form .form-item-other {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: calc(1rem * 0.8);
    margin-bottom: 0.5rem;
}

.login-card-footer {
    margin-bottom: 1.5rem;
    font-size: calc(1rem * 0.8);
}

.login-card input[type="text"],
.login-card input[type="password"],
.login-card input[type="email"] {
    border: none;
    outline: none;
    background: rgba(255, 255, 255, 0.3);
    padding: 1rem 1.5rem;
    padding-left: calc(1rem * 3.5);
    border-radius: 100px;
    width: 100%;
    transition: background 0.5s;
}

.glow-on-hover {
    width: 150px;
    height: 40px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 18px;
}

.glow-on-hover:before {
    content: "";
    background: linear-gradient(45deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #48ff00,
            #00ffd5,
            #002bff,
            #7a00ff,
            #ff00c8,
            #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000;
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% {
        background-position: 0 0;
    }

    50% {
        background-position: 400% 0;
    }

    100% {
        background-position: 0 0;
    }
}
</style>
