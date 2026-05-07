<template>
    <Header />
    <div class="about-page">
        <section class="about-box">
            <h1>About This Website</h1>
            <p>
                This website is made to store and manage information about different restaurants
                in one simple place. You can add restaurant details, view them on the home page,
                update information, and delete records when needed.
            </p>
        </section>

        <section class="about-grid">
            <div class="about-card">
                <h3>Restaurant Details</h3>
                <p>Keep restaurant names, cuisine types, locations, and ratings organized.</p>
            </div>
            <div class="about-card">
                <h3>Easy To Use</h3>
                <p>The website keeps everything simple so restaurant records are easy to manage.</p>
            </div>
            <div class="about-card">
                <h3>Helpful List</h3>
                <p>View different restaurants together and quickly compare their basic details.</p>
            </div>
        </section>

        <section class="about-note">
            <h2>Our Purpose</h2>
            <p>
                The goal of this project is to make restaurant management clear, quick, and
                convenient for users who want to handle multiple restaurant records.
            </p>
        </section>
    </div>
</template>
<script>
import Header from './Header.vue'

export default {
    name: 'AboutUsPage',
    components: {
        Header
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
    }
}
</script>

<style scoped>
.about-page {
    width: 85%;
    max-width: 1000px;
    margin: 35px auto;
    color: #2c3e50;
    text-align: left;
}

.about-box {
    padding: 30px;
    background-color: #eaf8fd;
    border: 1px solid #d7e3ea;
    border-radius: 8px;
    text-align: center;
}

.about-box h1 {
    margin-top: 0;
    font-size: 34px;
}

.about-box p,
.about-card p,
.about-note p {
    font-size: 17px;
    line-height: 1.7;
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin-top: 25px;
}

.about-card {
    padding: 22px;
    background-color: white;
    border: 1px solid #d7e3ea;
    border-radius: 8px;
    box-shadow: 0 4px 14px rgba(44, 62, 80, 0.1);
}

.about-card h3 {
    margin-top: 0;
    color: #2f95bd;
}

.about-note {
    margin-top: 25px;
    padding: 24px;
    border-left: 5px solid skyblue;
    background-color: #f8fcfe;
}

.about-note h2 {
    margin-top: 0;
}

@media (max-width: 800px) {
    .about-page {
        width: 92%;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }
}
</style>
