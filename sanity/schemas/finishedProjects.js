

export default {
    name:'finishedProjects',
    title:'Finished Projects',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        
        {
            name:'desc',
            title:'Desc',
            type:'string',
        },
        {
            name:'image',
            title:'Image',
            type:'image',
            options:{ hotspot: true}
        },
        {
            name:'link',
            title:'Link',
            type:'string'

        }, {
            name:'githubLink',
            title:'Github Link',
            type:'string'
        },
        {
            name: "stacks",
            title: "Stacks",
            type: "array",
            of: [
              {
                type: "image",
            options:{ hotspot: true}
               
              }
            ],

           
          },
    ]
}