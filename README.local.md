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
# Slots

some child component
```js
<template>
  <h1>Slots</h1>
  <p>
    Slots can obtain any information from any  
     parent component!
  </p>
  <slot>slot without a name is the #default</slot>
  <slot name="slot2">
    when information is sent to a slot, this
    content get overridden!
  </slot>
</template>
```

some parent component
```angular2html
<template>
  <h1>How slots are used by a parent!</h1>
  <template #default>
  <div>
    <p>this content goes to the unnamed slot</p>
  </div>
</template>
<template #slot2>
  <p>this content goes to slot 'slot2'</p>     
</template>
</template>
```
## Suspend

these built in slots provide the functionality for  
&lt;Suspend&gt;
```angular2html
<template>
<Suspend>
  <template #default>
    <p>load external content</p>
  </template>
  <template #fallback>
    <p>loader can be displayed while loading</p>
  </template>
</Suspend>
</template>
```
