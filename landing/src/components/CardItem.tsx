/**
 * @license AGPL-3.0-or-later
 */

import { type ProjectCard } from '../types';
import { formatStars } from '../utils/github';

interface CardItemProps {
  card: ProjectCard;
  stars: number | null;
}

export function CardItem({ card, stars }: CardItemProps) {
  return (
    <wa-card with-footer>
      {/* Header */}
      <h3 slot="header">{card.title}</h3>
      <wa-button slot="header-actions" appearance="plain" href={`https://github.com/${card.repoPath}`} target="_blank" rel="noopener noreferrer">
        <wa-icon name="star" variant="solid" label="Star count" />
        {formatStars(stars)}
      </wa-button>

      {/* Body */}
      {card.description}

      {/* Footer */}

      <div slot="footer" className="wa-gap-xs">
        <wa-button variant="brand" href={card.docsHref}>Open {card.label} docs</wa-button>
        <wa-button variant="outlined" href={`https://github.com/${card.repoPath}`} target="_blank" rel="noopener noreferrer">
          GitHub
        </wa-button>
      </div>
    </wa-card>
  );
}
