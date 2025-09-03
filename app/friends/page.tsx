import Link from 'next/link';

export const metadata = {
  title: '友情链接',
  description: 'HNUSEC 的友情链接',
};

type Friend = {
  name: string;
  url: string;
  avatar: string;
  description: string;
};

const friends: Friend[] = [
  {
    name: "Hanyin's Space",
    url: 'https://mundi-xu.github.io/',
    avatar: '/avatars/hanyin.jpg',
    description: 'Be wise and fool.',
  },
  {
    name: "Moyuin's Blog",
    url: 'https://moyuin.top/',
    avatar: '/avatars/moyuin.jpeg',
    description: 'Floating Or Hovering.',
  },
];

function FriendCard({ name, url, avatar, description }: Friend) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="flex items-center p-4 bg-fd-card rounded-xl border border-fd-border shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-fd-border flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatar}
            alt={name}
            className="w-auto h-auto max-w-full max-h-full"
            style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
            width={64}
            height={64}
          />
        </div>
        <div className="ml-4">
          <h3 className="font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors">{name}</h3>
          <p className="text-sm text-fd-muted-foreground mt-1">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default function FriendsPage() {
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">友情链接</h1>
      <p className="text-fd-muted-foreground mt-2">这里是一些优秀学长学姐的个人网站和博客。</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {friends.map((f) => (
          <FriendCard key={f.url} {...f} />
        ))}
      </div>

      <div className="mt-10 text-sm text-fd-muted-foreground">
        <span>
          想要提交友链？欢迎在 GitHub 提交 PR 或联系 HNUSEC ～
        </span>
        <span className="ml-2">
          <Link className="text-fd-primary hover:underline" href="/docs/guide">返回文档</Link>
        </span>
      </div>
    </main>
  );
}

