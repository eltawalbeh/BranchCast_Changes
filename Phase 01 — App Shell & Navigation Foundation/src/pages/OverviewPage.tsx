import React from 'react';
import { Branch, Language } from '../types/navigation';
import { Broadcast, MapPin, Playlist, Megaphone } from '../components/icons/PhosphorIcons';

interface OverviewProps {
    lang: Language;
    branches: Branch[];
}

export const OverviewPage: React.FC<OverviewProps> = ({ lang, branches }) => {
    const isAr = lang === 'ar';

    const stats = [
      {
              title: isAr ? 'الفروع النشطة' : 'Active Branches',
              value: '4 / 4',
              sub: isAr ? '100% متصلة بالإنترن' : '100% Online',
              icon: MapPin,
              color: 'text-emerald-400',
      },
      {
              title: isAr ? 'المناطق الصوتية' : 'Audio Zones',
              value: '10 Zones',
              sub: isAr ? 'تشغيل تزامن بدون انقطاع' : 'Concurrent live playback',
              icon: Broadcast,
              color: 'text-teal-400',
      },
      {
              title: isAr ? 'ساعات الب اليوم' : 'Broadcast Hours Today',
              value: '42.5 hrs',
              sub: isAr ? 'معدل نجاح 99.8%' : '99.8% Uptime',
              icon: Playlist,
              color: 'text-indigo-400',
      },
      {
              title: isAr ? 'مرات بث الإعلانات' : 'Ad Impressions Today',
              value: '128',
              sub: isAr ? 'عرض القهوة والكيك الصباحي' : 'Active Promo Running',
              icon: Megaphone,
              color: 'text-amber-400',
      },
        ];

    return (
          <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                                    {isAr ? 'البث الصوتي الموحد' : 'Central In-Store Audio'}
                                  </span>span>
                                  <h2 className="text-xl font-bold text-white mt-2">
                                    {isAr ? 'أهلاً بك في BranchCast — لوحة تحكم الفروع' : 'Welcome to BranchCast — Multi-Branch Audio'}
                                  </h2>h2>
                                  <p className="text-sm text-zinc-400 mt-1">
                                    {isAr 
                                                    ? 'تتم إدارة ومراقبة البث الصوتي والإعلانات لجميع فروع إربد وعمّان من هذا المكان مركزياً.' 
                                                    : 'Centrally manage in-store music and automated voice announcements across your Irbid and Amman branches.'}
                                  </p>p>
                        </div>div>
                </div>div>
          
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((s, idx) => {
                      const Icon = s.icon;
                      return (
                                    <div key={idx} className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800 flex flex-col justify-between">
                                                  <div className="flex items-center justify-between">
                                                                  <span className="text-xs text-zinc-400 font-medium">{s.title}</span>span>
                                                                  <Icon size={20} className={s.color} />
                                                  </div>div>
                                                  <div className="mt-4">
                                                                  <p className="text-2xl font-bold text-white tracking-tight">{s.value}</p>p>
                                                                  <p className="text-xs text-emerald-400 font-medium mt-1">{s.sub}</p>p>
                                                  </div>div>
                                    </div>div>
                                  );
          })}
                </div>div>
          
                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
                        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                                  <div>
                                              <h3 className="text-base font-bold text-white">{isAr ? 'حالة البث المباشر للفرع' : 'Branches Playback Status'}</h3>h3>
                                              <p className="text-xs text-zinc-400">{isAr ? 'مراقبة التراكات المشغلة حالاً في كل فرع' : 'Real-time track monitoring per branch'}</p>p>
                                  </div>div>
                                  <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-900">
                                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    {isAr ? 'جميع الأجزة متصلة' : 'All Players Synced'}
                                  </span>span>
                        </div>div>
                
                        <div className="divide-y divide-zinc-800/60 mt-2">
                          {branches.map((b) => (
                        <div key={b.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                      <div className="flex items-center gap-3">
                                                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50 shrink-0" />
                                                      <div>
                                                                        <p className="text-sm font-semibold text-zinc-100">
                                                                          {isAr ? b.nameAr : b.nameEn}
                                                                                            <span className="ms-2 text-xs font-normal text-zinc-400">({isAr ? b.cityAr : b.cityEn})</span>span>
                                                                        </p>p>
                                                                        <p className="text-xs text-zinc-400 mt-0.5">
                                                                          {isAr ? `المناطق: ${b.zonesCount} (الصالة الرئيسية، التراس)` : `Zones: ${b.zonesCount} (Indoor, Patio)`}
                                                                        </p>p>
                                                      </div>div>
                                      </div>div>
                                      <div className="sm:text-end ps-5 sm:ps-0">
                                                      <span className="text-[11px] text-zinc-400 block">{isAr ? 'يعمل الآن:' : 'Now Playing:'}</span>span>
                                                      <span className="text-xs text-emerald-300 font-medium">{b.currentTrack}</span>span>
                                      </div>div>
                        </div>div>
                      ))}
                        </div>div>
                </div>div>
          </div>div>
        );
};</div>
