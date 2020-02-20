var CERAMIC_DYE = ["Black","Red","Green","Brown","Blue","Purple","Cyan","LightGray","Gray","Pink","Lime","Yellow","LightBlue","Magenta","Orange","White"];

for(let KEY = 0;KEY < CERAMIC_DYE.length;KEY++){
    var COLOUR = CERAMIC_DYE[KEY],ID = "ceramicDye" + COLOUR,NAME = "Ceramic Dye(" + COLOUR + ")";
    IDRegistry.genItemID(ID);
    Item.createItem(ID,NAME,{name:"ceramicdye" + COLOUR});

    Recipes.addShapeless({id:ItemID[ID],count:4,data:0},[{id:337,data:0},{id:351,data:KEY}]);
}