import React from 'react';
import { 
    House, 
    MapPin, 
    Broadcast, 
    Playlist, 
    Megaphone, 
    CalendarBlank, 
    ChartBar, 
    Gear, 
    RadioIcon 
} from '../icons/PhosphorIcons';
import { NavigationTab, Language } from '../../types/navigation';

interface SidebarProps {
    currentTab: NavigationTab;
    onTabChange: (tab: NavigationTab) => void;
    lang: Language;
    collapsed: boolean;
    onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
    currentTab,
    onTabChange,
    lang,
    collapsed,
}) => {
    const isAr = lang === 'ar';

    const menuItems = [
      { id: 'overview' as NavigationTab, label: isAr ? 'نظرة عامة' : 'Overview', icon: House },
      { id: 'locations' as NavigationTab, label: isAr ? 'الفروع والمناطق' : 'Branches & Zones', icon: MapPin, badge: '4' },
      { id: 'monitoring' as NavigationTab, label: isAr ? 'المراقبة المباشرة' : 'Live Monitoring', icon: Broadcast, badge: isAr ? 'بث حي' : 'LIVE', badgeColor: 'bg-emerald-500' },
      { id: 'playlists' as NavigationTab, label: isAr ? 'القوائم الموسيقية' : 'Playlists', icon: Playlist },
      { id: 'campaigns' as NavigationTab, label: isAr ? 'الإعلانات والحملات' : 'Campaigns & Ads', icon: Megaphone, badge: '2' },
      { id: 'schedule' as NavigationTab, label: isAr ? 'جدول الث' : 'Weekly Schedule', icon: CalendarBlank },
      { id: 'reports' as NavigationTab, label: isAr ? 'التقارير واإحصاءات' : 'Reports & Analytics', icon: ChartBar },
      { id: 'settings' as NavigationTab, label: isAr ? 'إعدادات المنصة' : 'Settings', icon: Gear },
        ];

    return (
          <aside className={`h-screen flex flex-col transition-all duration-300 bg-zinc-950 border-e border-zinc-800 text-zinc-300 select-none ${collapsed ? 'w-20' : 'w-64'}`}>
                  <div className="h-16 flex items-center gap-3 px-4 border-b border-zinc-800/80">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-zinc-950 font-bold shadow-lg shadow-emerald-900/30 shrink-0">
                                    <RadioIcon size={22} color="#09090b" />
                          </div>div>
                    {!collapsed && (
                      <div className="flex flex-col overflow-hidden">
                                  <span className="font-bold text-white tracking-wide text-base leading-tight">BranchCast</span>span>
                                  <span className="text-[11px] text-emerald-400 font-medium tracking-tight">
                                    {isAr ? 'نظام البث السحابي للفروع' : 'In-Store Audio OS'}
                                  </span>span>
                      </div>div>
                          )}
                  </div>div>
          
            {!collapsed && (
                    <div className="mx-3 my-3 p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800/90 flex items-center justify-between">
                              <div className="truncate">
                                          <p className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">
                                            {isAr ? 'العلامة التجارية' : 'Active Brand'}
                                          </p>p>
                                          <p className="text-xs font-medium text-zinc-100 truncate">
                                            {isAr ? 'محمصة وكافيه الأندلس' : 'Andaleeb Coffee & Roastery'}
                                          </p>p>
                              </div>div>
                              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                          4 {isAr ? 'فروع' : 'branches'}
                              </span>span>
                    </div>div>
                )}
          
                <nav className="flex-1 px-2.5 py-2 space-y-1 overflow-y-auto">
                  {menuItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = currentTab === item.id;
            
                      return (
                                    <button
                                                    key={item.id}
                                                    onClick={() => onTabChange(item.id)}
                                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors relative ${
                                                                      isActive 
                                                                        ? 'bg-zinc-800 text-white shadow-sm' 
                                                                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/70'
                                                    }`}
                                                    title={collapsed ? item.label : undefined}
                                                  >
                                                  <Icon size={20} className={isActive ? 'text-emerald-400' : 'text-zinc-400'} />
                                      {!collapsed && (
                                                                    <span className="flex-1 text-start truncate">{item.label}</span>span>
                                                  )}
                                      {!collapsed && item.badge && (
                                                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                                                                                        item.badgeColor 
                                                                                          ? `${item.badgeColor} text-zinc-950 animate-pulse` 
                                                                                          : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                                                                    }`}>
                                                                      {item.badge}
                                                                    </span>span>
                                                  )}
                                    </button>button>
                                  );
          })}
                </nav>nav>
          
                <div className="p-3 border-t border-zinc-800/80">
                        <div className={`flex items-center gap-3 p-2 rounded-lg bg-zinc-900/40 ${collapsed ? 'justify-center' : ''}`}>
                                  <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center font-semibold text-xs text-white shrink-0">
                                              OA
                                  </div>div>
                          {!collapsed && (
                        <div className="flex-1 truncate">
                                      <p className="text-xs font-medium text-zinc-200 truncate">
                                        {isAr ? 'أسامة طوابة' : 'Osama Tawalbeh'}
                                      </p>p>
                                      <p className="text-[10px] text-zinc-400">
                                        {isAr ? 'مدير العميات' : 'Operations Admin'}
                                      </p>p>
                        </div>div>
                                  )}
                        </div>div>
                </div>div>
          </aside>aside>
        );
};</div>
