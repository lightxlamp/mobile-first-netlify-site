<template>
    <div class="video-story">
        <iframe
            :src="src"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: '' 
        },
    }
}
</script>

<style lang="scss" scoped>
.video-story {
    padding-bottom: 56.25%;
    position: relative;
}
iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: $border-radius;
}
</style>