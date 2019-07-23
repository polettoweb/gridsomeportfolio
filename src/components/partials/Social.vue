<template>
    <div class="socials__container" data-cy="socials__container">
        <a
            v-for="social in socials"
            :key="social.type"
            :href="social.link"
            :title="social.title"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i :class="social.type"/>
        </a>
    </div>
</template>
<script>
export default {
    name: "Social",
    props: {
        socials: {
            type: Array,
            required: false
        }
    }
};
</script>

