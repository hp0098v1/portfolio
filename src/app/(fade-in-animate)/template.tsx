type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <div className='min-h-screen py-20 px-4 motion-preset-fade motion-duration-1500'>
      {children}
    </div>
  );
}
