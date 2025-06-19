import { ReactNode } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { A } from './styled';

interface IExternalLink {
  href: string;
  children: ReactNode;
}

const ExternalLink = ({ href, children }: IExternalLink) => (
  <A href={href} target="_blank">
    {children} <FaExternalLinkAlt />
  </A>
);

export default ExternalLink;
