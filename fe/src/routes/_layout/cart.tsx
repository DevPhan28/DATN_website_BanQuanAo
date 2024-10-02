import { Button } from '@medusajs/ui';
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/cart')({
  component: Cart
})

function Cart() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate({ to: '/' })}>Click</Button>
      <h1>Dditj me dat dui</h1>
    </div>
  )
}