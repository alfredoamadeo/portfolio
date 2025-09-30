import { Group, Anchor } from '@mantine/core';
import type { Contact } from '../types/profile';

export const renderContactItem = (contact: Contact, index: number) => {
  const Icon = contact.icon;
  
  return (
    <Group key={index} gap="sm">
      <Icon size={16} />
      <Anchor href={contact.href} size="sm">
        {contact.content}
      </Anchor>
    </Group>
  );
};

export const renderSocialItem = (social: { icon: React.ComponentType<{ size?: number }>; href: string }) => {
  const Icon = social.icon;
  
  return (
    <Anchor key={social.href} href={social.href} target="_blank">
      <Icon size={20} />
    </Anchor>
  );
};
