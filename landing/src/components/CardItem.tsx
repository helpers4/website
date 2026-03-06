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
    <wa-card>
      <h3 slot="header">{card.name}</h3>
      <wa-button slot="header-actions" appearance="plain" href={`https://github.com/${card.repoPath}`} target="_blank" rel="noopener noreferrer">
        <wa-icon name="star" variant="solid" label="Star count" />
        {formatStars(stars)}
      </wa-button>

      <p style={{ margin: 0 }}>{card.description}</p>

      <wa-button slot="footer-actions" variant="brand" href={card.docsHref}>
        Open {card.name} docs
      </wa-button>
    </wa-card>
  );
}
