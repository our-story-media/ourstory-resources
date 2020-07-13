//EDIT BELOW THIS LINE

var lang = 'fr';
var page = 'A4';
var basename = 'IndebaCards_v2-FR'; 
// var basename = 'Indaba_Cards'; 
var cardbacks = [0,8,14,21,28,34,40,45,51,57,65,71,78,83,89,96,102,108,115,122,127];

// EDIT ABOVE THIS LINE

var fs = require('fs');
var pdf = require('html-pdf');
const { exit } = require('process');
var path = require('path');

var vert = (page=='A4')? 2.8: 5;

var html = '<html><body style="">';

var currentbackground = `${basename}.jpg`;
cardbacks.splice(0,1);

var counter = 2;
var currentfile = `${basename}${counter}.jpg`;

while (fs.existsSync(`../jpg-${lang}-rgb/${currentfile}`))
{
    // console.log('exists');

    html+= `<img style="width:47%;margin-left:3%;margin-top:${vert}%" src="./jpg-${lang}-rgb/${currentbackground}" />`;

    html+= '<div style="position:absolute;top:0;left:50%;height:100%;width:0;border-right:1px dashed silver;"></div>'

    html+= `<img style="width:47%;margin-top:${vert}%" src="./jpg-${lang}-rgb/${currentfile}" />`;

    counter ++;

    if (counter == cardbacks[0])
    {
        currentbackground = `${basename}${counter}.jpg`;
        //skip
        counter++;
        cardbacks.splice(0,1);
    }

    currentfile = `${basename}${counter}.jpg`;
    
}

// exit(0);

html += "</body></html>";

// console.log(html);

var options = { format: page, orientation:'landscape', base: "file:///"+__dirname, quality:"98" };
pdf.create(html, options).toFile(`./printable-large-${page}-${lang}.pdf`, function(err, res) {
    if (err) return console.log(err);
});