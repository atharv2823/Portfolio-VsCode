import React from 'react';
import { GitBranch, GitCommit, Star, GitFork, GitPullRequest, Users, Calendar, ExternalLink, MapPin, Building, Link as LinkIcon, BookMarked } from 'lucide-react';

const GitHubPanel: React.FC = () => {
  // Mock GitHub data - in a real app, this would come from GitHub API
  const githubData = {
    profile: {
      name: 'Alex Rivera',
      username: 'alex-rivera-dev',
      avatar: 'https://github.com/images/error/alex-rivera-dev_happy.gif',
      bio: 'Full Stack Developer & Cloud Architect',
      location: 'San Francisco, CA',
      company: 'TechVanguard',
      website: 'alexrivera.dev',
      followers: 234,
      following: 89,
      publicRepos: 42,
      joinedDate: 'January 2020'
    },
    repositories: [
      {
        name: 'cloudscale-ai',
        description: 'Enterprise-grade LLM orchestration platform',
        language: 'TypeScript',
        stars: 156,
        forks: 23,
        updated: '2 days ago',
        isPrivate: false
      },
      {
        name: 'etherflow',
        description: 'Real-time Ethereum gas price predictor',
        language: 'JavaScript',
        stars: 89,
        forks: 12,
        updated: '1 week ago',
        isPrivate: false
      },
      {
        name: 'nexus-os',
        description: 'Browser-based operating system shell',
        language: 'TypeScript',
        stars: 67,
        forks: 8,
        updated: '3 days ago',
        isPrivate: false
      },
      {
        name: 'dev-portfolio',
        description: 'VS Code themed developer portfolio',
        language: 'TypeScript',
        stars: 45,
        forks: 5,
        updated: '5 hours ago',
        isPrivate: false
      },
      {
        name: 'react-pattern-library',
        description: 'A collection of advanced React patterns',
        language: 'JavaScript',
        stars: 210,
        forks: 34,
        updated: '1 month ago',
        isPrivate: false
      }
    ],
    recentActivity: [
      {
        type: 'push',
        repo: 'cloudscale-ai',
        message: 'feat: Add multi-model support for GPT-4 and Claude',
        time: '2 hours ago'
      },
      {
        type: 'pull_request',
        repo: 'etherflow',
        message: 'fix: Resolve gas price calculation bug',
        time: '1 day ago'
      },
      {
        type: 'issue',
        repo: 'nexus-os',
        message: 'opened issue: Add dark mode support',
        time: '2 days ago'
      },
    ],
    stats: {
      commitsThisYear: 1247,
      pullRequests: 89,
      issuesOpened: 156,
      codeReviews: 234
    }
  };

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      TypeScript: '#3178c6',
      JavaScript: '#f1e05a',
      Python: '#3572A5',
      Go: '#00ADD8',
      Rust: '#dea584'
    };
    return colors[language] || '#586069';
  };

  const renderContributionGraph = () => {
    return (
      <div className="flex gap-[2px] mt-2 flex-wrap justify-center overflow-hidden h-[68px]">
        {Array.from({ length: 14 }).map((_, w) => (
          <div key={w} className="flex flex-col gap-[2px]">
            {Array.from({ length: 7 }).map((_, d) => {
               const level = Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0;
               const colors = ['bg-[#ebedf0]/10', 'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]'];
               return <div key={d} className={`w-2.5 h-2.5 rounded-sm ${colors[level]}`} />
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-80 flex-shrink-0 flex flex-col h-full bg-[var(--bg-sidebar)] border-l border-[var(--border)] theme-transition font-sans">
      <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-sidebar)] border-b border-[var(--border)] flex-shrink-0">
        <div className="flex items-center gap-2">
          <GitBranch size={16} className="text-[var(--text-main)]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)]">GitHub</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {/* Profile Section */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl border-2 border-[var(--bg-editor)] shadow-md overflow-hidden relative">
               <img src="https://ui-avatars.com/api/?name=Alex+Rivera&background=0D8ABC&color=fff" alt="AR" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <h1 className="text-xl font-bold text-[var(--text-main)] leading-tight">{githubData.profile.name}</h1>
              <p className="text-base text-[var(--text-muted)] font-light leading-snug truncate">@{githubData.profile.username}</p>
            </div>
          </div>
          
          <button className="w-full py-1.5 px-3 bg-[#21262d] hover:bg-[#30363d] border border-[var(--border)] rounded-md text-sm font-medium text-[var(--text-main)] transition-colors shadow-sm">
            Edit profile
          </button>

          <div className="text-sm text-[var(--text-main)] leading-relaxed">
            {githubData.profile.bio}
          </div>

          <div className="flex flex-col gap-2 text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <Users size={14} className="text-[var(--text-muted)]" />
              <span className="text-[var(--text-main)] font-semibold">{githubData.profile.followers}</span> followers
              <span>·</span>
              <span className="text-[var(--text-main)] font-semibold">{githubData.profile.following}</span> following
            </div>
            <div className="flex items-center gap-2">
              <Building size={14} />
              <span>{githubData.profile.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{githubData.profile.location}</span>
            </div>
             <div className="flex items-center gap-2">
              <LinkIcon size={14} />
              <a href="#" className="hover:text-blue-400 hover:underline">{githubData.profile.website}</a>
            </div>
          </div>
        </div>

        <div className="h-px bg-[var(--border)] mb-6" />

        {/* Contribution Graph (Mock) */}
        <div className="mb-6">
           <h4 className="text-xs font-semibold text-[var(--text-main)] mb-2">My Contributions</h4>
           <div className="border border-[var(--border)] rounded-md p-2 bg-[var(--bg-editor)]">
            {renderContributionGraph()}
            <div className="flex justify-between items-center mt-2 text-[10px] text-[var(--text-muted)] px-1">
               <span>Learn how we count contributions</span>
               <div className="flex items-center gap-1">
                  <span>Less</span>
                  <div className="w-2 h-2 bg-[#ebedf0]/10 rounded-sm"></div>
                  <div className="w-2 h-2 bg-[#0e4429] rounded-sm"></div>
                  <div className="w-2 h-2 bg-[#006d32] rounded-sm"></div>
                  <div className="w-2 h-2 bg-[#26a641] rounded-sm"></div>
                  <div className="w-2 h-2 bg-[#39d353] rounded-sm"></div>
                  <span>More</span>
               </div>
            </div>
           </div>
        </div>

        <div className="h-px bg-[var(--border)] mb-6" />

        {/* Pinned Repositories */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
             <h4 className="text-sm font-semibold text-[var(--text-main)]">Pinned</h4>
             <span className="text-xs text-[var(--text-muted)] hover:text-blue-400 cursor-pointer">Customize your pins</span>
          </div>
          
          <div className="flex flex-col gap-3">
            {githubData.repositories.slice(0, 3).map((repo, index) => (
              <div key={index} className="bg-[var(--bg-editor)] border border-[var(--border)] rounded-md p-3 hover:border-[var(--text-muted)] transition-colors cursor-pointer group">
                <div className="flex items-center gap-2 mb-2">
                   <BookMarked size={14} className="text-[var(--text-muted)]" />
                   <span className="text-sm font-semibold text-blue-400 group-hover:underline">{repo.name}</span>
                   <span className="text-[10px] border border-[var(--border)] rounded-full px-1.5 py-0.5 text-[var(--text-muted)]">Public</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mb-3 line-clamp-2 leading-relaxed">
                   {repo.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: getLanguageColor(repo.language) }} />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-blue-400">
                    <Star size={12} />
                    {repo.stars}
                  </div>
                   <div className="flex items-center gap-1 hover:text-blue-400">
                    <GitFork size={12} />
                    {repo.forks}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-[var(--border)] mb-6" />

        {/* Recent Activity Section */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[var(--text-main)] mb-4">Contribution Activity</h4>
          <div className="relative pl-4 border-l border-[var(--border)] space-y-6">
            {githubData.recentActivity.map((activity, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-[var(--border)] border-2 border-[var(--bg-sidebar)]"></div>
                
                <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-[var(--text-main)]">
                         {activity.type === 'push' && 'Pushed to'}
                         {activity.type === 'pull_request' && 'Opened PR in'}
                         {activity.type === 'issue' && 'Opened issue in'}
                      </span>
                      <span className="text-xs text-blue-400 hover:underline cursor-pointer">{activity.repo}</span>
                   </div>
                   <div className="text-xs text-[var(--text-muted)]">{activity.message}</div>
                   <div className="text-[10px] text-[var(--text-muted)] mt-1 opacity-70">{activity.time}</div>
                </div>
              </div>
            ))}
            
             <div className="relative">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--border)] border-2 border-[var(--bg-sidebar)]"></div>
                <span className="text-xs text-[var(--text-muted)] ml-0">Created 42 commits in 12 repositories</span>
             </div>
          </div>
        </div>
        
        <a
          href={`https://github.com/${githubData.profile.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-blue-400 transition-colors border-t border-[var(--border)] pt-4 mt-auto"
        >
          View full profile on GitHub <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
};

export default GitHubPanel;