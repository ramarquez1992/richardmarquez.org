$(document).ready(function() {
    init();
});

function init() {
    getRandomWord(function(result) {
        getWord(result, function(result) {
            if (result) {
                printWord(result);
            } else {
                init();  // Missing information, try again
            }
        });
    });
}

function getRandomWord(completion) {
    var wordnikApi = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=609d7e2de89407f36e0070939120cc2a51557b07029df0b1f';

    $.getJSON(wordnikApi, function(data) {
        completion(data.word);
    });
}

function getWord(query, completion) {
    var word = {
        name: query
    };
    
    getDefinitions(query, function(result) {
        if (result) {
            word.definitions = result;
        
            getPronunciation(query, function(result) {
                if (result) {
                    word.pronunciation = result;
            
                    getExamples(query, function(result) {
                        word.examples = result;
                
                        completion(word);
                    });
                } else { completion(false); }
            });
        } else { completion(false); }
    }); 
}

function getDefinitions(query, completion) {
    var wordnikApi = 'http://api.wordnik.com:80/v4/word.json/' + query + '/definitions?limit=200&includeRelated=false&sourceDictionaries=ahd&useCanonical=true&includeTags=false&api_key=609d7e2de89407f36e0070939120cc2a51557b07029df0b1f';

    $.getJSON(wordnikApi, function(data) {
        var definitions = [];

        $.each(data, function(i, field) {
            definitions.push(field);
        });
        
        if (definitions.length < 1) {
            definitions = false;
        }
        
        completion(definitions);
    });    
}

function getPronunciation(query, completion) {
    var wordnikApi = 'http://api.wordnik.com:80/v4/word.json/' + query + '/pronunciations?useCanonical=true&limit=50&api_key=609d7e2de89407f36e0070939120cc2a51557b07029df0b1f';

    $.getJSON(wordnikApi, function(data) {
        var pronunciation = false;
        
        if (data.length > 0 && data[0].rawType == 'ahd-legacy') {
                pronunciation = data[0].raw;
        }
        
        completion(pronunciation);
    });    
}

function getExamples(query, completion) {
    var limit = 2;
    var wordnikApi = 'http://api.wordnik.com:80/v4/word.json/' + query + '/examples?includeDuplicates=false&useCanonical=true&skip=0&limit=' + limit + '&api_key=609d7e2de89407f36e0070939120cc2a51557b07029df0b1f';

    $.getJSON(wordnikApi, function(data) {
        var examples = [];

        $.each(data.examples, function(i, field) {
            var e = {
                text: field.text,
                src: field.title,
                url: field.url
            };

            examples.push(e);
        });
        
        if (examples.length < 1) {
            examples = false;
        }
        
        completion(examples);
    }).fail(function() {
        completion(false);
    });   
}

function printWord(word) {
    document.title = word.name;
    
    printName(word.name);
    printPronunciation(word.pronunciation);
    printDefs(word.definitions);
    printExamples(word.examples);
}

function printName(name) {
    $('<div>')
        .addClass('name')
        .text(name)
        .appendTo('#word');
}

function printPronunciation(pronunciation) {
    $('<div>')
        .addClass('pronunciation')
        .text(pronunciation)
        .appendTo('#word');
}

function printDefs(list) {
    var ul = $('<ul>')
        .attr('id', 'definitions')
        .appendTo('#word');
            
    for (var i = 0; i < list.length; ++i) {
        var def = $('<li>')
            .addClass('definition')
            .appendTo(ul);
            
        $('<span>')
            .addClass('num')
            .text((i+1) + ') ')
            .appendTo(def);
            
        $('<span>')
            .addClass('partOfSpeech')
            .text('[' + list[i].partOfSpeech + '] ')
            .appendTo(def);
            
        $('<span>')
            .addClass('content')
            .text(list[i].text)
            .appendTo(def);
    }
}

function printExamples(list) {
    var ul = $('<ul>')
        .attr('id', 'examples')
        .appendTo('#word');
            
    for (var i = 0; i < list.length; ++i) {
        var e = $('<li>')
            .appendTo(ul);
        
        $('<span>')
            .addClass('content')
            .text(list[i].text)
            .appendTo(e);
        
        $('<a>')
            .addClass('src')
            .attr('href', list[i].url)
            .text(list[i].src)
            .appendTo(e);
    }
}
