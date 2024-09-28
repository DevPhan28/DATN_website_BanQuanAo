import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/categories/')({
  component: () => <div>Hello /_layout/categories/!</div>,
})
