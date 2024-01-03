
type SectionHeadingProps = {
    children: React.ReactNode
}
export function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <h2 className="text-3xl font-medium text-center mb-8  capitalize">{children}</h2>
    )
}
