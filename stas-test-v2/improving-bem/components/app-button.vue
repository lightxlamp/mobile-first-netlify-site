<template>
  <a href="#" v-if="startPosition === 'down'" class="app-button app-button--animated-down">{{ btnText }}</a>
  <a href="#" v-else class="app-button app-button--animated-left">{{ btnText }}</a>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: ''
    },
    startPosition: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style scoped lang="scss">
.app-button {
  align-self: flex-start;
  background-color: $color-primary;
  border-radius: $border-radius;
  border: none;
  color: white;
  cursor: pointer;
  font-family: $font-display;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 1.2rem 2.5rem;
  text-transform: uppercase;
  transition: all 0.2s;
  position: relative;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba($color-primary, 0.5);

    &::after{
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }
  }

  &:active, &:focus {
    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem rgba($color-primary, 0.5);
    /* when user presses the button :active pseudo class applies */
  }

  &::after {
      /* to hide new button behind */
      /* ::after - creates a copy of a button */
      content: "";
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: .6rem;
      background-color: $color-primary;
      position: absolute; 
      top: 0;
      left: 0;
      z-index: -1;
      transition: .4s;
  }

  &--animated-left {
    animation: appButtonAnimationLeft .5s ease-out .75s;
    animation-fill-mode: backwards; /* added because after adding delay. 4th animation param*/
    /* The animation-fill-mode property defines what values 
    are applied by an animation outside the time it is executing. 
    animation-fill-mode = Определяет, какие стили должны применяться к элементу, когда анимация не проигрывается. 
    Например, после её завершения или при остановке. 
    По умолчанию, в момент окончания анимации стиль элемента возвращается к исходному, 
    свойство animation-fill-mode позволяет изменить это поведение и сделать так, чтобы стиль элемента 
    оставался как у последнего ключевого кадра.
    */
  }  
  
  &--animated-down {
    animation: appButtonAnimationDown .5s ease-out .75s;
    animation-fill-mode: backwards;
  }
}

@keyframes appButtonAnimationDown {
	0% {
    opacity: 0;
    transform: translateY(2rem);
  }
  70% {
		transform: translateY(-1rem);
	}
	100% {
		opacity: 1;
	}
}

@keyframes appButtonAnimationLeft {
	0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  70% {
		transform: translateX(5rem);
	}
	100% {
		opacity: 1;
	}
}
</style>