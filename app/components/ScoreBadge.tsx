export default function ScoreBadge({ score }: Readonly<{ score: number }>) {
  let badgeClasses = '';
  let badgeText = '';

  if (score > 70) {
    badgeClasses = 'bg-badge-green text-green-600';
    badgeText = 'Strong';
  } else if (score > 49) {
    badgeClasses = 'bg-badge-yellow text-yellow-600';
    badgeText = 'Good Start';
  } else {
    badgeClasses = 'bg-badge-red text-red-600';
    badgeText = 'Needs Work';
  }

  return (
    <div
      className={`rounded-full px-3 py-1 text-sm font-semibold ${badgeClasses}`}
    >
      <p>{badgeText}</p>
    </div>
  );
}
