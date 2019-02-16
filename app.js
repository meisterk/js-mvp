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
        this.ausgabeNode.innerHTML = '';       
    },
    render: function(daten){
        // Alles löschen
        this.clear();
        
        // Liste ausgeben
        let tableNode = document.createElement('table');
        ausgabe.appendChild(tableNode);

        for(let i=0; i< daten.length; i++){
            let trNode = document.createElement('tr');
            tableNode.appendChild(trNode);
            
            let tdNode1 = document.createElement('td');
            trNode.appendChild(tdNode1);
            let textNode1 = document.createTextNode(daten[i].vorname);
            tdNode1.appendChild(textNode1);
            

            let tdNode2 = document.createElement('td');
            trNode.appendChild(tdNode2);
            let textNode2 = document.createTextNode(daten[i].nachname);
            tdNode2.appendChild(textNode2);
            

            let tdNode3 = document.createElement('td');
            trNode.appendChild(tdNode3);
            tdNode3.appendChild(this.deleteButton(i));                    
        }        

        // Neu-Button
        ausgabe.appendChild(this.neuButton());
    },
    neuButton: function(index){
        let buttonNode = document.createElement('button');
        let textNode = document.createTextNode('Neu');
        buttonNode.appendChild(textNode);
        buttonNode.setAttribute('class','btn-floating btn-large waves-effect waves-light green');
        buttonNode.addEventListener('click', function(){
            presenter.neuerDatensatz();
        });
        return buttonNode;
    },
    deleteButton: function(index){
        let buttonNode = document.createElement('button');
        let textNode = document.createTextNode('x');
        buttonNode.appendChild(textNode);
        buttonNode.setAttribute('class','btn-floating red');
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
