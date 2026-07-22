import Image from "next/image";
import { Card } from "@/components/ui/Card";

export default function LeadershipPage() {
  return (
    <div className="flex flex-col items-center animate-fade-in w-full">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mb-16 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Leadership
        </h1>
        <p className="text-lg text-zinc-400">
          The visionaries and engineers driving the Exclamatory ecosystem forward.
        </p>
      </div>

      {/* Founder & CEO Section */}
      <section className="w-full max-w-4xl mb-24">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">Founder & CEO</span>
        </div>
        
        <Card className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 hover:border-zinc-700 transition-colors">
          {/* CEO Profile Image */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-zinc-800 shrink-0 bg-zinc-900 flex items-center justify-center">
            {/* Note: /public folder-e 'sourov.jpg' name-e apnar picture rakhben */}
            <Image 
              src="/sourov.jpg" 
              alt="Sourov Sarkar" 
              fill
              className="object-cover"
            />
            {/* Chobi na thakle ei text-ta dekhabe (Fallback) */}
            <span className="text-4xl font-bold text-zinc-700 absolute -z-10">SS</span>
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Sourov Sarkar</h2>
            <p className="text-xl text-zinc-400 font-medium mb-6">Founder & Chief Executive Officer</p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Building the future, drop by drop. Leading the vision to create a world-class software ecosystem that solves everyday problems with elegant engineering and scalable architecture.
            </p>
          </div>
        </Card>
      </section>

      {/* Executive Members Section */}
      <section className="w-full max-w-6xl">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">Executive Board</span>
        </div>
        
        {/* 9 joner Grid (Mobile-e 1 ta, Tablet-e 2 ta, Desktop-e 3 ta kore 3 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Member 1 */}
          <Card className="flex flex-col items-center p-8 text-center hover:border-zinc-700 transition-colors group">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-800 mb-6 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
              <Image src="/exec-1.jpg" alt="Prottoy Sarker" fill className="object-cover" />
              <span className="text-2xl font-bold text-zinc-800 absolute -z-10">PS</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Prottoy Sarker</h3>
            <p className="text-sm text-zinc-400 font-medium">Co-founder & Digital Marketer</p>
          </Card>

          {/* Member 2 */}
          <Card className="flex flex-col items-center p-8 text-center hover:border-zinc-700 transition-colors group">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-800 mb-6 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
              <Image src="/exec-2.jpg" alt="Shahadat Hossain Sumon" fill className="object-cover" />
              <span className="text-2xl font-bold text-zinc-800 absolute -z-10">SH</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Shahadat Hossain Sumon</h3>
            <p className="text-sm text-zinc-400 font-medium">Graphics Designer & Social Media Manager</p>
          </Card>

          {/* Member 3 */}
          <Card className="flex flex-col items-center p-8 text-center hover:border-zinc-700 transition-colors group">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-800 mb-6 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
              <Image src="/exec-3.jpg" alt="Sajid Ahmed" fill className="object-cover" />
              <span className="text-2xl font-bold text-zinc-800 absolute -z-10">SA</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Sajid Ahmed</h3>
            <p className="text-sm text-zinc-400 font-medium">Content Writer & Database Manager</p>
          </Card>

          {/* Member 4 */}
          <Card className="flex flex-col items-center p-8 text-center hover:border-zinc-700 transition-colors group">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-800 mb-6 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
              <Image src="/exec-4.jpg" alt="Abdul Kaium" fill className="object-cover" />
              <span className="text-2xl font-bold text-zinc-800 absolute -z-10">AK</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Abdul Kaium</h3>
            <p className="text-sm text-zinc-400 font-medium">Computer Engineer</p>
          </Card>

          {/* Member 5 */}
          <Card className="flex flex-col items-center p-8 text-center hover:border-zinc-700 transition-colors group">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-800 mb-6 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
              <Image src="/exec-5.jpg" alt="Araf Ahmed" fill className="object-cover" />
              <span className="text-2xl font-bold text-zinc-800 absolute -z-10">AA</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Araf Ahmed</h3>
            <p className="text-sm text-zinc-400 font-medium">Content Writer</p>
          </Card>

          {/* Member 6 */}
          <Card className="flex flex-col items-center p-8 text-center hover:border-zinc-700 transition-colors group">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-800 mb-6 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
              <Image src="/exec-6.jpg" alt="Sadikur Rahman" fill className="object-cover" />
              <span className="text-2xl font-bold text-zinc-800 absolute -z-10">SR</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Sadikur Rahman</h3>
            <p className="text-sm text-zinc-400 font-medium">Content Writer</p>
          </Card>

          {/* Member 7 */}
          <Card className="flex flex-col items-center p-8 text-center hover:border-zinc-700 transition-colors group">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-800 mb-6 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
              <Image src="/exec-7.jpg" alt="Ovi Rahman" fill className="object-cover" />
              <span className="text-2xl font-bold text-zinc-800 absolute -z-10">OR</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Ovi Rahman</h3>
            <p className="text-sm text-zinc-400 font-medium">Content Writer</p>
          </Card>

          {/* Member 8 */}
          <Card className="flex flex-col items-center p-8 text-center hover:border-zinc-700 transition-colors group">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-800 mb-6 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
              <Image src="/exec-8.jpg" alt="Shuvo Ray" fill className="object-cover" />
              <span className="text-2xl font-bold text-zinc-800 absolute -z-10">SR</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Shuvo Ray</h3>
            <p className="text-sm text-zinc-400 font-medium">Content Writer</p>
          </Card>

          {/* Member 9 */}
          <Card className="flex flex-col items-center p-8 text-center hover:border-zinc-700 transition-colors group">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-800 mb-6 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
              <Image src="/exec-9.jpg" alt="Mushfiqur Rahman Mansib" fill className="object-cover" />
              <span className="text-2xl font-bold text-zinc-800 absolute -z-10">MR</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Mushfiqur Rahman Mansib</h3>
            <p className="text-sm text-zinc-400 font-medium">Content Writer</p>
          </Card>

        </div>
      </section>
      
    </div>
  );
}