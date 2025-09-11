'use client';

import Link from 'next/link';
import { friends, type Friend } from '@/config/friends';
import { useState } from 'react';

const grades = ['2025级', '2024级', '2023级', '2022级', '2021级', 'Veteran'] as const;

function FriendCard({ name, url, avatar, description, tags, bio }: Friend) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block group">
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
            
            <div className="mt-3 flex items-center text-xs text-fd-primary group-hover:underline">
              访问博客
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function FriendsPage() {
  const [selectedGrade, setSelectedGrade] = useState<string>('全部');
  
  const filteredFriends = selectedGrade === '全部' 
    ? friends 
    : friends.filter(friend => friend.grade === selectedGrade);
    
  const friendsByGrade = grades.reduce((acc, grade) => {
    acc[grade] = friends.filter(friend => friend.grade === grade);
    return acc;
  }, {} as Record<string, Friend[]>);

  return (
    <main className="container mx-auto px-6 py-10 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">思想广场</h1>
        <p className="text-lg text-fd-muted-foreground">
          这里不仅仅只有安全，也许你能在这里因某一个想法而共鸣，找到你所喜欢的方向✨
        </p>
      </div>

      {/* Grade Filter */}
      <div className="mb-8">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex justify-center min-w-max px-4">
            <div className="inline-flex p-1 bg-fd-muted/30 rounded-xl gap-1">
              {['全部', ...grades].map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    selectedGrade === grade
                      ? 'bg-fd-primary text-fd-primary-foreground shadow-sm'
                      : 'text-fd-muted-foreground hover:text-fd-foreground'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      {selectedGrade === '全部' ? (
        // Show by grade groups
        <div className="space-y-10">
          {grades.map((grade) => {
            const gradeMembers = friendsByGrade[grade];
            if (gradeMembers.length === 0) return null;
            
            return (
              <div key={grade}>
                <div className="flex items-center mb-6">
                  <div className="px-4 py-2 bg-fd-primary/10 text-fd-primary rounded-lg font-medium">
                    {grade}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gradeMembers.map((friend) => (
                    <FriendCard key={friend.url} {...friend} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Show filtered results
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFriends.map((friend) => (
            <FriendCard key={friend.url} {...friend} />
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-16 text-center text-sm text-fd-muted-foreground">
        <p className="mb-2">
          想要提交链接？欢迎在 GitHub 提交 PR 或联系 HNUSEC ～
        </p>
        <Link className="text-fd-primary hover:underline" href="/docs/guide">
          返回文档
        </Link>
      </div>
    </main>
  );
}

