export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'Username',
      name: 'username',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Following',
      name: 'following',
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
      title: 'Followers',
      name: 'followers',
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
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference', // 다른 사용자의 레퍼런스를 참고할거야
          to: [{type: 'post'}], // 동일하게 포스트타입의 레퍼런스를 참고할거야
        },
      ],
      validation: (Rule) => Rule.unique(), // 중복을 허용하지 않는 고유한것을 가져올거야
    },
  ],
}
