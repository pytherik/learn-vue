# Vue variables directives

### prevent rendering before parsing script
```css
/* css */

[v-cloak] {
    display: none;
}
```
```html
<!-- html -->

<div id="app" v-cloak>
    <h1>{{ aVariable }}</h1>
<!-- application -->
</div>
<script>
    let app = Vue.createApp({
        data: function() {
            return {
                aVariable: "Hallo Welt"
            }
        }
    })
</script>
```
### action onClick

```html
<!-- short for: v-on:click="" -->
<button @click="isVisible=!isVisible">
    show/hide
</button>
```
### event modifier

right click in combination with ctrl prevent default:
```html
<button type="text" @click.right.ctrl.prevent="handleMe">Click me </button>
```
## more directives
- **v-html** : renders html-tags 
  - `<div v-html="some.html"></div>`
- **v-pre** : ignores curly braces
  - `<div v-pre>{{ someVariable }}</div>`
- **v-bind** : binds variable to an attribute
  - `<img v-bind:src="{{ some.path }}" />`
- **v-for** : iteration through 
  - arrays (value, index) 
  - objects (value, key, index)
  - `<div v-for="(element, index) in elements v-bind:key="element.uniqueValue">`
  - `<!-- some code -->`
  - `<div>`
    - the v-bind:key directive binds   
      all values of an iteration
    - 
## $event object
severel args including the `$event` obj. ('$event' is mandatory)
```html
<button @click="handleMe(value, $event)">Send value inc event</button>
```
