import React from 'react';
import { Branch, Language } from '../types/navigation';
import { MapPin } from '../components/icons/PhosphorIcons';

interface LocationsProps {
    lang: Language;
    branches: Branch[];
}

export const LocationsPage: React.FC<LocationsProps> = ({ lang, branches }) => {
    const isAr = lang === 'ar';

    return (
          <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                                  <h2 className="text-lg font-bold text-white">{isAr ? 'فروع الركة والمناطق الصوتية' : 'Branches & Audio Zones'}</h2>h2>
                                  <p className="text-xs text-zinc-400 mt-0.5">
                                    {isAr ? 'دارة مكبات الصوت والأجهزة المقترنة ي إربد وعمّان' : 'Manage paired sound systems and zones in Irbid & Amman'}
                                  </p>p>
                        </div>div>
                        <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-semibold text-xs rounded-lg transition-colors shadow-md">
                          {isAr ? '+ إضافة فرع جديد' : '+ Add New Branch'}
                        </button>button>
                </div>div>
          
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {branches.map(b => (
                      <div key={b.id} className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors">
                                  <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                                <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-emerald-400 border border-zinc-800">
                                                                                  <MapPin size={22} />
                                                                </div>div>
                                                                <div>
                                                                                  <h3 className="font-bold text-zinc-100 text-sm">{isAr ? b.nameAr : b.nameEn}</h3>h3>
                                                                                  <span className="text-xs text-zinc-400">{isAr ? b.cityAr : b.cityEn} — الأردن</span>span>
                                                                </div>div>
                                                </div>div>
                                                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">
                                                  {isAr ? 'متصل' : 'Online'}
                                                </span>span>
                                  </div>div>
                      
                                  <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                                                <span>{isAr ? `المناطق الصوتية: ${b.zonesCount}` : `Audio Zones: ${b.zonesCount}`}</span>span>
                                                <span className="text-emerald-400 font-medium">{isAr ? 'مشغل Web Player v1.0' : 'Web Player v1.0'}</span>span>
                                  </div>div>
                      </div>div>
                    ))}
                </div>div>
          </div>div>
        );
};</div>
