import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Fumadocs-style background */}
        <div className="absolute inset-0 bg-fd-background" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-fd-background via-transparent to-fd-background/50" />

        <div className="relative container mx-auto px-6 text-center">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo */}
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="HNUSEC Logo"
                width={120}
                height={120}
                className="rounded-full shadow-lg border-4 border-fd-border"
                priority
              />
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-fd-foreground">
                HNUSEC
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-fd-muted-foreground">
                湖南大学信息安全协会
              </h2>
              <p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mx-auto">
                Fiat Lux
              </p>
            </div>

                        {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/docs/guide"
                className="px-8 py-4 bg-fd-primary text-fd-primary-foreground font-semibold rounded-lg hover:bg-fd-primary/90 transform hover:scale-105 transition-all duration-300"
              >
                Getting Started
              </Link>
            </div>
          </div>
        </div>
      </section>

            {/* Features section */}
      <section className="py-20 bg-fd-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-fd-foreground">旅程的开始</h3>
            <p className="text-fd-muted-foreground max-w-2xl mx-auto">
              Just for Fun✨
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-fd-card rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-fd-border">
              
              <h4 className="text-xl font-semibold mb-3 text-fd-card-foreground">Hello, World!</h4>
              <p className="text-fd-muted-foreground mb-4">
                从 0 开始在 HNU 的计算机学习生活。
              </p>
              <Link 
                href="/docs/guide"
                className="text-fd-primary font-medium hover:underline"
              >
                了解更多 →
              </Link>
            </div>
            
            <div className="group p-8 bg-fd-card rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-fd-border">
              <h4 className="text-xl font-semibold mb-3 text-fd-card-foreground">友情链接</h4>
              <p className="text-fd-muted-foreground mb-4">
                汇聚已经毕业的优秀学长学姐的博客
              </p>
              <span className="text-fd-muted-foreground font-medium">
                即将推出 →
              </span>
            </div>
            
            <div className="group p-8 bg-fd-card rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-fd-border">
             
              <h4 className="text-xl font-semibold mb-3 text-fd-card-foreground">HNU 生存指南</h4>
              <p className="text-fd-muted-foreground mb-4">
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
