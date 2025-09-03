import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Fumadocs-style background */}
        <div className="absolute inset-0 bg-fd-background" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-fd-background via-transparent to-fd-background/50" />
        


        <div className="relative container mx-auto px-6 text-center">
          <div className="flex flex-col items-center space-y-12">
            {/* Logo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-fd-primary/10 to-fd-primary/5 rounded-full blur-xl"></div>
              <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-2xl border-4 border-fd-border">
                <Image
                  src="/logo.jpg"
                  alt="HNUSEC Logo"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold text-fd-foreground tracking-tight">
                  HNUSEC
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-fd-primary to-fd-primary/50 mx-auto rounded-full"></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-semibold text-fd-muted-foreground">
                湖南大学信息安全协会
              </h2>
              <p className="text-xl md:text-2xl text-fd-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Fiat Lux
              </p>
            </div>

                        {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link
                href="/docs/guide"
                className="group px-10 py-5 bg-fd-primary text-fd-primary-foreground font-semibold rounded-xl hover:bg-fd-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  Getting Started
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

            {/* Features section */}
      <section className="py-32 bg-fd-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-fd-foreground">旅程的开始</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-fd-primary to-fd-primary/50 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-fd-muted-foreground max-w-2xl mx-auto">
              Just for Fun✨
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="group p-10 bg-fd-card rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300 border border-fd-border">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-fd-primary rounded-full mr-3"></div>
                <h4 className="text-2xl font-semibold text-fd-card-foreground">Hello, World!</h4>
              </div>
              <p className="text-fd-muted-foreground mb-6 text-lg leading-relaxed">
                从 0 开始在 HNU 的计算机学习生活。
              </p>
              <Link 
                href="/docs/guide"
                className="inline-flex items-center text-fd-primary font-medium hover:underline group-hover:gap-2 transition-all"
              >
                了解更多 
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            
            <div className="group p-10 bg-fd-card rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300 border border-fd-border">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-fd-primary rounded-full mr-3"></div>
                <h4 className="text-2xl font-semibold text-fd-card-foreground">友情链接</h4>
              </div>
              <p className="text-fd-muted-foreground mb-6 text-lg leading-relaxed">
                汇聚已经毕业的优秀学长学姐的博客
              </p>
              <Link 
                href="/docs/guide/friends"
                className="inline-flex items-center text-fd-primary font-medium hover:underline group-hover:gap-2 transition-all"
              >
                查看更多 
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            
            <div className="group p-10 bg-fd-card rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300 border border-fd-border">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-fd-primary rounded-full mr-3"></div>
                <h4 className="text-2xl font-semibold text-fd-card-foreground">HNU 生存指南</h4>
              </div>
              <p className="text-fd-muted-foreground mb-6 text-lg leading-relaxed">
                如何在 HNU 恶劣的计算机学习环境中生存？
              </p>
              <span className="text-fd-muted-foreground font-medium">
                即将推出 →
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
