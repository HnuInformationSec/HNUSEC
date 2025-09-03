import { friends, type Friend } from '@/config/friends';

interface FriendCardProps {
  friend: Friend;
}
// 将链接卡片模块化配置
function FriendCard({ friend }: FriendCardProps) {
  const { name, url, avatar, description, tags, bio } = friend;
  
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="p-6 bg-fd-card rounded-xl border border-fd-border shadow-sm hover:shadow-md transition-all duration-200">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-fd-border flex items-center justify-center bg-fd-muted">
            {avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={avatar} 
                alt={name} 
                className="w-full h-full object-cover"
                width={48}
                height={48}
              />
            ) : (
              <div className="w-full h-full bg-fd-primary/10 flex items-center justify-center">
                <span className="text-fd-primary text-lg font-bold">
                  {name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors truncate">
                {name}
              </h3>
              <div className="flex gap-1 flex-wrap">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-fd-primary/10 text-fd-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {bio && (
              <p className="text-sm text-fd-muted-foreground mb-2">{bio}</p>
            )}
            
            <p className="text-sm text-fd-muted-foreground italic">
              {description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

export function FriendsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {friends.map((friend, index) => (
        <FriendCard key={index} friend={friend} />
      ))}
    </div>
  );
}
