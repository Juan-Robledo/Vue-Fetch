let app = new Vue({
    el: "#app",
    data: {
        provincias: '',
        municipios: [],
        provincia:'',
    },
    methods:{
        mostrarMunicipios: function(){
            fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${this.provincia}`)
            .then(response => response.json())
            .then(data => {
                this.municipios = data.municipios;
                console.log(data)
            })
            .catch(err => console.log(err))
        }
    },
    mounted(){
        fetch("https://apis.datos.gob.ar/georef/api/provincias")
        .then(response => response.json())
        .then(data => {
            this.provincias = data.provincias;
        })
        .catch(err => console.log(err))
    }
})