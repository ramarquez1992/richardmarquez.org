$(document).ready(function() {
    life();
    
    /*jQuery('<div/>', { id: 'finger' }).appendTo('#lab');
    $('#diamond').animo( { animation: ['tada', 'bounce'], duration: 1 }, function() {
        $('#diamond').animo( { animation: 'bounceInRight', duration: 1 } );
        });*/
});

function life() {
    var generations = 3;

    /*var input = [[0,0,-1,-1],
                 [0,-1,-1,-1],
                 [-1,-1,-1,-1],
                 [-1,-1,-1,-1]];*/
                 
    var input = [[0,0,-1,0],
                 [0,0,-1,0],
                 [0,-1,-1,0],
                 [-1,-1,-1,0]];

    var gen1 = input.slice(0);
    var gen2 = input.slice(0);

    var state = "";
    
    // Print initial world state
    for(var y = 0; y < input.length; y++) {
        for(var x = 0; x < input[y].length; x++) {
            if (input[y][x] >= 0) {
                state += "☒ ";
            } else {
                state += "☐ ";
            }
        }
    
        state += "<br/>";
    }
    state += "<br/><br/>";



    for (var i = 0; i < generations; ++i) {
        //var y = 0;
        //var x = 0;
    
        for(var y = 0; y < input.length; y++) {
            for(var x = 0; x < input[0].length; x++) {
                gen2[y][x] = countNeighbors(x, y, gen1.slice(0));
            }
        }
    
        for(var y = 0; y < input.length; y++) {
            for(var x = 0; x < input[0].length; x++) {
                gen1[y][x] = doNeighborsWork(gen1[y][x], gen2[y][x]);
            }
        }
    
        for(var y = 0; y < input.length; y++) {
            for(var x = 0; x < input[0].length; x++) {
                if (gen1[y][x] >= 0) {
                    state += "☒ ";
                } else {
                    state += "☐ ";
                }
            }
        
            state += "<br/>";
        }
    
        state += "<br/><br/>";
    }

    document.getElementById("life").innerHTML = state;
}

// Return >= 0
function countNeighbors(x, y, g) {
    //alert(gen1);
    var ySize = g.length;
    var xSize = g[0].length;
    var count = 0;
    
    if((y - 1) >= 0) {
        if(g[y - 1][x] >= 0) {
            count++;
        }
        
        if((x - 1) >= 0) {
            if(g[y - 1][x - 1] >= 0) {
                count++;
            }
        }
        
        if((x + 1) < xSize) {
            if(g[y - 1][x + 1] >= 0) {
                count++;
            }
        }
    }
    
    
    if((y + 1) < ySize) {
        if(g[y + 1][x] >= 0) {
            count++;
        }
        
        if((x - 1) >= 0) {
            if(g[y + 1][x - 1] >= 0) {
                count++;
            }
        }
        
        if((x + 1) < xSize) {
            if(g[y + 1][x + 1] >= 0) {
                count++;
            }
        }
    }
    
    if((x - 1) >= 0) {
        if(g[y][x - 1] >= 0) {
            count++;
        }
    }

    if((x + 1) < xSize) {
        if(g[y][x + 1] >= 0) {
            count++;
        }
    }

    return count;
}


// Return 0 (alive) or -1 (dead)
function doNeighborsWork(current, neighbors) {
    var lifeState = -1;

    if(neighbors >= 2) {
        lifeState = 0;
        if(current == -1 && neighbors < 3) {
            lifeState = -1;
        }
    }
    
    if(neighbors < 2 || neighbors > 3) {
        lifeState = -1;
    }
    
    return lifeState;
}

