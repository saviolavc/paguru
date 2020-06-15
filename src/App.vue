<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
import index from './components/index.vue';

export default {
  name: 'App',
  components: {
	index,
  }
}
</script>

<style>

*{
    font-family: 'Open Sans', sans-serif;
}
body{
	background: #eaeaea;

}
label{
	font-size: 10px;
}
input{
	width: 100%;
}
a{ 
	width: 100%;
 }

button{
	background: #e34519;
	color: white;
	width: 100%;
}
nav a{
	padding-left: 15%;
}
.navbar{
	text-decoration-color: rgb(253, 253, 253);	
}
.collapse{
	padding-right: 15%;
}

.imgperfil{
	background-color: #aaa;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	overflow: hidden;
	position: relative;
}
.btn{
	background: #e34519;
	display: block;
	color: white;
	width: 100%;
}
.navbar{
	background: #e34519;
	text-decoration-color: white;
}
.card{
	margin: 20% auto;
	width: 30%;
	height: 45%;
}
.descricaoPadrao{
	font-size: 15px;
	text-align: center;

}
.tituloPadra{

	font: 25px bold;
	color: #e34519;
	text-align: center;
}
</style>
