<template>
    <li class="expcard" data-cy="expcard">
        <i class="ion-ios-circle-filled"/>
        <div class="expcard__title">
            <p>{{title}}</p>
        </div>
        <div class="expcard__text">
            <p class="expcard__location">{{location}}</p>
            <p class="expcard__date">{{date}}</p>
            <p class="expcard__copy">{{text}}</p>
        </div>
    </li>
</template>

<script>
export default {
    name: "ExpCard",
    props: {
        title: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: false
        },
        date: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
};
</script>

<style>
</style>