const about = {
    name : 'about',
    title : 'About',
    type : 'document',
    fields : [
        {
            name : 'title',
            title : 'Title',
            type : 'string'
        },
        {
            name : 'description',
            title : 'Description',
            type : 'string'
        },
        {
            name : 'imageUrl',
            title : 'imgUrl',
            type : 'image',
            options : {
                hotspot : true
            }
        }
    ],
};

export default about;