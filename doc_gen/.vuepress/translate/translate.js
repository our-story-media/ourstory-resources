let fs = require('fs');
let _ = require('lodash');
const path = require('path');
const glob = require('glob');
const { Translate } = require('@google-cloud/translate');
const googleservices = require('./google-services.json');
const {TranslationServiceClient} = require('@google-cloud/translate').v3beta1;
const gtranslate = new Translate();
const translationClient = new TranslationServiceClient();

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

let locales = ['es'];//, 'fr', 'ar'];
let words = ['Español', 'Français', 'عربى'];

let dir = path.join(__dirname, '..', '..');

// console.log(dir);
let originalfiles = glob.sync('**/*.md', { cwd: dir, nodir: true, ignore: ['es/**', 'fr/**', 'ar/**'] });
// console.log(originalfiles)
// return;

let loaded = [];

// var files = fs.readdirSync('./external');
// console.log(files);
// let external_keys = _.uniq(files.map((f)=>{
//     return f.split('.')[0];
// }));

async function createGlossary() {
    // console.log(googleservices['project_id'])
    // Construct glossary
    const glossary = {
      languageCodesSet: {
        languageCodes: ['en', 'es', 'fr', 'ar'],
      },
      inputConfig: {
        gcsSource: {
          inputUri: 'gs://integral-kiln-490.appspot.com/IndabaGlossary.csv',
        },
      },
      name: translationClient.glossaryPath(googleservices['project_id'], 'global', 1),
    };
  
    // Construct request
    const request = {
      parent: translationClient.locationPath(projectId, location),
      glossary: glossary,
    };
  
    // Create glossary using a long-running operation.
    // You can wait for now, or get results later.
    const [operation] = await translationClient.createGlossary(request);
  
    // Wait for operation to complete.
    await operation.promise();
  
    console.log(`Created glossary:`);
    console.log(`InputUri ${request.glossary.inputConfig.gcsSource.inputUri}`);
  }

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

// async function translate(text,to)
// {
//     let [translation] = await gtranslate.translate(text, {to:to,format:'html'});
//     return translation;
// }

// function translate(text, to) {
//     return new Promise((resolve, reject) => {

//         // console.log(endpoint);
//         // console.log(subscriptionKey);
//         let options = {
//             method: 'POST',
//             baseUrl: endpoint,
//             url: 'translate',
//             qs: {
//                 'api-version': '3.0',
//                 'to': [to],
//                 'textType': 'html'
//             },
//             headers: {
//                 'Ocp-Apim-Subscription-Key': subscriptionKey,
//                 'Content-type': 'application/json',
//                 'X-ClientTraceId': uuidv4().toString()
//             },
//             body: [{
//                 'text': text
//             }],
//             json: true,
//         };

//         request(options, function (err, res, body) {
//             if (body.error) {
//                 console.log(body.error);
//                 return reject(body.error);
//             }

//             // console.log(body)

//             if (body[0].translations)
//                 return resolve(body[0].translations[0].text);
//         });


//     });
// }

async function main() {


    for (let i = 0; i < _.size(originalfiles); i++) {
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
                    let newtrans = "";
                    // console.log(line[0]);
                    for (let line in lines)
                    {
                        console.log(`Translating line ${line}`);
                        let translation = await translate(lines[line], loc);
                        console.log(`Translation: ${translation}`);
                        newtrans += translation + "\n"
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
