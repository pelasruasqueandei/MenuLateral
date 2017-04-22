function Perfil() {
    this.nome = "";
    this.email = "";
    this.senha = "";

    //setters
    this.setNome = function(nome){
        this.nome = nome;
    };
    this.setEmail = function(email){
        this.email = email;
    };
    this.setSenha = function(senha){
        this.senha = senha;
    };

    //getters
    this.getNome = function(){
        return this.nome;
    };
    this.getEmail = function(){
        return this.email;
    };
    this.getSenha = function(){
        return this.senha;
    };

    this.logout = function(){
        localStorage.removeItem("logged");
    };

    this.login = function(){
        this.logout();
        var perfil = JSON.stringify(this);
        localStorage.setItem("logged", perfil);
    };

    this.getLogged = function(){
        var logado = localStorage.getItem("logged");
        var objPerfil = JSON.parse(logado);
        var perfil = new Perfil();
        
        if(objPerfil != null){
            if(objPerfil.nome !== undefined)
                perfil.setNome(objPerfil.nome);
            if(objPerfil.email !== undefined)
                perfil.setEmail(objPerfil.email);
            if(objPerfil.senha !== undefined)
                perfil.setSenha(objPerfil.senha);
        }
        
        return perfil;
    };
}