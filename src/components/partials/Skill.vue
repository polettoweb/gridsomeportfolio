<template>
    <div :class="'skill ' + title" data-cy="skill">
        <h4>{{title}}</h4>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Skill",
    props: {
        title: {
            type: String,
            required: true
        }
    }
};
</script>