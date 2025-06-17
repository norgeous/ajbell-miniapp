import { ReactNode } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface IExternalLink {
  href: string;
  children: ReactNode;
}

const ExternalLink = ({ href, children }: IExternalLink) => (
  <a href={href} target="_blank" style={{ display: 'block' }}>
    {children} <FaExternalLinkAlt />
  </a>
);

export default ExternalLink;
