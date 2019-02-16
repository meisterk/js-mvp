(function(){
    'use strict';

//================ Model =====================
let model = {
    // Data
    daten: [
        {vorname: "Anna", nachname: "Arm"},
        {vorname: "Berta", nachname: "Bein"},
        {vorname: "Carla", nachname: "Copf"},
    ],

    // CREATE
    neuerDatensatz: function(){
        this.daten.push({vorname:"Neu", nachname:"Neuer"});
    },

    // READ
    getAll: function(){
        return this.daten;
    },
    
    // UPDATE

    // DELETE
    loeschen: function(index){
        this.daten.splice(index, 1);
    }
}

//================ View =====================
let view = {
    ausgabeNode: null,
    init: function(){
        this.ausgabeNode = document.getElementById('ausgabe');
    },
    clear: function(){
        if(this.ausgabeNode.firstChild){
            this.ausgabeNode.removeChild(this.ausgabeNode.firstChild);   
        }
    },
    render: function(daten){           
        let ulNode = document.createElement('ul');
        for(let i=0; i< daten.length; i++){
            let liNode = document.createElement('li');
            let textNode = document.createTextNode(daten[i].vorname + " " + daten[i].nachname);
            liNode.setAttribute('data-index', i);
            liNode.appendChild(textNode);
            liNode.appendChild(this.deleteButton(i));
            ulNode.appendChild(liNode);            
        }
        ausgabe.appendChild(ulNode);
    },

    deleteButton: function(index){
        let buttonNode = document.createElement('button');
        let textNode = document.createTextNode('Löschen');
        buttonNode.appendChild(textNode);
        buttonNode.setAttribute('data-index', index);
        buttonNode.addEventListener('click', function(){
            presenter.loeschen(index)
        });
        return buttonNode;
    }
}

//================ Presenter =====================
let presenter = {
    // INIT
    init: function(){ 
        view.init();
        view.render(model.getAll());
    },

    // CREATE
    neuerDatensatz: function(){
        model.neuerDatensatz();
        view.render(model.getAll());
    },

    // UPDATE

    // DELETE
    loeschen: function(index){
        model.loeschen(index);
        view.render(model.getAll());
    }
}

//================ Main =====================
presenter.init();

})();
