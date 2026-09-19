import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { NavigationTab, Language, Branch } from '../../types/navigation';
import { OverviewPage } from '../../pages/OverviewPage';
import { LocationsPage } from '../../pages/LocationsPage';
import { LiveMonitoringPage } from '../../pages/LiveMonitoringPage';
import { PlaylistsPage } from '../../pages/PlaylistsPage';
import { CampaignsPage } from '../../pages/CampaignsPage';
import { SchedulePage } from '../../pages/SchedulePage';
import { ReportsPage } from '../../pages/ReportsPage';
import { SettingsPage } from '../../pages/SettingsPage';

const INITIAL_BRANCHES: Branch[] = [
  {
        id: 'b1',
        nameAr: 'فرع ارع الجامعة',
        nameEn: 'University Street Branch',
        cityAr: 'إربد',
        cityEn: 'Irbid',
        zonesCount: 3,
        status: 'online',
        currentTrack: 'Acoustic Morning — Fairouz Re-imagined',
  },
  {
        id: 'b2',
        nameAr: 'فرع إربد سيتي سنتر',
        nameEn: 'Irbid City Center Branch',
        cityAr: 'إربد',
        cityEn: 'Irbid',
        zonesCount: 2,
        status: 'online',
        currentTrack: 'Modern Arabic Lounge (Chill Vibes)',
  },
  {
        id: 'b3',
        nameAr: 'فع عبدون',
        nameEn: 'Abdoun Branch',
        cityAr: 'عمّان',
        cityEn: 'Amman',
        zonesCount: 3,
        status: 'online',
        currentTrack: 'Specialty Coffee Roasters Playlist',
  },
  {
        id: 'b4',
        nameAr: 'فرع الدوار السابع',
        nameEn: '7th Circle Branch',
        cityAr: 'عمّا',
        cityEn: 'Amman',
        zonesCount: 2,
        status: 'online',
        currentTrack: 'Acoustic Morning — Fairouz Re-imagined',
  },
  ];

export const AppShell: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<NavigationTab>('overview');
    const [lang, setLang] = useState<Language>('ar');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [selectedBranchId, setSelectedBranchId] = useState('all');

    const isAr = lang === 'ar';

    const pageTitles: Record<NavigationTab, { ar: string; en: string }> = {
          overview: { ar: 'لوحة التحكم الرسية', en: 'Overview Dashboard' },
          locations: { ar: 'إدارة الفروع والمناطق الصوتية', en: 'Branches & Audio Zones' },
          monitoring: { ar: 'المراقبة اللحظية وحالة الأجهزة', en: 'Live Monitoring & Devices' },
          playlists: { ar: 'القوائم الموسيقية المرخصة', en: 'Commercial Playlists' },
          campaigns: { ar: 'الحملات والإعلانات الصوتية', en: 'Audio Campaigns & Ads' },
          schedule: { ar: 'جدول البث الأسبوعي', en: 'Weekly Broadcast Schedule' },
          reports: { ar: 'تقارير البث والتغيل', en: 'Playback Reports & Analytics' },
          settings: { ar: 'إعدادات المنصة والصلاحيات', en: 'System & Brand Settings' },
    };

    return (
          <div 
                  dir={isAr ? 'rtl' : 'ltr'} 
            className="min-h-screen flex bg-zinc-900 text-zinc-100 font-sans antialiased selection:bg-emerald-500 selection:text-zinc-950"
                >
                <Sidebar
                          currentTab={currentTab}
                          onTabChange={setCurrentTab}
                          lang={lang}
                          collapsed={sidebarCollapsed}
                          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
                        />
          
                <div className="flex-1 flex flex-col min-w-0">
                        <Header
                                    branches={INITIAL_BRANCHES}
                                    selectedBranchId={selectedBranchId}
                                    onSelectBranch={setSelectedBranchId}
                                    lang={lang}
                                    onToggleLang={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                                    onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
                                    pageTitle={isAr ? pageTitles[currentTab].ar : pageTitles[currentTab].en}
                                  />
                
                        <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-zinc-900">
                          {currentTab === 'overview' && <OverviewPage lang={lang} branches={INITIAL_BRANCHES} />}
                          {currentTab === 'locations' && <LocationsPage lang={lang} branches={INITIAL_BRANCHES} />}
                          {currentTab === 'monitoring' && <LiveMonitoringPage lang={lang} branches={INITIAL_BRANCHES} />}
                          {currentTab === 'playlists' && <PlaylistsPage lang={lang} />}
                          {currentTab === 'campaigns' && <CampaignsPage lang={lang} />}
                          {currentTab === 'schedule' && <SchedulePage lang={lang} />}
                          {currentTab === 'reports' && <ReportsPage lang={lang} />}
                          {currentTab === 'settings' && <SettingsPage lang={lang} />}
                        </main>main>
                </div>div>
          </div>div>
        );
};</div>
