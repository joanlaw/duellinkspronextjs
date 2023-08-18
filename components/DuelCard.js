// components/DuelCard.js
import Link from 'next/link';
import { Card } from '@nextui-org/react';

export default function DuelCard({ duel }) {
  return (
    <Card shadow hoverable>
      <h3>{duel.player1} vs. {duel.player2}</h3>
      <p>Estado: {duel.status}</p>
      <Link href={`/duels/${duel._id}`}>
        <a>Ver detalles</a>
      </Link>
    </Card>
  );
}
