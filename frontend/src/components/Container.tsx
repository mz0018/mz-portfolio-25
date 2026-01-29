type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <div className="mx-auto max-w-5xl p-4">
      {children}
    </div>
  )
}
