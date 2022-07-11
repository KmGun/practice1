export default class {
    constructor() {
        document.title = "Register";
    }
    async getHtml() {
        return `
        <h1>this is register</h1>
        `;
    }
    async inputScriptTags(){
        let i = 0;
        const jsRouter = document.getElementById('jsRouter');

        // delete old script tags
        while (jsRouter.nextElementSibling){
            jsRouter.nextElementSibling.remove();
        };


        // make script tags
        // if (!jsRouter.nextElementSibling){
        //     while (i<scriptlist.length){
        //         let scr = document.createElement('script');
        //         scr.src = scriptlist[i];
        //         scr.type = 'module';
        //         document.getElementById('jsRouter').after(scr);
        //         i++;
        //     }
            
        // }
        
    }
}


