import Vue from "vue";
import Button from "./components/Button/button.vue"
import Icon from "./components/Icon/icon.vue"

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
    el:"#app"
})