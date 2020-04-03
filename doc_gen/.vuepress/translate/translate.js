let fs = require('fs');
let _ = require('lodash');
const path = require('path');
const glob = require('glob');
const { Translate } = require('@google-cloud/translate');
const googleservices = require('./google-services.json');
const {TranslationServiceClient} = require('@google-cloud/translate').v3beta1;
const gtranslate = new Translate();
const translationClient = new TranslationServiceClient();
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt({
  html: true
});

// var key_var = 'TRANSLATOR_TEXT_SUBSCRIPTION_KEY';
// if (!process.env[key_var]) {
//     throw new Error('Please set/export the following environment variable: ' + key_var);
// }
// var subscriptionKey = process.env[key_var];
// var endpoint_var = 'TRANSLATOR_TEXT_ENDPOINT';
// if (!process.env[endpoint_var]) {
//     throw new Error('Please set/export the following environment variable: ' + endpoint_var);
// }
// var endpoint = process.env[endpoint_var];

const request = require('request');
const uuidv4 = require('uuid/v4');

const yamlFront = require('hexo-front-matter-editor');

let locales = ['es','fr'];//, 'fr', 'ar'];
let words = ['Español', 'Français', 'عربى'];

let dir = path.join(__dirname, '..', '..');

// console.log(dir);
// let originalfiles = glob.sync('**/*.md', { cwd: dir, nodir: true, ignore: ['es/**', 'fr/**', 'ar/**'] });

//FOR TESTING:
let originalfiles = glob.sync('**/capture/README.md', { cwd: dir, nodir: true, ignore: ['es/**', 'fr/**', 'ar/**'] });

// console.log(originalfiles)
// return;

let loaded = [];

// var files = fs.readdirSync('./external');
// console.log(files);
// let external_keys = _.uniq(files.map((f)=>{
//     return f.split('.')[0];
// }));

// async function createGlossary() {
//     // console.log(googleservices['project_id'])
//     // Construct glossary
//     const glossary = {
//       languageCodesSet: {
//         languageCodes: ['en', 'es', 'fr', 'ar'],
//       },
//       inputConfig: {
//         gcsSource: {
//           inputUri: 'gs://integral-kiln-490.appspot.com/IndabaGlossary.csv',
//         },
//       },
//       name: translationClient.glossaryPath(googleservices['project_id'], 'global', 1),
//     };
  
//     // Construct request
//     const request = {
//       parent: translationClient.locationPath(projectId, location),
//       glossary: glossary,
//     };
  
//     // Create glossary using a long-running operation.
//     // You can wait for now, or get results later.
//     const [operation] = await translationClient.createGlossary(request);
  
//     // Wait for operation to complete.
//     await operation.promise();
  
//     console.log(`Created glossary:`);
//     console.log(`InputUri ${request.glossary.inputConfig.gcsSource.inputUri}`);
//   }

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


    for (let i = 0; i < _.size(originalfiles); i++) {

        console.log(`* File: ${originalfiles[i]}`)
        //for each lang:
        for (let loc of locales) {
            let newfile = path.join(dir, loc, originalfiles[i]);
            
            // console.log(newfile);
            if (!fs.existsSync(newfile)) {
                console.log(`Translating: ${newfile}`);

                fs.mkdirSync(path.dirname(newfile), { recursive: true });
                // let content = fs.readFileSync(path.join(dir,originalfiles[i])).toString();
                let data = await yamlFront.read(path.join(dir, originalfiles[i]));
                // console.log(data.title);
                // console.log(data.description);
                // console.log(data['_content']);

                // let [translation] = await translate.translate(data['_content'], {to:loc,format:'html'});
                try {

                    let lines = data['_content'].split("\n");

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
                        
                        // let prefixes = ['::: tip',':::'];

                        // if (_.startsWith(string,':::'))
                        // {
                        string = _.replace(string,/^(:::\s\w*)/,'<box mem="$1"/>');
                        // }

                        console.log(`Translating line ${line}: ${string}`);
                        // console.log(`Markdown render: ${md.render(string)}`);
                        let translation = await translate(string, loc);
                        newtrans += `${translation} \n`;
                        
                        newtrans = _.replace(newtrans, '/ ','/');
                        newtrans = _.replace(newtrans, ' /','/');
                        newtrans = _.replace(newtrans, '] (','](');
                        newtrans = _.replace(newtrans, /\s\*\*\s(\w*)\s\*\*\s/, " **$1** ");
                        newtrans = _.replace(newtrans, /\<box mem="(.*)"\/\>/g, "$1");
                        
                        console.log(`Translation (${loc}): ${newtrans}`);
                      }
                      else
                      {
                        newtrans += "\n"
                      }
                    }
                    

                    data['_content'] = newtrans;

                    if (data.description) {
                        // [translation] = await translate.translate(data.description, {to:loc});
                        data.description = await translate(data.description, loc);
                    }

                    if (data.title) {
                        // [translation] = await translate.translate(data.title, {to:loc});
                        data.title = await translate(data.title, loc);
                    }

                    data.lang = `${loc}-x-mtfrom-en`;
                    // console.log(results);


                    // console.log(data);

                    await yamlFront.write(data, newfile);
                }
                catch (e) {
                    console.log(e);
                }
            }

        }
    }

}

main();

// createGlossary();
