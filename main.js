Vue.component('usuario', {
    template: '#usuario-template',
    mounted() {
        axios.get('https://rickandmortyapi.com/api/character/')
            .then((datos) => {
                console.log(datos);
                const personajes = datos.data.results.map((per) => {
                    return {
                        pic: `${per.image}`,
                        nombre: `${per.name}`,
                        state: `${per.status}`,
                    }
                });
                this.usuario = personajes;
            });
    },
    data(){
        return{
            usuario:[],
            search:'',
        }
    },
    computed: {
        filtrardatos(){
            return this.usuario.filter((usuario) =>{
                return usuario.nombre.includes(this.search);
            });
        }
    },
});

Vue.component('user',{
    props:['datos'],
    template:'#user-template',
})

const vm = new Vue({
    el: 'main',
    data: {
        test: 'Todo va bien'

    }
});