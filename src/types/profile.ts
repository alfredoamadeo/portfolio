// No imports needed for this file

export interface Contact {
  icon: React.ComponentType<{ size?: number }>;
  content: string;
  href: string;
  latitude?: number;
  longitude?: number;
}

export interface Social {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
}

export interface ProfileData {
  avatarUrl: string;
  name: string;
  title: string;
  tagline?: string;
  contacts: Contact[];
  socials: Social[];
  skills: string[];
  cvUrl?: string;
}

export interface ProfileAsideProps {
  profile?: Partial<ProfileData>;
}
