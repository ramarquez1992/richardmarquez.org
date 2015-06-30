$(document).ready(function() {
    init();
});

function init() {
    getRandomWord(function(result) {
        getWord(result, function(result) {
            if (result) {
                print(result);
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
            
                    getExamples(query, 100, function(result) {
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
            var d = {
                text: field.text
            };
            
            if (field.partOfSpeech) {
                d.partOfSpeech = field.partOfSpeech;
            } else {
                d.partOfSpeech = '~~';
            }
            
            definitions.push(d);
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

function getExamples(query, limit, completion) {
    var wordnikApi = 'http://api.wordnik.com:80/v4/word.json/' + query + '/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=' + limit + '&api_key=609d7e2de89407f36e0070939120cc2a51557b07029df0b1f';

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

function print(word) {
    document.title = word.name;
    printWord(word);
    printExamples(word.examples);
    multiplyExamples(200);
    highlightWord(word.name);
    removeElementById('loading');
}

function printWord(word) {
    var div = $('<div>')
        .attr('id', 'word')
        .appendTo('body');
    
    getNameHtml(word.name).appendTo(div);
    getPronunciationHtml(word.pronunciation).appendTo(div);
    getDefsHtml(word.definitions).appendTo(div);
}

function getNameHtml(name) {
    return $('<div>')
        .addClass('name')
        .text(name);
}

function getPronunciationHtml(pronunciation) {
    return $('<div>')
        .addClass('pronunciation')
        .text(pronunciation);
}

function getDefsHtml(list) {
    var ul = $('<ul>')
        .attr('id', 'definitions');
            
    for (var i = 0; i < list.length; ++i) {
        var def = $('<li>')
            .appendTo(ul);
            
        $('<span>')
            .addClass('num')
            .text(i + 1)
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
    
    return ul;
}

function printExamples(list) {
    var ul = $('<ul>')
        .attr('id', 'examples')
        .appendTo('body');
            
    for (var i = 0; i < list.length; ++i) {
        var e = $('<li>')
            .appendTo(ul);
        
        $('<a>')
            .addClass('content')
            .attr('href', list[i].url)
            .text(list[i].text)
            .appendTo(e);
    }
}

function multiplyExamples(times) {
    var examplesDiv = document.getElementById("examples");
    var examplesText = examplesDiv.innerHTML;
    
    var initialText = examplesText;
    var initialCount = examplesDiv.children.length;
    
    for (var i = 0; i < (times - initialCount); i += initialCount) {        
        examplesText += initialText;
    }
    
    examplesDiv.innerHTML = examplesText;
}

function highlightWord(word) {
    var examplesDiv = document.getElementById("examples");
    var examplesText = examplesDiv.innerHTML;
    
    var regex = new RegExp('(' + word + ')', 'gi');
    examplesText = examplesText.replace(regex, '<span style="color:' + getRandomColor() + ';" class="word">$1</span>');
    
    examplesDiv.innerHTML = examplesText;
}
