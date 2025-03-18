interface OrderSummaryProps {
  items: {
    id: string;
    name: string;
    price: number;
  }[];
}

export function OrderSummary({ items }: OrderSummaryProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="grid grid-cols-1 gap-10 mb-8 lg:w-[522px] lg:h-[454px]">
      <div className="rounded-lg border bg-white px-4 py-6 font-archivo">
        <h2 className="mb-3 text-2xl font-bold">Order Summary</h2>
        <p className="mb-6 text-lg text-contentSecondary">
          {items.length} items
        </p>

        <div className="border-b pt-5 pb-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mb-3 text-lg tracking-[0.025em]"
            >
              <span className="truncate max-w-[230px]" title={item.name}>
                {item.name}
              </span>
              <span>$ {item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex justify-between font-bold tracking-[0.025em] text-xl">
            <span>Order Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <button className="w-full h-12 rounded-lg bg-contentPrimary py-3 text-sm font-bold tracking-[0.031em] text-white transition-colors hover:bg-secondary">
        Checkout
      </button>
    </div>
  );
}
