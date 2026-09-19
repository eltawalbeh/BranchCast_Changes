export type NavigationTab = 
  | 'overview' 
  | 'locations' 
  | 'monitoring' 
  | 'playlists' 
  | 'campaigns' 
  | 'schedule' 
  | 'reports' 
  | 'settings';

export type Language = 'ar' | 'en';

export interface Branch {
    id: string;
    nameAr: string;
    nameEn: string;
    cityAr: string;
    cityEn: string;
    zonesCount: number;
    status: 'online' | 'offline' | 'syncing';
    currentTrack?: string;
}

export interface NavItem {
    id: NavigationTab;
    labelAr: string;
    labelEn: string;
    badge?: string | number;
    badgeType?: 'default' | 'success' | 'warning';
}
