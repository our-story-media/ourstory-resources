let fs = require('fs');
let _ = require('lodash');
const path = require('path');
const glob = require('glob');
const { Translate } = require('@google-cloud/translate');
const translate = new Translate();
const yamlFront = require('hexo-front-matter-editor');

let locales = ['es', 'fr','ar'];
let words = ['Español','Français','عربى'];

let dir = path.join(__dirname, '..','..');

// console.log(dir);
let originalfiles = glob.sync('**/*.md',{cwd:dir,nodir:true,ignore: ['es/**','fr/**','ar/**']});
console.log(originalfiles)
// return;

let loaded = [];

// var files = fs.readdirSync('./external');
// console.log(files);
// let external_keys = _.uniq(files.map((f)=>{
//     return f.split('.')[0];
// }));

async function main() {

    // for (let loc of locales) {
    //     let loce = JSON.parse(fs.readFileSync(`${loc}.js`));
    //     loaded.push(loce);
    //     console.log(`Loaded ${loc}: ${_.size(loce)} Strings`);
    // }

    // let baseline = _.keys(loaded[0]);
    // console.log(baseline)

    

    for (let i = 0; i < _.size(originalfiles); i++) {
        //for each lang:
        for (let loc of locales) {
            let newfile = path.join(dir,loc, originalfiles[i]);
            // console.log(newfile);
            if(!fs.existsSync(newfile))
            {
                console.log(`Translating: ${newfile}`);

                fs.mkdirSync(path.dirname(newfile),{recursive:true});
                // let content = fs.readFileSync(path.join(dir,originalfiles[i])).toString();
                let data = await yamlFront.read(path.join(dir,originalfiles[i]));
                // console.log(data.title);
                // console.log(data.description);
                // console.log(data['_content']);

                let [translation] = await translate.translate(data['_content'], {to:loc,format:'html'});
                data['_content'] = translation;                

                if (data.description)
                {
                    [translation] = await translate.translate(data.description, {to:loc});
                    data.description = translation;
                }

                if (data.title)
                {                
                    [translation] = await translate.translate(data.title, {to:loc});
                    data.title = translation;
                }

                // console.log(results);


                // console.log(data);

                await yamlFront.write(data,newfile);

            }

        }
    }

        // let matching = _.intersection(_.keys(loaded[i]), baseline);
        // let notused = _.difference(_.keys(loaded[i]), baseline);
        // let existsonlyinbaseline = _.difference(baseline, _.keys(loaded[i]));
        // console.log(`en terms missing from ${locales[i]}: ${_.size(baseline) - _.size(matching)}`);
        // console.log(`superflous ${locales[i]} terms not in en: ${_.size(loaded[i]) - _.size(matching) - (_.size(baseline) - _.size(matching))}`)

        // console.log(existsonlyinbaseline);

        // let used = {};
        // for (let k of _.sortBy(matching, 0)) {
        //     if (loaded[i][k])
        //         used[k] = loaded[i][k].trim();
        //     else
        //         used[k] = loaded[0][k].trim();
        // }

        // console.log(words[0]);
        // used['en'] = words[0];
        // used['es'] = words[1];
        // used['fr'] = words[2];
        // used['ar'] = words[3];

        // for (let ex of files)
        // {
        //     let key = ex.split('.')[0];
        //     let loc = ex.split('.')[1];
        //     if (loc==locales[i])
        //         used[key] = fs.readFileSync('./external/' + ex).toString();
        // }

        // fs.writeFileSync(`${locales[i]}.sorted.js`, JSON.stringify(used, null, 1));

        // let possiblenotused = {};
        // for (let k of _.sortBy(notused, 0)) {
        //     possiblenotused[k] = loaded[i][k].trim();
        // }

        // fs.writeFileSync(`${locales[i]}.notused.js`, JSON.stringify(possiblenotused, null, 1));

        // let existsonlyinbaselinearr = {};
        // for (let k of _.sortBy(existsonlyinbaseline, 0)) {
        //     existsonlyinbaselinearr[k] = loaded[0][k].trim();
        // }

        // fs.writeFileSync(`${locales[i]}.totranslate.js`, JSON.stringify(existsonlyinbaselinearr, null, 1));

        //do translation:
        // let translated = {};
        // for (let k of _.sortBy(existsonlyinbaseline, 0)) {
        //     let totranslate = loaded[0][k].trim();
        //     if (!_.includes(external_keys, k))
        //     {
        //         let [translation] = await translate.translate(totranslate, locales[i]);
        //         console.log(`Translated ${totranslate} into ${locales[i]}: ${translation}`);
        //         translated[k] = translation;
        //     }
        //     else
        //     {
        //         console.log(`Ignoring ${k}`);
        //     }
        // }

        // fs.writeFileSync(`${locales[i]}.translated.js`, JSON.stringify(translated, null, 1));
    // }

    //add on translations of the langs:

    // let original = {};
    // for (let k of _.sortBy(baseline, 0)) {
    //     original[k] = loaded[0][k];
    // }
    // original['en'] = words[0];
    // original['es'] = words[1];
    // original['fr'] = words[2];
    // original['ar'] = words[3];

    // for (let ex of files)
    // {
    //     let key = ex.split('.')[0];
    //     let loc = ex.split('.')[1];
    //     if (loc=='en')
    //         original[key] = fs.readFileSync('./external/' + ex).toString();
    // }


    // fs.writeFileSync(`en.sorted.js`, JSON.stringify(original, null, 1));

}

main();
