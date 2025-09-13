const ATS = ({
  score,
  suggestions,
}: {
  score: number;
  suggestions: { type: 'good' | 'improve'; tip: string }[];
}) => {
  let color = '';
  let icon = '';
  if (score > 70) {
    color = 'from-green-100';
    icon = '/icons/ats-good.svg';
  } else if (score > 49) {
    color = 'from-yellow-100';
    icon = '/icons/ats-warning.svg';
  } else {
    color = 'from-red-100';
    icon = '/icons/ats-bad.svg';
  }
  return (
    <div
      className={`rounded-2xl shadow-md w-full bg-gradient-to-b to-light-white p-8 flex flex-col gap-4 ${color}`}
    >
      <div className='flex flex-row gap-4 items-center'>
        <img src={icon} alt='ATS' className='w-10 h-10' />
        <p className='text-2xl font-semibold'>ATS Score - {score}/100</p>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-medium text-xl'>
          How well does your resume pass through Applicant Tracking Systems?
        </p>
        <p className='text-lg text-gray-500'>
          Your resume was scanned like an employer would. Here's how it
          performed:
        </p>
        {suggestions.map((suggestion, index) => (
          <div
            className='flex flex-row gap-2 items-center'
            key={suggestion.tip + index}
          >
            <img
              src={
                suggestion.type === 'good'
                  ? '/icons/check.svg'
                  : '/icons/warning.svg'
              }
              alt='ATS'
              className='w-4 h-4'
            />
            <p className='text-lg text-gray-500'>{suggestion.tip}</p>
          </div>
        ))}
        <p className='text-lg text-gray-500'>
          Want a better score? Improve your resume by applying the suggestions
          listed below.
        </p>
      </div>
    </div>
  );
};

export default ATS;
