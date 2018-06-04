<<<<<<< HEAD
# vue-img-view

> A Vue.js project

## use
``` bash
# install
npm install vue-img-view --save / yarn add vue-img-view

# import and register
import imgView from 'imgView'

## quickly
Vue.use(imgView)
## options
Vue.use(imgView, {
    name, // custom component name,
    default: {
        width, height, ...
    }, // default property for enlarge img ,
})

# use
<img-view :src="xxx" width="50px" height="50px" eleClass="small-img" />

# props
:src  small img src  type:String  --- requred
width|height|alt: small img width|height|alt  type:String
eleClass： small img className type:String  --- recommend
eleStyle: small img style type:Object --- not recommend
viewStyle: enlarge img style type:Object  
---src: enlarge img src  type:String default is img src
---width|height: enlarge img width|height  type:String(need postfix 'px')  default: '500px'
---class：enlarge img className type:String
 
``` 

## required

vue2.0 es6
