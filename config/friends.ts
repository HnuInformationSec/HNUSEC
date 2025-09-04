export interface Friend {
  name: string;
  url: string;
  avatar?: string;
  description: string;
  grade: '2024级' | '2023级' | '2022级' | '2021级' | '2020级' | '其他';
  tags: string[];
  bio?: string; // 个人简介
}
//如果发现 grade 中没有所在年级，可自行添加，链接页面是为了提供参考的学习方向，可以在 tag 或 bio 栏描述自己博客中相关的方向，不仅限于安全～

export const friends: Friend[] = [
  {
    name: "Hanyin",
    url: "https://mundi-xu.github.io/",
    avatar: "/avatars/hanyin.jpg",
    description: "Be wise and fool.",
    grade: "2022级",
    tags: ["Security", "LLM", "Binary"],
    bio: "天穹光年实验室"
  },
  {
    name: "Moyuin",
    url: "https://moyuin.top/",
    avatar: "/avatars/moyuin.jpeg",
    description: "Floating Or Hovering.",
    grade: "2024级",
    tags: ["Devops"],
    bio: ""
  },
  // 添加更多友情链接只需要在这里添加对象即可
  // {
  //   name: "示例姓名",
  //   url: "https://example.com",
  //   avatar: "/avatars/example.jpg",
  //   description: "这是一个示例描述",
  //   grade: "2024级",
  //   tags: ["Web", "AI"],
  //   bio: "简短的个人介绍"
  // }
];
