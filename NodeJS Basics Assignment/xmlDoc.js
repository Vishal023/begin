
module.exports=`<products>
{{#each objects}}
   <product>
       <baseId>{{baseId}}</baseId>
       {{#if feature}}
       <features>
            {{#each feature}}
           <feature>{{this}}</feature>
           {{/each}}
       </features>
       {{/if}}
       <isActive>{{isActive}}</isActive>
       {{#if contentType}}
       <contentType>
            {{#each contentType}}
            <contentTypeValue>{{this.value}}</contentTypeValue>
            {{/each}}
       </contentType>
       {{/if}}
       {{#if searchTerms}}
       <searchTerms>
            {{#each searchTerms}}
           <searchTermValue>{{this}}</searchTermValue>
           {{/each}}
       </searchTerms>
       {{/if}}
       <childProducts>
            {{#each childProducts}}
           <childProduct>
               <baseId>{{baseId}}</baseId>
               <isActive>{{isActive}}</isActive>
               {{#if feature}}
               <features>
                    {{#each feature}}
                   <feature>{{this}}</feature>
                   {{/each}}
               </features>
               {{/if}}
               {{#if searchTerms}}
               <searchTerms>
                    {{#each searchTerms}}
                   <searchTermValue>{{this}}</searchTermValue>
                   {{/each}}
               </searchTerms>
               {{/if}}
           </childProduct>
            {{/each}}
       </childProducts>
   </product>
{{/each}}
</products>`;
