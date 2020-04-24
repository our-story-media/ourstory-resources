let fs = require('fs');
let _ = require('lodash');
const path = require('path');
const glob = require('glob');
const { Translate } = require('@google-cloud/translate');
const googleservices = require('./google-services.json');
const {TranslationServiceClient} = require('@google-cloud/translate').v3beta1;
const gtranslate = new Translate();
const translationClient = new TranslationServiceClient();
const stringify = require('code-stringify')
const deepdash = require('deepdash')(_);
var md = require('markdown-it')();

const request = require('request');
const uuidv4 = require('uuid/v4');

const yamlFront = require('hexo-front-matter-editor');

// let locales = ['es','fr','ar'];//, 'fr', 'ar'];
let locales = ['es'];
// let words = ['Español', 'Français', 'عربى'];

let dir = path.join(__dirname, '..', '..');

// console.log(dir);
// let originalfiles = glob.sync('**/*.md', { cwd: dir, nodir: true, ignore: ['es/**', 'fr/**', 'ar/**'] });

//FOR TESTING:
let originalfiles = glob.sync('../docs/es/**/*.html', { cwd: dir, nodir: true, ignore: ['es/**', 'fr/**', 'ar/**'] });

console.log(originalfiles);
// return;

// console.log(originalfiles)
// return;

let loaded = [];

async function translate(text,to)
{
    const glossary = translationClient.glossaryPath(
        googleservices['project_id'],
        'us-central1',
        'a1'
      );
      const glossaryConfig = {
        glossary: glossary,
      };
      // Construct request
      const request = {
        parent: translationClient.locationPath(googleservices['project_id'], 'us-central1'),
        contents: [text],
        mimeType: 'text/html', // mime types: text/plain, text/html
        sourceLanguageCode: 'en',
        targetLanguageCode: to,
        glossaryConfig: glossaryConfig,
      };
    
      // Run request
      const [response] = await translationClient.translateText(request);
    
      return response.translations[0].translatedText;
    //   for (const translation of response.translations) {
    //     console.log(`Translation: ${translation.translatedText}`);
    //   }
}

async function main() {


  //translate menus:

  fs.copyFileSync('../config.js','../config.bak.js');

  let originalmenu = require('../config.js');


  console.log(`☐ Processing Site Metadata`);
  
  for (let loc of locales)
  {
    let originalsidebar = _.cloneDeep(originalmenu.themeConfig.sidebar);
    let originalnav = _.cloneDeep(originalmenu.themeConfig.nav);
    let originalsteps = _.clone(originalmenu.themeConfig.locales['/'].steps);

    originalsteps = await Promise.all(_.map(originalsteps, async function(leaf){
        console.log(`- ${leaf}`);
        leaf =  await translate(leaf, loc);
        return leaf;
    }));

    await Promise.all(_.mapDeep(originalnav, async function(leaf){
      if (_.isObject(leaf))
      {
        console.log(`- ${leaf.text}`);
        leaf.text =  await translate(leaf.text, loc);
        if (_.startsWith(leaf.link,'/'))
          leaf.link = `/${loc}${leaf.link}`;
      }
    }));

    originalsidebar = _.mapValuesDeep(originalsidebar, function(v){
      return `/${loc}${v}`;
    },{ leavesOnly: true });

    originalsidebar = _.mapKeys(originalsidebar, function(v,k){
      return `/${loc}${k}`;
    },);

    originalmenu.themeConfig.locales[`/${loc}/`].nav = originalnav;

    originalmenu.themeConfig.locales[`/${loc}/`].sidebar = originalsidebar;

    originalmenu.themeConfig.locales[`/${loc}/`].steps = originalsteps;

    originalmenu.themeConfig.locales[`/${loc}/`].lastUpdated = await translate(originalmenu.themeConfig.lastUpdated, loc);

    originalmenu.themeConfig.locales[`/${loc}/`].selectText = await translate('Languages', loc);

    originalmenu.locales[`/${loc}/`].title = await translate(originalmenu.title, loc);

    fs.writeFileSync(
      '../config.js',
      `module.exports = ${stringify(originalmenu, null, 2)}`
    )
    console.log(`☑ Processing Site Metadata ${loc}`);
  }


  // console.log(originalmenu);
  // return;


    for (let i = 0; i < _.size(originalfiles); i++) {

        console.log(`${originalfiles[i]}`);
        //for each lang:
        for (let loc of locales) {
            let newfile = path.join(dir, loc, originalfiles[i]);
            
            // console.log(newfile);
            if (!fs.existsSync(newfile)) {
                console.log(`- ${newfile}`);

                // fs.mkdirSync(path.dirname(newfile), { recursive: true });
                let content = fs.readFileSync(path.join(dir,originalfiles[i])).toString();
                // let data = await yamlFront.read(path.join(dir, originalfiles[i]));
                // console.log(data.title);
                // console.log(data.description);
                // console.log(data['_content']);

                // let [translation] = await translate.translate(data['_content'], {to:loc,format:'html'});
                try {

                    let lines = content.split("\n");

                    // console.log(lines)

                    let newtrans = "";
                    // console.log(line[0]);

                    for (let line in lines)
                    {
                      let string = lines[line];
                      let prefix = '';
                      // console.log(lines[line])
                      if (lines[line]!='')
                      {

                        //for boxes:
                        // string = _.replace(string,/^(:::\s\w*)/,'<box mem="$1"/>');
                        // console.log(`Translating line ${line}: ${string}`);
                        // console.log(`Markdown render: ${md.render(string)}`);
                        let translation = await translate(string, loc);
                        newtrans += `${translation} \n`;
                        // newtrans = _.replace(newtrans, '/ ','/');
                        // newtrans = _.replace(newtrans, ' /','/');
                        // newtrans = _.replace(newtrans, '] (','](');
                        // newtrans = _.replace(newtrans, /\s\*\*\s(\w*)\s\*\*\s/, " **$1** ");
                        // newtrans = _.replace(newtrans, /\<box mem="(.*)"\/\>/g, "$1");


                        console.log(`Translation (${loc})`);
                      }
                      else
                      {
                        newtrans += "\n"
                      }
                    }
                    

                    // data['_content'] = newtrans;

                    // console.log(newtrans);

                    fs.writeFileSync(path.join(dir,originalfiles[i]),newtrans);

                    // if (data.description) {
                    //     // [translation] = await translate.translate(data.description, {to:loc});
                    //     data.description = await translate(data.description, loc);
                    // }

                    // if (data.title) {
                    //     // [translation] = await translate.translate(data.title, {to:loc});
                    //     data.title = await translate(data.title, loc);
                    // }

                    // data.lang = `${loc}-x-mtfrom-en`;
                    // console.log(results);


                    // console.log(data);

                    // await yamlFront.write(data, newfile);
                    console.log(`☑ ${originalfiles[i]} ${loc}`)
                }
                catch (e) {
                    console.log(e);
                }
            }
            else
            {
              console.log(`☑ ${originalfiles[i]} ${loc}`)
            }
        }
    }

}

main();