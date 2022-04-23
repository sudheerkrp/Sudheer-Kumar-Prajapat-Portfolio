const brands = {
    name : 'brands',
    title : 'Brands',
    type : 'document',
    fields : [
        {
            name : 'imageUrl',
            title : 'imgUrl',
            type : 'image',
            options : {
                hotspot : true
            }
        },
        {
            name : 'name',
            title : 'Name',
            type : 'string'
        }
    ]
};

export default brands;