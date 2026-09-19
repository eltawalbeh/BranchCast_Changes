import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
}

export const OverviewIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill={color} {...props}>
        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM216,200H40V56H216V200Z" />
    </svg>svg>
  );

export const LocationsIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill={color} {...props}>
        <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.2,80,132.1,83.4,134.5a8,8,0,0,0,9.2,0C136,236.1,216,179.2,216,104A88.1,88.1,0,0,0,128,16Zm0,112a24,24,0,1,1,24-24A24,24,0,0,1,128,128Z" />
    </svg>svg>
  );

export const MonitoringIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill={color} {...props}>
        <path d="M208,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,144H40V56H208V184Z" />
    </svg>svg>
  );

export const PlaylistsIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill={color} {...props}>
        <path d="M216,64H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
    </svg>svg>
  );

export const CampaignsIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill={color} {...props}>
        <path d="M160,32H96A16,16,0,0,0,80,48V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V48A16,16,0,0,0,160,32Z" />
    </svg>svg>
  );

export const ScheduleIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill={color} {...props}>
        <path d="M208,32H184V16a8,8,0,0,0-16,0V32H88V16a8,8,0,0,0-16,0V32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z" />
    </svg>svg>
  );

export const ReportsIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill={color} {...props}>
        <path d="M224,200H32a8,8,0,0,1,0-16H224a8,8,0,0,1,0,16Z" />
    </svg>svg>
  );

export const SettingsIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill={color} {...props}>
        <path d="M128,80a48,48,0,1,0,48,48A48,48,0,0,0,128,80Z" />
    </svg>svg>
  );

export const GlobeIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill={color} {...props}>
        <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeWidth="16" />
    </svg>svg>
  );

export const BellIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill={color} {...props}>
        <path d="M221.8,175.9A16,16,0,0,1,208,184H48a16,16,0,0,1-13.8-24.1L56,123.3V96a72,72,0,0,1,144,0v27.3l21.8,36.6A16,16,0,0,1,221.8,175.9Z" />
    </svg>svg>
  );</svg>
