import React from 'react';
import { Bell, Globe, CaretDown, List } from '../icons/PhosphorIcons';
import { Branch, Language } from '../../types/navigation';

interface HeaderProps {
    branches: Branch[];
    selectedBranchId: string;
    onSelectBranch: (id: string) => void;
    lang: Language;
    onToggleLang: () => void;
    onToggleSidebar: () => void;
    pageTitle: string;
}

export const Header: React.FC<HeaderProps> = ({
    branches,
    selectedBranchId,
    onSelectBranch,
    lang,
    onToggleLang,
    onToggleSidebar,
    pageTitle,
}) => {
    const isAr = lang === 'ar';

    return (
          <header className="h-16 bg-zinc-900 border-b border-zinc-800 px-4 md:px-6 flex items-center justify-between sticky top-0 z-20">
                <div className="flex items-center gap-3">
                        <button
                                    onClick={onToggleSidebar}
                                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                                    aria-label="Toggle sidebar"
                                  >
                                  <List size={20} />
                        </button>button>
                        <div className="flex items-center gap-2">
                                  <h1 className="text-base font-semibold text-white tracking-tight">{pageTitle}</h1>h1>
                                  <span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 font-medium">
                                    {isAr ? 'البث متصل' : 'System Healthy'}
                                  </span>span>
                        </div>div>
                </div>div>
          
                <div className="flex items-center gap-3">
                        <div className="relative">
                                  <select
                                                value={selectedBranchId}
                                                onChange={(e) => onSelectBranch(e.target.value)}
                                                className="appearance-none bg-zinc-950 border border-zinc-800 text-zinc-200 text-xs font-medium rounded-lg ps-3 pe-8 py-2 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                                              >
                                              <option value="all">{isAr ? '🌐 جميع الفروع (إربد وعمّان)' : '🌐 All Branches (Irbid & Amman)'}</option>option>
                                    {branches.map(b => (
                                                              <option key={b.id} value={b.id}>
                                                                              📍 {isAr ? `${b.nameAr} - ${b.cityAr}` : `${b.nameEn} - ${b.cityEn}`}
                                                              </option>option>
                                                            ))}
                                  </select>select>
                                  <span className="absolute end-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                                              <CaretDown size={14} />
                                  </span>span>
                        </div>div>
                
                        <button
                                    onClick={onToggleLang}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                                  >
                                  <Globe size={16} className="text-emerald-400" />
                                  <span>{isAr ? 'English' : 'عربي'}</span>span>
                        </button>button>
                
                        <button 
                                    className="relative p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                                  >
                                  <Bell size={18} />
                                  <span className="absolute top-1.5 end-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-zinc-900" />
                        </button>button>
                </div>div>
          </header>header>
        );
};</header>
