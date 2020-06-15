<template>
<div>
<div class="container">
    <div class="row" v-if@click="submit">
        <div class="card">
            <div class="card-body">
                <div class="form-todo form-group">
                    <h5 class="tituloPadra">Olá Ermitão, seja bem-vindo a nossa loja</h5>
                    <p class="descricaoPadrao">Faça o login para ter acesso a loja de conchas</p>
                    <label for="nome">Seu nome</label>
                    <input type="name" v-model="nomeDigitado" class="form-control" id="nome" name="">
                    <hr/>
                    <a href="#" v-on:click.prevent="" type="submit" class="btn">ACESSAR LOJA</a>
                </div>
            </div>
        </div>
    </div>	  
</div>


<!--Loja em baixo por enquanto--><!--
 <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"> <img class="imgperfil" src="https://image.freepik.com/fotos-gratis/tela-vazia-branca_1194-7555.jpg"> Olá,  </a>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                <a class="nav-link" href="#">Carrinho</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Sair</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container">
            <H5 class="tituloPadra">CA</H5>
    </div> -->

</div>

</template>

<script>

export default {
    data(){

        return {
            nomeDigitado: "",
            valor: 5,
        }
    },
    methods:{   

    }
}

</script>
