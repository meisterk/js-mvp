//================ Model =====================
let model = {
    daten: [
        {vorname: "Anna", nachname: "Arm"},
        {vorname: "Berta", nachname: "Bein"},
        {vorname: "Carla", nachname: "Copf"},
    ],
    getAll: function(){
        return this.daten;
    },
    neuerDatensatz: function(){
        this.daten.push({vorname:"Neu", nachname:"Neuer"});
    }
}

//================ View =====================
let view = {
    render: function(daten){
        let ausgabe = document.getElementById('ausgabe');
        if(ausgabe.firstChild){
            ausgabe.removeChild(ausgabe.firstChild);   
        }
           
        let ulNode = document.createElement('ul');
        for(i=0; i< daten.length; i++){
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
        buttonNode.setAttribute('data-index', i);
        return buttonNode;
    }
}

//================ Presenter =====================
let presenter = {
    init: function(){
        this.neuButton = document.getElementById('neu');
        this.neuButton.addEventListener('click', this.neuerDatensatz);
    },
    neuerDatensatz: function(){
        model.neuerDatensatz();
        view.render(model.getAll());
    }
}

//================ Main =====================
view.render(model.getAll());
presenter.init();
