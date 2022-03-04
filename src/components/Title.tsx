import clsx from 'clsx'

function Title(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 {...props} className={clsx('text-6xl', props.className)}>
      {props.children}
    </h1>
  )
}

export default Title
