export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번째 게시글 #해시태그, #익스프레스",
      Images: [
        {
          src:
            "https://media.vlpt.us/post-images/ashnamuh/5d715390-aaa3-11e9-9dfd-b10d906fc372/tsblog.png",
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
          src:
            "https://www.elasticpath.com/sites/default/files/2020-04/NextJS_Logo_Ping_Pong_Element.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "제로초 강의 보고있어요",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "어른 새 날아 간다",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
// 오타방지
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  content: "더미데이터 입니다.",
  User: {
    id: 1,
    nickname: "승진",
  },
  imagePaths: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
