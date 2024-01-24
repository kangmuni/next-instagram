export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        {
          type: 'reference', // 다른 사용자의 레퍼런스를 참고할거야
          to: [{type: 'user'}], // 동일하게 유저타입의 레퍼런스를 참고할거야
        },
      ],
      validation: (Rule) => Rule.unique(), // 중복을 허용하지 않는 고유한것을 가져올거야
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'document',
      fields: [
        {
          title: 'Author',
          name: 'author',
          type: 'reference', // 다른 사용자의 레퍼런스를 참고할거야
          to: [{type: 'user'}], // 동일하게 포스트타입의 레퍼런스를 참고할거야
        },
        {
          title: 'Comment',
          name: 'comment',
          type: 'string',
        },
      ],
    },
  ],
}
