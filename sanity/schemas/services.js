

export default {
    name:'services',
    title:'Services',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'id',
            title:'ID',
            type:'string'
        },
        {
            name:'desc',
            title:'desc',
            type:'string',
        },
        {
            name:'icon',
            title:'icon',
            type:'image',
            options:{ hotspot: true}
        }
    ]
}