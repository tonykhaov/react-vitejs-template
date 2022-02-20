function Title(props: React.PropsWithChildren<React.ReactNode>) {
  return <h1 {...props}>{props.children}</h1>
}

export default Title
